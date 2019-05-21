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

export default class AbQuiz2 extends Component {
    constructor(props) {
        super(props);
        this.mounted = false;
        this.state = {
            started: '',
            results: [],
           
        };

        Tts.speak("������ �����Դϴ� ���� ���� ����ΰ���?",{language:"ko"});

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
                started: '��',
            });

        };
    }
    
    onSpeechPartialResults(e) {
        let speech = e.value[0].split(" ").slice(-1)[0];
        const device_dot_in_Abquiz = this.props.navigation.getParam('deviceinfo3', 'cantread');
        console.log("device info in Abquiz: ", device_dot_in_Abquiz.id);
        
        if (speech.includes("����")) {
            Tts.speak("������ �����Դϴ� ���� ���� ����ΰ���??",{language:"ko"});
            this.setState({
                results: '',
            
            });
        }
        else if (speech.includes("����")) {
            Tts.speak("������ �����Դϴ�",{language:"ko"});
            this.setState({
                results: '',
            
            });
        }
        else if (speech.includes("����")) {
            Tts.speak("������ 1���Դϴ�.",{language:"ko"});
            this.setState({
                results: '',
            
            });
        }
        else if (speech.includes("����")) {
            
            this.props.navigation.navigate('Quiz');
            this.setState({
                results: '',
            
            });
        }
        else if (speech.includes("1��")) {
            this.write(device_dot_in_jaumquiz.id, "1100111F");
        }
        else if (speech.includes("2��")) {
            this.write(device_dot_in_jaumquiz.id, "1111100F");
        }
        else if (speech.includes("3��")) {
            this.write(device_dot_in_jaumquiz.id, "1111001F");
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
                        <Text style ={{fontSize:30,color:'white'}}>������� </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{backgroundColor:'orange',borderRadius: 5 ,top:70,position: 'absolute',right:-80}} onPress={() => {this._startRecognition(); }} >
                        <Text style ={{fontSize:30,color:'white'}}>�������� </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{backgroundColor:'black',borderRadius: 5 , margin:50,padding:15,bottom:10}} onPress={() => {this._startRecognition(); }} >
                        <Text style ={{fontSize:30,color:'white'}}>QUIZ! </Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={{ backgroundColor:'orange',position: 'absolute',top:230,margin:60,padding:30,borderRadius: 10,left:-120}} onPress={() => {this._startRecognition();}}>
                        <Text style ={{fontSize:70,color:'white' }}>1</Text>
                    </TouchableOpacity>

                    <Text style = {{fontSize:40}}>���� "��"��? </Text> 

                    <TouchableOpacity style={{backgroundColor:'orange', margin:60,padding:30,bottom:5, borderRadius: 10}} onPress={() => {this._startRecognition();}} >
                        <Text style ={{fontSize:70,color:'white'}}>2</Text>
                    </TouchableOpacity>
                        
                    <TouchableOpacity style={{ backgroundColor:'orange',position: 'absolute',top:230,margin:60,padding:30,borderRadius: 10,right:-120}} onPress={() => {this._startRecognition();}} >
                        <Text style ={{fontSize:70,color:'white'}}>3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{backgroundColor:'black', position:'absolute',left:-50,paddingTop:10,paddingBottom:10, paddingLeft:20, paddingRight:20, borderRadius: 10 ,  bottom :80   }} onPress={() => {this._startRecognition(); }}  >
                        <Text style ={{fontSize:20,color:'white' }}>����������</Text>
                    </TouchableOpacity>
                                
                    <TouchableOpacity style={{backgroundColor:'black', position:'absolute',right:-20,paddingTop:10,paddingBottom:10, paddingLeft:20, paddingRight:20, borderRadius: 10 ,  bottom :80   }} onPress={() => {this._startRecognition(); }}  >
                        <Text style ={{fontSize:20,color:'white' }}>������</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        );
}    
}
      
