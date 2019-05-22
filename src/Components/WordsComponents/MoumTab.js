import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from 'native-base';
import Tts from 'react-native-tts';
import Toast from "@remobile/react-native-toast";
import BluetoothSerial, {
    withSubscription
} from "react-native-bluetooth-serial-next";
import Voice from 'react-native-voice';

class MoumTab extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            started: '',
            results: [],
   
        };
        this.mounted = false;
        Tts.speak("어떤 글자를 알고싶나요",{language:"ko"});

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
        console.log("mountab에서 onspeechpartial");
        let speech = e.value[0].split(" ").slice(-1)[0];
        console.log("speech: ", speech);
        const device_dot_in_moum = this.props.navigation.getParam('deviceinfo2', 'cantread');
        const {goBack} = this.props.navigation;

        if (speech.includes("뒤로")) {
            goBack();
        }
        else if (speech.includes("아")) {
            console.log("아 들었!");               
            this.write(device_dot_in_moum.id, "1110001F");
            this.setState({
                results: '',
            });
        } 
        else if (speech.includes("야")) {
            console.log("야 들었!");
            this.write(device_dot_in_moum.id, "1001110F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("어")) {
            this.write(device_dot_in_moum.id, "1011110F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("여")) {
            this.write(device_dot_in_moum.id, "1100011F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("오")) {
            this.write(device_dot_in_moum.id, "1101001F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("요")) {
            this.write(device_dot_in_moum.id, "1001101F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("우")) {
            this.write(device_dot_in_moum.id, "1101100F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("유")) {
            this.write(device_dot_in_moum.id, "1100101F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("으")) {
            this.write(device_dot_in_moum.id, "1010101F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("이")) {
            this.write(device_dot_in_moum.id, "1101010F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("애")) {
            this.write(device_dot_in_moum.id, "1111010F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("얘")) {
            this.write(device_dot_in_moum.id, "2001110111010F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("에")) {
            this.write(device_dot_in_moum.id, "1101110F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("예")) {
            this.write(device_dot_in_moum.id, "1001100F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("와")) {
            this.write(device_dot_in_moum.id, "1111001F");
            this.setState({
                results: '',
            });
        }
        else if (speech == "왜") {
            console.log("왜 들었!");
            this.write(device_dot_in_moum.id, "2111001111010F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("외")) {
            this.write(device_dot_in_moum.id, "1101111F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("워")) {
            this.write(device_dot_in_moum.id, "1111100F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("웨")) {
            this.write(device_dot_in_moum.id, "2111100111010F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("위")) {
            this.write(device_dot_in_moum.id, "2101100111010F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("의")) {
            this.write(device_dot_in_moum.id, "1010111F");
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
        const device_dot_in_moum = this.props.navigation.getParam('deviceinfo2', 'cantread');
        console.log("device info in moumpage: ", device_dot_in_moum.id);
        
        return (
            <ScrollView style={ styles.container }>
                <View style={styles.goback}> 
                    <Icon name="md-arrow-round-back" onPress={()=>{goBack(); Tts.speak("뒤로가기", { language: "ko", rate : 0.75 });}} />
                </View>
                
                <View style={styles.syllables}>
                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅏ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_moum.id, "1110001F");}} style={styles.button}>
                            <Text style={styles.text}>ㅏ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅑ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_moum.id, "1001110F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅑ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅓ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_moum.id, "1011110F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅓ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅕ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_moum.id, "1100011F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅕ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅗ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_moum.id, "1101001F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅗ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅛ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_moum.id, "1001101F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅛ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅜ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_moum.id, "1101100F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅜ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅠ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_moum.id, "1100101F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅠ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅡ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_moum.id, "1010101F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅡ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅣ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_moum.id, "1101010F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅣ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅐ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_moum.id, "1111010F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅐ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅒ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_moum.id, "2001110111010F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅒ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅔ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_moum.id, "1101110F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅔ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅖ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_moum.id, "1001100F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅖ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅘ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_moum.id, "1111001F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅘ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅙ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_moum.id, "2111001111010F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅙ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅚ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_moum.id, "1101111F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅚ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅝ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_moum.id, "1111100F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅝ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅞ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_moum.id, "2111100111010F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅞ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅟ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_moum.id, "2101100111010F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅟ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅢ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_moum.id, "1010111F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅢ</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity style={styles.sttbutton} onPress={() => {this._startRecognition();}}>
                        <Text style={{color: 'white', fontSize: 70}}>음성인식</Text>
                    </TouchableOpacity>                
                </View>
            </ScrollView>
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
        marginLeft: 20,
        marginRight: 20
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
        height: 200,
        width: 500, 
        backgroundColor: '#ff9933',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 70
    }
});

export default MoumTab; 