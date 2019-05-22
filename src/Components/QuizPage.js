import React , {Component}  from 'react';
import {AppRegistry,Image, View, Text ,Alert,Button} from 'react-native';
import {TouchableOpacity,StyleSheet,TouchableHighlight} from 'react-native';
import { createStackNavigator, createAppContainer ,NavigationActions} from 'react-navigation'; 
import Tts from 'react-native-tts';
import Voice from 'react-native-voice';
import { Icon } from 'native-base';

export default class QuizPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            started: '',
            results: [],
   
        };
        this.mounted = false;
        Tts.speak("자음퀴즈 모음퀴즈 약어 약자 퀴즈 중에 선택해주세요",{language:"ko"});

        // Voice.onSpeechStart = this.onSpeechStart.bind(this);
        // Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this);
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
        const device_dot_in_quizpage = this.props.navigation.getParam('deviceinfo', 'cantread');
        console.log("device info in quizpage: ", device_dot_in_quizpage.id);
            
        if (speech.includes("뒤로")) {
            goBack();
        }
        else if (speech.includes("자음")) {               
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
        else if (speech.includes("약자")) {
            this.props.navigation.navigate('AbQuiz1', {deviceinfo3: device_dot_in_quizpage});
            this.setState({
                results: '',
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

    render() {
        const {goBack} = this.props.navigation;

        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor :'#f5fcff' }}>
                <View style={styles.goback}> 
                    <Icon name="md-arrow-round-back" onPress={()=>{goBack(); Tts.speak("뒤로가기", { language: "ko", rate : 0.75 });}} />
                </View>

                <TouchableOpacity style={{ flex: 0.9, alignItems: 'center', marginTop: 30}} >
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('JaumQuiz1');}} style={{backgroundColor:'#22509d', alignItems: 'center', justifyContent: 'center', borderRadius: 30 , margin:50, width: 220, height: 70, marginBottom: 20}}>
                        <Text style ={{fontSize:30, color:'white'}}>자음 QUIZ</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('MoumQuiz1');}} style={{backgroundColor:'#22509d', alignItems: 'center', justifyContent: 'center', borderRadius: 30 , margin:50, width: 220, height: 70, marginBottom: 20}}>
                        <Text style ={{fontSize:30, color:'white'}}>모음 QUIZ</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('AbQuiz1');}} style={{backgroundColor:'#22509d', alignItems: 'center', justifyContent: 'center', borderRadius: 30 , margin:50, width: 220, height: 70, marginBottom: 20}}>
                        <Text style ={{fontSize:30, color:'white'}}>약어,약자 QUIZ</Text>
                    </TouchableOpacity>
                </TouchableOpacity>

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
    goback: {
        flex: 0.1,
        width: 40,
        height: 40,
        marginLeft: 20,
        marginTop: 20,
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
        marginBottom: 80,
    }
});
           