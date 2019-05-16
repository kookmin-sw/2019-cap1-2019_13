import React , {Component}  from 'react';



import {AppRegistry,Image, View, Text ,Alert,Button} from 'react-native';



import {TouchableOpacity,StyleSheet,TouchableHighlight} from 'react-native';



import { createStackNavigator, createAppContainer } from 'react-navigation'; 



import Tts from 'react-native-tts';



import Voice from 'react-native-voice';











export default class quizstart extends Component {



    constructor(props) {

        super(props);

        this.state = {

            recognized: '',

            started: '',

            results: [],

            partialResults: [],

        };



        Tts.speak("자음퀴즈 모음퀴즈 약어 약자 퀴즈 중에 선택해주세요",{language:"ko"});

        Voice.onSpeechStart = this.onSpeechStart.bind(this);

        Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);

        Voice.onSpeechResults = this.onSpeechResults.bind(this);

        Voice.onSpeechPartialResults = this.onSpeechPartialResults;

        

    }

    componentWillUnmount() {

        Voice.destroy().then(Voice.removeAllListeners);

    }

    onSpeechStart(e) {

        this.setState({

            started: '√',

        });

    };

    onSpeechRecognized(e) {

        this.setState({

            recognized: '√',

        });

    };

    onSpeechResults(e) {

        this.setState({

            results: e.value,

            

        });

    }

    onSpeechPartialResults = e => {

       

        this.setState({

            partialResults: e.value,

        });

    };





    async _startRecognition(e) {

        this.setState({

            recognized: '',

            started: '',

            results: [],

            partialResults: [],

        });

        try {

            await Voice.start('ko-KR');  

            

        } catch (e) {

            console.error(e);

        }

    }

    

    render() {



        return (



          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor :'bisque'  }}>


           {this.state.partialResults.map((result, index) => {

               return (

               <Text key={`partial-result-${index}`} >  {result == "자음"? this.props.navigation.navigate('a_quiz') :''}{result == "모음"? this.props.navigation.navigate('b_quiz') :''}

               {result == "약어약자"? this.props.navigation.navigate('c_quiz') :''}

                </Text>);})}

                <TouchableOpacity style={{ flex: 1 }}  onPress={() => {this._startRecognition(); }}>

            <TouchableOpacity) onPress={() => {this._startRecognition(); }}style={{backgroundColor:'orange',borderRadius: 5 ,margin:50,padding:15}}



                          >



              <Text style ={{fontSize:30,color:'white'}}>자음 QUIZ </Text>



            </TouchableOpacity>



             <TouchableOpacity  onPress={() => {this._startRecognition(); }}style={{backgroundColor:'orange',borderRadius: 5 , margin:50,padding:15}}



                          >



              <Text style ={{fontSize:30,color:'white'}}>모음 QUIZ </Text>



            </TouchableOpacity>



            <TouchableOpacity  onPress={() => {this._startRecognition(); }}style={{backgroundColor:'orange',borderRadius: 5 , margin:50,padding:15}}



                          >



              <Text style ={{fontSize:30,color:'white'}}>약어,약자 QUIZ </Text>



            </TouchableOpacity>

        

    



            </TouchableOpacity>







          </View>







       );


           }    }
           AppRegistry.registerComponent('quizstart', () => quizstart);
