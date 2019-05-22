import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import Tts from 'react-native-tts';
import Toast from "@remobile/react-native-toast";
import BluetoothSerial, {
    withSubscription
} from "react-native-bluetooth-serial-next";
import Voice from 'react-native-voice';

class EndlJaumTab extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            started: '',
            results: [],
   
        };
        this.mounted = false;
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
        let speech = e.value[0].split(" ").slice(-1)[0];
        const device_dot_in_endjaum = this.props.navigation.getParam('deviceinfo2', 'cantread');
        const {goBack} = this.props.navigation;
        console.log("device info in endjaum: ", device_dot_in_endjaum.id);
        console.log(speech);

        if (speech.includes("뒤로")) {
            goBack();
        }
        else if (speech.includes("기억")) {               
            this.write(device_dot_in_endjaum.id, "1100000F");
            this.setState({
                results: '',
            });
        } 
        else if (speech.includes("니은")) {
            this.write(device_dot_in_endjaum.id, "1010010F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("디귿")) {
            this.write(device_dot_in_endjaum.id, "1001010F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("리을")) {
            this.write(device_dot_in_endjaum.id, "1010000F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("미음")) {
            this.write(device_dot_in_endjaum.id, "1010001F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("비읍")) {
            this.write(device_dot_in_endjaum.id, "1110000F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("시옷")) {
            this.write(device_dot_in_endjaum.id, "1001000F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("이응")) {
            this.write(device_dot_in_endjaum.id, "1011011F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("지읒")) {
            this.write(device_dot_in_endjaum.id, "1101000F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("치읓")) {
            this.write(device_dot_in_endjaum.id, "1011000F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("키읔")) {
            this.write(device_dot_in_endjaum.id, "1011010F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("티읕")) {
            this.write(device_dot_in_endjaum.id, "1011001F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("피읖")) {
            this.write(device_dot_in_endjaum.id, "1010011F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("히읗")) {
            this.write(device_dot_in_endjaum.id, "1001011F");
            this.setState({
                results: '',
            });
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
        const device_dot_in_endjaum = this.props.navigation.getParam('deviceinfo2', 'cantread');
        console.log("device info in endjaum: ", device_dot_in_endjaum.id);
        
        return (
            <View style={ styles.container }>
                <View style={styles.goback}> 
                    <Icon name="md-arrow-round-back" onPress={()=>{goBack(); Tts.speak("뒤로가기", { language: 'ko', rate: 0.75 });}}/>
                </View>

                <View style={styles.syllables}>
                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㄱ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_endjaum.id, "1100000F");}} style={styles.button}>
                            <Text style={styles.text}>ㄱ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㄴ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_endjaum.id, "1010010F");}}  style={styles.button}>
                            <Text style={styles.text}>ㄴ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㄷ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_endjaum.id, "1001010F");}}  style={styles.button}>
                            <Text style={styles.text}>ㄷ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㄹ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_endjaum.id, "1010000F");}}  style={styles.button}>
                            <Text style={styles.text}>ㄹ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅁ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_endjaum.id, "1010001F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅁ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅂ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_endjaum.id, "1110000F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅂ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅅ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_endjaum.id, "1001000F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅅ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅇ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_endjaum.id, "1011011F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅇ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅈ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_endjaum.id, "1101000F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅈ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅊ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_endjaum.id, "1011000F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅊ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅋ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_endjaum.id, "1011010F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅋ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅌ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_endjaum.id, "1011001F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅌ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅍ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_endjaum.id, "1010011F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅍ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅎ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_endjaum.id, "1001011F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅎ</Text>
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
        marginTop: 40,
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

export default EndlJaumTab; 