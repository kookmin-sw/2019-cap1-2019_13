import React , {Component}  from 'react';
import {AppRegistry,Image, View, Text ,Alert,Button} from 'react-native';
import {TouchableOpacity,StyleSheet,TouchableHighlight} from 'react-native';
import { createStackNavigator, createAppContainer,NavigationActions } from 'react-navigation'; 
import Tts from 'react-native-tts';
import Voice from 'react-native-voice';
import Toast from "@remobile/react-native-toast";
import BluetoothSerial, {
    withSubscription
} from "react-native-bluetooth-serial-next";

export default class AbQuiz1 extends Component {
    constructor(props) {
        super(props);
        this.mounted = false;
        this.state = {
            started: '',
            results: [],
           
        };

        Tts.speak("약어약자 퀴즈입니다 약자 받침 'ㅆ'은 몇번인가요?",{language:"ko"});

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
        const device_dot_in_abquiz = this.props.navigation.getParam('deviceinfo3', 'cantread');
        console.log("device info in Abquiz: ", device_dot_in_abquiz.id);
        
        if (speech.includes("문제")) {
            Tts.speak("약어약자 퀴즈입니다 약자 받침 'ㅆ'은 몇번인가요?",{language:"ko"});
            this.setState({
                results: '',
            
            });
        }
        else if (speech.includes("다음")) {
            this.props.navigation.navigate('AbQuiz2');
            this.setState({
                results: '',
            
            });
        }
        else if (speech.includes("정답")) {
            Tts.speak("정답은 3번입니다.",{language:"ko"});
            this.setState({
                results: '',
            
            });
        }
        else if (speech.includes("시작")) {
            
            this.props.navigation.navigate('Quiz');
            this.setState({
                results: '',
            
            });
        }
        else if (speech.includes("1번")) {
            this.write(device_dot_in_abquiz.id, "1000100F");
        }
        else if (speech.includes("2번")) {
            this.write(device_dot_in_abquiz.id, "1100100F");
        }
        else if (speech.includes("3번")) {
            this.write(device_dot_in_abquiz.id, "1001100F");
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
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor :'bisque'  }}>
                <TouchableOpacity style={{ flex: 1 }}  onPress={() => {this._startRecognition(); }}>
                    <TouchableOpacity style={{backgroundColor:'orange',borderRadius: 5 ,top:70,position: 'absolute',left:-80}} onPress={() => {this._startRecognition(); }} >
                        <Text style ={{fontSize:30,color:'white'}}>문제듣기 </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{backgroundColor:'orange',borderRadius: 5 ,top:70,position: 'absolute',right:-80}} onPress={() => {this._startRecognition(); }} >
                        <Text style ={{fontSize:30,color:'white'}}>다음문제 </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{backgroundColor:'black',borderRadius: 5 , margin:50,padding:15,bottom:10}} onPress={() => {this._startRecognition(); }} >
                        <Text style ={{fontSize:30,color:'white'}}>QUIZ! </Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={{ backgroundColor:'orange',position: 'absolute',top:230,margin:60,padding:30,borderRadius: 10,left:-120}} onPress={() => {this._startRecognition();}}>
                        <Text style ={{fontSize:70,color:'white' }}>1</Text>
                    </TouchableOpacity>

                    <Text style = {{fontSize:40}}>약자 받침 "ㅆ"은? </Text> 

                    <TouchableOpacity style={{backgroundColor:'orange', margin:60,padding:30,bottom:5, borderRadius: 10}} onPress={() => {this._startRecognition();}} >
                        <Text style ={{fontSize:70,color:'white'}}>2</Text>
                    </TouchableOpacity>
                        
                    <TouchableOpacity style={{ backgroundColor:'orange',position: 'absolute',top:230,margin:60,padding:30,borderRadius: 10,right:-120}} onPress={() => {this._startRecognition();}} >
                        <Text style ={{fontSize:70,color:'white'}}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{backgroundColor:'black', position:'absolute',left:-50,paddingTop:10,paddingBottom:10, paddingLeft:20, paddingRight:20, borderRadius: 10 ,  bottom :80   }} onPress={() => {this._startRecognition(); }}  >
                        <Text style ={{fontSize:20,color:'white' }}>시작페이지</Text>
                    </TouchableOpacity>
                                
                    <TouchableOpacity style={{backgroundColor:'black', position:'absolute',right:-20,paddingTop:10,paddingBottom:10, paddingLeft:20, paddingRight:20, borderRadius: 10 ,  bottom :80   }} onPress={() => {this._startRecognition(); }}  >
                        <Text style ={{fontSize:20,color:'white' }}>정답듣기</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        );
}    
}
      