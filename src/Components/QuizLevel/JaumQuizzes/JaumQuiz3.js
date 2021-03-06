import React , {Component}  from 'react';
import {AppRegistry,Image, View, Text ,Alert,Button} from 'react-native';
import {TouchableOpacity,StyleSheet,TouchableHighlight} from 'react-native';
import { createStackNavigator, createAppContainer,NavigationActions } from 'react-navigation'; 
import Tts from 'react-native-tts';
import Voice from 'react-native-voice';
import Toast from "@remobile/react-native-toast";
import BluetoothSerial, {withSubscription } from "react-native-bluetooth-serial-next";

export default class a_quiz_three extends Component {
    constructor(props) {
        super(props);
        this.mounted = false;
        this.state = {
            started: '',
            results: [],
           
        };
        Tts.speak("자음퀴즈입니다 종성 시옷은 몇번인가요?",{language:"ko"});

        Voice.onSpeechStart = this.onSpeechStart.bind(this);
        Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this);
    }

    write = async (id, message) => {
        try {
          await BluetoothSerial.device(id).write(message);
          Toast.showShortBottom("Successfuly wrote to device");
        } catch (e) {
          Toast.showShortBottom(e.message);
        }
    };

    componentDidMount() {
        this.mounted = true;
    }

    componentWillUnmount() {
        Voice.destroy().then(Voice.removeAllListeners);
        this.mounted = false;
    }

    onSpeechStart(e) {
        if (this.mounted) { 
            this.setState({
                started: '√',
            });

        };
    }

    onSpeechPartialResults(e) {
        let speech = e.value[0].split(" ").slice(-1)[0];
        const device_dot_in_jaumquiz = this.props.navigation.getParam('deviceinfo3', 'cantread');
        console.log("device info in jaumquiz: ", device_dot_in_jaumquiz.id);

        if (speech.includes("문제")) {
            Tts.stop();
            Tts.speak("종성 시옷은 몇번인가요?",{language:"ko"});
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("다음")) {
            Tts.stop();
            Tts.speak("마지막 문제입니다",{language:"ko"});
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("정답")) {
            Tts.stop();
            Tts.speak("정답은 2번입니다.",{language:"ko"});
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("시작")) {
            Voice.destroy().then(Voice.removeAllListeners);
            this.mounted = false;
            this.props.navigation.pop(3);
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("1번") || speech.includes("일번")) {
            this.write(device_dot_in_jaumquiz.id, "1100100F");
        }
        else if (speech.includes("2번") || speech.includes("이번")) {
            this.write(device_dot_in_jaumquiz.id, "1001000F");
        }
        else if (speech.includes("3번") || speech.includes("삼번")) {
            this.write(device_dot_in_jaumquiz.id, "1011100F");
        }
    }
    async _startRecognition(e) {
        if (this.mounted) {
            this.setState({
                started: '',
                results: [],
            });
            try {
                await Voice.start('ko-KR');
            } catch (e) {
                console.error(e);
            }
        }
    }

    render() {
        const device_dot_in_jaumquiz = this.props.navigation.getParam('deviceinfo3', 'cantread');
        return (
            <View style={{ flex: 1, backgroundColor : '#f5fcff' }}>
                <View style={styles.goback}></View>

                <TouchableOpacity style={{ flex: 0.9 }}>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <TouchableOpacity style={styles.buttonst} onPress={() => {Tts.stop(); Tts.speak("종성 시옷은 몇번인가요?", {language:"ko"});}} >
                            <Text style ={{fontSize:30, color:'white'}}>문제듣기</Text>
                        </TouchableOpacity>

                        <Text style={{color: 'black', fontSize: 75}}>Quiz</Text>
                        
                        <TouchableOpacity style={styles.buttonst} onPress={() => {Tts.stop(); Tts.speak("마지막 문제입니다",{language:"ko"});}} >
                            <Text style ={{fontSize:30, color:'white'}}>다음</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <TouchableOpacity style={styles.buttonst2} onPress={() =>  {Tts.stop(); Tts.speak("시작페이지로가기",{language:"ko"}); Voice.destroy().then(Voice.removeAllListeners); this.mounted = false; this.props.navigation.pop(3);}}  >
                            <Text style ={{fontSize:20, color:'white' }}>시작페이지</Text>
                        </TouchableOpacity>
                                    
                        <TouchableOpacity style={styles.buttonst2} onPress={() => {Tts.stop(); Tts.speak("정답은 2번입니다.",{language:"ko"});}}  >
                            <Text style ={{fontSize:20, color:'white' }}>정답듣기</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style = {{fontSize:60, color: 'black'}}>종성 'ㅅ'은?</Text> 
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 50}}>
                        <TouchableOpacity style={styles.button} onPress={() => {Tts.stop(); Tts.speak("일번",{language:"ko"}); this.write(device_dot_in_jaumquiz.id, "1100100F");}}>
                            <Text style ={{fontSize:70,color:'white' }}>1</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => {Tts.stop(); Tts.speak("이번",{language:"ko"}); this.write(device_dot_in_jaumquiz.id, "1001000F");}}>
                            <Text style ={{fontSize:70,color:'white'}}>2</Text>
                        </TouchableOpacity>
                            
                        <TouchableOpacity style={styles.button} onPress={() => {Tts.stop(); Tts.speak("삼번",{language:"ko"}); this.write(device_dot_in_jaumquiz.id, "1011100F");}}>
                            <Text style ={{fontSize:70,color:'white'}}>3</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity style={styles.sttbutton} onPress={() => {this._startRecognition();}}>
                            <Text style={{color: 'white', fontSize: 70}}>음성인식</Text>
                        </TouchableOpacity>                
                    </View>
                </TouchableOpacity>
            </View>

        );
    }    
}
      
const styles = StyleSheet.create({
    goback: {
        flex: 0.1,
        width: 40,
        height: 40,
        marginLeft: 20,
        marginTop: 20,
    },
    button: {
        borderRadius: 60,
        margin: 30,
        height: 110,
        width: 110, 
        backgroundColor: '#0080ff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    }, 
    buttonst: {
        borderRadius: 30,
        margin: 30,
        height: 70,
        width: 140, 
        backgroundColor: '#22509d',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    }, 
    buttonst2: {
        borderRadius: 30,
        margin: 30,
        height: 60,
        width: 110, 
        backgroundColor: '#22509d',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    }, 
    sttbutton: {
        borderRadius: 30,
        margin: 30,
        height: 250,
        width: 500, 
        backgroundColor: '#ff9933',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    }
});
