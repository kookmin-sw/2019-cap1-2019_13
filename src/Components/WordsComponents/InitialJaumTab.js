import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import Tts from 'react-native-tts';
import Toast from "@remobile/react-native-toast";
import BluetoothSerial, {
    withSubscription
} from "react-native-bluetooth-serial-next";
import Voice from 'react-native-voice';

class InitialJaumTab extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            started: '',
            results: [],
   
        };
        this.mounted = false;
        this.thisPage = '';
        Tts.speak("어떤 글자를 알고싶나요", {language:"ko"});

        Voice.onSpeechStart = this.onSpeechStart.bind(this);
        Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this);
    }
    componentDidMount() {
        this.mounted= true;
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
        console.log("initial 여기서 호출");
        var speech = e.value[0].split(" ").slice(-1)[0];
        console.log(speech);
        const device_dot_in_initialjaum = this.props.navigation.getParam('deviceinfo2', 'cantread');
        const {goBack} = this.props.navigation;

        if (speech.includes("뒤로")) {
            goBack();
        }
        else if (speech.includes("기억")) {     
            console.log("기역 말함");          
            this.write(device_dot_in_initialjaum.id, "1000100F");
            this.setState({
                results: '',
            });
        } 
        else if (speech.includes("니은")) {
            console.log("니은 말함");
            this.write(device_dot_in_initialjaum.id, "1100100F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("디귿")) {
            console.log("디귿 말함");
            this.write(device_dot_in_initialjaum.id, "1010100F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("리을")) {
            this.write(device_dot_in_initialjaum.id, "1000010F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("미음")) {
            this.write(device_dot_in_initialjaum.id, "1100010F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("비읍")) {
            this.write(device_dot_in_initialjaum.id, "1000110F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("시옷")) {
            console.log('시옷말함');
            this.write(device_dot_in_initialjaum.id, "1000001F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("지읒")) {
            this.write(device_dot_in_initialjaum.id, "1000101F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("치읓")) {
            this.write(device_dot_in_initialjaum.id, "1000011F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("키읔")) {
            this.write(device_dot_in_initialjaum.id, "1110100F");
            console.log('키읔 전송!');
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("티읕")) {
            this.write(device_dot_in_initialjaum.id, "1110010F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("피읖")) {
            this.write(device_dot_in_initialjaum.id, "1100110F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("히읗")) {
            console.log('여긴 히읗');
            this.write(device_dot_in_initialjaum.id, "1010110F");
            console.log('히읗 전송!!');
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("된소리")) {
            this.write(device_dot_in_initialjaum.id, "1000001F");
            this.setState({
                results: '',
            });
        }
    }

    async _startRecognition(e) {
        console.log("이니셜 자음에서 눌렀어~");
        this.thisPage = "InitialJaumPage";
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

    write = async (id, message) => {
        try {
          await BluetoothSerial.device(id).write(message);
          Toast.showShortBottom("Successfuly wrote to device");
        } catch (e) {
          Toast.showShortBottom(e.message);
        }
    };
    
    render() {
        const {goBack} = this.props.navigation;
        const device_dot_in_initialjaum = this.props.navigation.getParam('deviceinfo2', 'cantread');
        console.log("device info in intialjaum: ", device_dot_in_initialjaum.id);
        
        return (
            <View style={ styles.container }>
                <View style={styles.goback}> 
                    <Icon name="md-arrow-round-back" onPress={()=>{goBack(); Tts.speak("뒤로가기", { language: "ko", rate : 0.75 });}} />
                </View>
                
                <View style={styles.syllables}>
                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㄱ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_initialjaum.id, "1000100F");} } style={styles.button}>
                            <Text style={styles.text}>ㄱ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㄴ", { language: "ko", rate : 0.3 }); this.write(device_dot_in_initialjaum.id, "1100100F");}}  style={styles.button}>
                            <Text style={styles.text}>ㄴ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㄷ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_initialjaum.id, "1010100F");}}  style={styles.button}>
                            <Text style={styles.text}>ㄷ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㄹ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_initialjaum.id, "1000010F");}}  style={styles.button}>
                            <Text style={styles.text}>ㄹ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅁ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_initialjaum.id, "1100010F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅁ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅂ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_initialjaum.id, "1000110F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅂ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅅ", { language: "ko", rate : 0.6 }); this.write(device_dot_in_initialjaum.id, "1000001F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅅ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅈ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_initialjaum.id, "1000101F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅈ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅊ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_initialjaum.id, "1000011F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅊ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅋ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_initialjaum.id, "1110100F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅋ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅌ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_initialjaum.id, "1110010F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅌ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅍ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_initialjaum.id, "1100110F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅍ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅎ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_initialjaum.id, "1010110F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅎ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("된소리", { language: "ko", rate : 0.75 }); this.write(device_dot_in_initialjaum.id, "1000001F");}}  style={styles.button}>
                            <Text style={styles.text}>된소리</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity style={styles.sttbutton} onPress={() => {this._startRecognition();}}>
                        <Text style={{color: 'white', fontSize: 70}}>음성인식</Text>
                    </TouchableOpacity>                
                </View>
            </View>

                
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f5fcff',
    },
    goback: {
        width: 40,
        height: 40,
        margin: 20,
    },
    syllables: {
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 30,
    },
    button: {
        borderRadius:30, 
        margin:10, 
        flex: 1,
        height:65, 
        backgroundColor:'#22509d', 
        justifyContent:'center',
    }, 
    text: {
        color:'white', 
        textAlign:'center', 
        fontWeight:'bold', 
        fontSize:30,
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
        marginBottom: 70
    }
});

export default InitialJaumTab; 