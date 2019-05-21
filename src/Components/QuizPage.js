import React , {Component}  from 'react';
import {AppRegistry,Image, View, Text ,Alert,Button} from 'react-native';
import {TouchableOpacity,StyleSheet,TouchableHighlight} from 'react-native';
import { createStackNavigator, createAppContainer ,NavigationActions} from 'react-navigation'; 
import Tts from 'react-native-tts';
import Voice from 'react-native-voice';

export default class QuizPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            started: '',
            results: [],
   
        };
        this.mounted = false;
        Tts.speak("자음퀴즈 모음퀴즈 약어 약자 퀴즈 중에 선택해주세요",{language:"ko"});

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
        const device_dot_in_quizpage = this.props.navigation.getParam('deviceinfo', 'cantread');
        console.log("device info in quizpage: ", device_dot_in_quizpage.id);
            
        if (speech.includes("자음")) {               
            this.props.navigation.navigate('JaumQuiz1', {deviceinfo3: device_dot_in_quizpage});
            this.setState({
                results: '',
            
            });
        } else if (speech.includes("모음")) {
            this.props.navigation.navigate('MoumQuiz1', {deviceinfo3: device_dot_in_quizpage});
            this.setState({
                results: '',
            
            });
        }
        else if (speech.includes("약어약자")) {
            this.props.navigation.navigate('AbQuiz1', {deviceinfo3: device_dot_in_quizpage});
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

    render() {
        
        
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor :'bisque'  }}>
                <TouchableOpacity style={{ flex: 1 }}  onPress={() => {this._startRecognition(); }}>
                    <TouchableOpacity onPress={() => {this._startRecognition(); }}style={{backgroundColor:'orange',borderRadius: 5 ,margin:50,padding:15}}>
                        <Text style ={{fontSize:30,color:'white'}}>자음 QUIZ </Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity onPress={() => {this._startRecognition(); }}style={{backgroundColor:'orange',borderRadius: 5 , margin:50,padding:15}}>
                        <Text style ={{fontSize:30,color:'white'}}>모음 QUIZ </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {this._startRecognition(); }}style={{backgroundColor:'orange',borderRadius: 5 , margin:50,padding:15}}>
                        <Text style ={{fontSize:30,color:'white'}}>약어,약자 QUIZ </Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
       );
    }    
}
           