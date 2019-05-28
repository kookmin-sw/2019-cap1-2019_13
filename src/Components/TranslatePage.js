import React, { Component } from 'react';
import { View, Text, StyleSheet, NativeAppEventEmitter, Button, ListView } from 'react-native';
import { Icon } from 'native-base';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import Tts from 'react-native-tts';
import Voice from 'react-native-voice';
import Toast from "@remobile/react-native-toast";
import BluetoothSerial, {
    withSubscription
} from "react-native-bluetooth-serial-next";


export default class InfoTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            started: '',
            results: [],
            spokenWord: "",
            spokenWordsDot: "",
        };

        
        this.mounted = false;
        Tts.speak("번역하고 싶은 단어가 있나요?",{language:"ko"});
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
        console.log(speech);
        const {goBack} = this.props.navigation;
        const device_dot_in_translate = this.props.navigation.getParam('deviceinfo', 'cantread');
        console.log("device info in translate: ", device_dot_in_translate.id);
            
        if (speech.includes("뒤로")) {
            goBack();
        }
        else if (speech.includes("리셋")) {
            this.write(device_dot_in_translate.id, "1111111F");
            this.setState({
                result: '',
                spokenWord: '',
            });
        }
        else if (speech.includes("국민대")) {               
            this.write(device_dot_in_translate.id, "7000100101100100000100010111110010100111010F");
            this.setState({
                results: '',
                spokenWord: "국민대",
                spokenWordsDot: "7000100101100100000100010111110010100111010F"
            });
        } else if (speech.includes("서경")) {
            this.write(device_dot_in_translate.id, "6000001011100000100110111010100111010F");
            this.setState({
                results: '',
                spokenWord: "서경대",
                spokenWordsDot: "6000001011100000100110111010100111010F",
            });
        }
        else if (speech.includes("홍익대")) {
            this.write(device_dot_in_translate.id, "6010110111111101010100000010100111010F");
            this.setState({
                results: '',
                spokenWord: "홍익대",
                spokenWordsDot: "6010110111111101010100000010100111010F"
            });
        }
        else if (speech.includes("고려대")) {
            this.write(device_dot_in_translate.id, "6000100101001000010100011010100111010F");
            this.setState({
                results: '',
                spokenWord: "고려대",
                spokenWordsDot: "6000100101001000010100011010100111010F",
            });
        }
        else if (speech.includes("서울대")) {
            this.write(device_dot_in_translate.id, "5000001011100111101010100111010F");
            this.setState({
                results: '',
                spokenWord: "서울대",
                spokenWordsDot: "5000001011100111101010100111010F",
            });
        }
        else if (speech.includes("연세대")) {
            this.write(device_dot_in_translate.id, "5100001000001101110010100111010F");
            this.setState({
                results: '',
                spokenWord: "연세대",
                spokenWordsDot: "5100001000001101110010100111010F",
            });
        }
        else if (speech.includes("중앙대")) {
            this.write(device_dot_in_translate.id, "7000101101100011011110001011011010100111010F");
            this.setState({
                results: '',
                spokenWord: "중앙대",
                spokenWordsDot: "7000101101100011011110001011011010100111010F",
            });
        }
        else if (speech.includes("경희대")) {
            this.write(device_dot_in_translate.id, "6000100110111010110010111010100111010F");
            this.setState({
                results: '',
                spokenWord: "경희대",
                spokenWordsDot: "6000100110111010110010111010100111010F",
            });
        }
        else if (speech.includes("한국외대")) {
            this.write(device_dot_in_translate.id, "8010110010010000100101100100000101111010100111010F");
            this.setState({
                results: '',
                spokenWord: "한국외대",
                spokenWordsDot: "8010110010010000100101100100000101111010100111010F"
            });
        }
        else if (speech.includes("서강대")) {
            this.write(device_dot_in_translate.id, "6000001011100110101011011010100111010F");
            this.setState({
                results: '',
                spokenWord: "서강대",
                spokenWordsDot: "6000001011100110101011011010100111010F",
            });
        }
        else if (speech.includes("한양대")) {
            this.write(device_dot_in_translate.id, "6010110010010001110011011010100111010F");
            this.setState({
                results: '',
                spokenWord: "한양대",
                spokenWordsDot: "6010110010010001110011011010100111010F",
            });
        }
        else if (speech.includes("건국대")) {
            this.write(device_dot_in_translate.id, "7000100011111000100101100100000010100111010F");
            this.setState({
                results: '',
                spokenWord: "건국대",
                spokenWordsDot: "7000100011111000100101100100000010100111010F"
            });
        }
        else if (speech.includes("동국대")) {
            this.write(device_dot_in_translate.id, "7010100111111000100101100100000010100111010F");
            this.setState({
                results: '',
                spokenWord: "동국대",
                spokenWordsDot: "7010100111111000100101100100000010100111010F"
            });
        }
        else if (speech.includes("숭실대")) {
            this.write(device_dot_in_translate.id, "8000001101100011011000001101010010000010100111010F");
            this.setState({
                results: '',
                spokenWord: "숭실대",
                spokenWordsDot: "8000001101100011011000001101010010000010100111010F",
            });
        }
        else if (speech.includes("세종대")) {
            this.write(device_dot_in_translate.id, "6000001101110000101111111010100111010F");
            this.setState({
                results: '',
                spokenWord: "세종대",
                spokenWordsDot: "6000001101110000101111111010100111010F",
            });
        }
        else if (speech.includes("단국대")) {
            this.write(device_dot_in_translate.id, "7010100010010000100101100100000010100111010F");
            this.setState({
                results: '',
                spokenWord: "단국대",
                spokenWordsDot: "7010100010010000100101100100000010100111010F",
            });
        }
        else if (speech.includes("카이스트")) {
            this.write(device_dot_in_translate.id, "7110100110001101010000001010101110010010101F");
            this.setState({
                results: '',
                spokenWord: "카이스트",
                spokenWordsDot: "7110100110001101010000001010101110010010101F"

            });
        }
        else if (speech.includes("딸기")) {
            this.write(device_dot_in_translate.id, "5000001010100010000000100101010F");
            this.setState({
                results: '',
                spokenWord: "딸기",
                spokenWordsDot: "5000001010100010000000100101010F",
            });
        }
        else if (speech.includes("바나나")) {
            this.write(device_dot_in_translate.id, "3000110100100100100F");
            this.setState({
                results: '',
                spokenWord: "바나나",
                spokenWordsDot: "3000110100100100100F"
            });
        }
        else if (speech.includes("사과")) {
            this.write(device_dot_in_translate.id, "3111000000100111001F");
            this.setState({
                results: '',
                spokenWord: "사과",
                spokenWordsDot: "3111000000100111001F"
            });
        }
        else if (speech.includes("오렌지")) {
            this.write(device_dot_in_translate.id, "6101001000010101110010010000101101010F");
            this.setState({
                results: '',
                spokenWord: "오렌지",
                spokenWordsDot: "6101001000010101110010010000101101010F",
                
            });
        }
        else if (speech.includes("포도")) {
            this.write(device_dot_in_translate.id, "4100110101001010100101001F");
            this.setState({
                results: '',
                spokenWord: "포도",
                spokenWordsDot: "4100110101001010100101001F",
            });
        }
        else if (speech.includes("수박")) {
            this.write(device_dot_in_translate.id, "4000001101100000110100000F");
            this.setState({
                results: '',
                spokenWord: "수박",
                spokenWordsDot: "4000001101100000110100000F",
            });
        }
        else if (speech.includes("토마토")) {
            this.write(device_dot_in_translate.id, "5110010101001100010110010101001F");
            this.setState({
                results: '',
                spokenWord: "토마토",
                spokenWordsDot: "5110010101001100010110010101001F"
            });
        }
        else if (speech.includes("참외")) {
            this.write(device_dot_in_translate.id, "4000011110001010001101111F");
            this.setState({
                results: '',
                spokenWord: "참외",
                spokenWordsDot: "4000011110001010001101111F"
            });
        }
        else if (speech.includes("자두")) {
            this.write(device_dot_in_translate.id, "3000101010100101100F");
            this.setState({
                results: '',
                spokenWord: "자두",
                spokenWordsDot: "3000101010100101100F",
            });
        }
        else if (speech.includes("복숭아")) {
            this.write(device_dot_in_translate.id, "6000110101101000001101100011011110001F");
            this.setState({
                results: '',
                spokenWord: "복숭아",
                spokenWordsDot: "6000110101101000001101100011011110001F",
            });
        }
        else if (speech.includes("감")) {
            this.write(device_dot_in_translate.id, "2110101010001F");
            this.setState({
                results: '',
                spokenWord: "감",
                spokenWordsDot: "2110101010001F",
            });
        }
        else if (speech.includes("키위")) {
            this.write(device_dot_in_translate.id, "4110100101010101100111010F");
            this.setState({
                results: '',
                spokenWord: "키위",
                spokenWordsDot: "4110100101010101100111010F",
            });
        }
        else if (speech.includes("망고")) {
            this.write(device_dot_in_translate.id, "4100010011011000100101001F");
            this.setState({
                results: '',
                spokenWord: "망고",
                spokenWordsDot: "4100010011011000100101001F"
            });
        }
        else if (speech.includes("자몽")) {
            this.write(device_dot_in_translate.id, "3000101100010111111F");
            this.setState({
                results: '',
                spokenWord: "자몽",
                spokenWordsDot: "3000101100010111111F",
            });
        }
        else if (speech.includes("이상환") || speech.includes("이성환") || speech.includes("이상한")) {
            this.write(device_dot_in_translate.id, "6101010111000011011010110111001010010F");
            this.setState({
                results: '',
                spokenWord: "이상환",
                spokenWordsDot: "6101010111000011011010110111001010010F",
            });
        }
        else if (speech.includes("이민석")) {
            this.write(device_dot_in_translate.id, "5101010100010111110000001100111F");
            this.setState({
                results: '',
                spokenWord: "이민석",
                spokenWordsDot: "5101010100010111110000001100111F",
            });
        }
        else if (speech.includes("김상철") || speech.includes("김성철")) {
            this.write(device_dot_in_translate.id, "7000100101010010001111000011011000011011110F");
            this.setState({
                results: '',
                spokenWord: "김상철",
                spokenWordsDot: "7000100101010010001111000011011000011011110F"
            });
        }
        else if (speech.includes("박하명") || speech.includes("박하") || speech.includes("명")) {
            this.write(device_dot_in_translate.id, "5000110100000010110100010110111F");
            this.setState({
                results: '',
                spokenWord: "박하명",
                spokenWordsDot: "5000110100000010110100010110111F",
            });
        }
        else if (speech.includes("김준호")) {
            this.write(device_dot_in_translate.id, "7000100101010010001000101110110010110101001F");
            this.setState({
                results: '',
                spokenWord: "김준호",
                spokenWordsDot: "7000100101010010001000101110110010110101001F"
            });
        }
        else if (speech.includes("이경용") || speech.includes("이경") || speech.includes("용")) {
            this.write(device_dot_in_translate.id, "5101010000100110111001101011011F");
            this.setState({
                results: '',
                spokenWord: "이경용",
                spokenWordsDot: "5101010000100110111001101011011F"
            });
        }
        else if (speech.includes("이시윤") || speech.includes("윤") || speech.includes("2시")) {
            this.write(device_dot_in_translate.id, "5101010000001101010100101010010F");
            this.setState({
                results: '',
                spokenWord: "이시윤",
                spokenWordsDot: "5101010000001101010100101010010F"
            });
        }
        else if (speech.includes("윤명근") || speech.includes("윤명") || speech.includes("근")) {
            this.write(device_dot_in_translate.id, "6100101010010100010110111000100101011F");
            this.setState({
                results: '',
                spokenWord: "윤명근",
                spokenWordsDot: "6100101010010100010110111000100101011F"
            });
        }
        else if (speech.includes("최준수") || speech.includes("준수")) {
            this.write(device_dot_in_translate.id, "6000011101111000101110110000001101100F");
            this.setState({
                results: '',
                spokenWord: "최준수",
                spokenWordsDot: "6000011101111000101110110000001101100F"
            });
        }
        else if (speech.includes("윤종영") || speech.includes("윤종") || speech.includes("0")) {
            this.write(device_dot_in_translate.id, "5100101010010000101111111110111F");
            this.setState({
                results: '',
                spokenWord: "윤종영",
                spokenWordsDot: "5100101010010000101111111110111F"
            });
        }
        else if (speech.includes("김인규") || speech.includes("민규")) {
            this.write(device_dot_in_translate.id, "6000100101010010001111110000100100101F");
            this.setState({
                results: '',
                spokenWord: "김인규",
                spokenWordsDot: "6000100101010010001111110000100100101F",
                
            });
        }
        else if (speech.includes("한광수") || speech.includes("수")) {
            this.write(device_dot_in_translate.id, "7010110010010000100111001011011000001101100F");
            this.setState({
                results: '',
                spokenWord: "한광수",
                spokenWordsDot: "7010110010010000100111001011011000001101100F"
            });
        }
    }

    async _startRecognition(e) {
        Voice.onSpeechStart = this.onSpeechStart.bind(this);
        Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this);
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

    sendOff() {
        this.setState({
            spokenWord: ""
        });
    }

    render() {
        const {goBack} = this.props.navigation;
        const device_dot_in_translate = this.props.navigation.getParam('deviceinfo', 'cantread');
        console.log("deviceinfo in translatepage: ", device_dot_in_translate);
        let forSend = this.state.spokenWordsDot;

        return (
            <View style={style.container}>
                <View style={style.goback}> 
                    <Icon name="md-arrow-round-back" onPress={()=>{goBack(); Tts.speak("뒤로가기", { language: "ko", rate : 0.75 });}} />
                </View>
                
                <View style={style.content}>
                    <TextInput style={style.textbox} defaultValue={this.state.spokenWord}></TextInput>
                    
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={style.inputdone} onPress={()=>{this.sendOff; this.write(device_dot_in_translate.id, {forSend})}}><Text style={style.text}>입력완료</Text></TouchableOpacity>
                        <TouchableOpacity style={style.resetbutton} onPress={()=>{this.sendOff; this.write(device_dot_in_translate.id, "1111111F")}}><Text>Reset</Text></TouchableOpacity>
                    </View>
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity style={style.sttbutton} onPress={() => {this._startRecognition(); this.sendOff}}>
                        <Text style={{color: 'white', fontSize: 70}}>음성인식</Text>
                    </TouchableOpacity>                
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    resetbutton: {
        borderRadius: 3,
        backgroundColor: '#ff9933',
        margin: 30,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        width: 120,
        height: 50,
    },
    inputdone: {
        borderRadius: 3,
        width: 120,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#22509d',
        margin: 30,
        marginLeft: 150,
    }, 
    textbox: {
        borderWidth: 1,
        borderRadius: 5,
        width: 500,
        height: 30,
        margin: 10,
        padding: 5,
        marginLeft: 50,
    },
    goback: {
        flex: 0.1,
        width: 40,
        height: 40,
        marginLeft: 20,
        marginTop: 20,
    },
    content: {
        flex: 0.9,
        marginTop: 70,
    }, 
    text: {
        color: 'white',
    },
    sttbutton: {
        borderRadius: 30,
        margin: 30,
        height: 250,
        width: 500, 
        backgroundColor: '#ff9933',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 50,
    }
});