import React , {Component}  from 'react';

import {AppRegistry,Image, View, Text ,Alert,Button} from 'react-native';

import {TouchableOpacity,StyleSheet,TouchableHighlight} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation'; 

import Tts from 'react-native-tts';

import Voice from 'react-native-voice';



export default class b_quiz extends Component {


    constructor(props) {

        super(props);

        this.state = { recognized: '', started: '', results: [], partialResults: [], };



        Tts.speak("모음퀴즈입니다 모음 'ㅓ'는 몇번인가요??",{language:"ko"});

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

               <Text key={`partial-result-${index}`} >{result == "문제"?  Tts.speak("모음퀴즈입니다 모음 'ㅓ'는 몇번인가요",{language:"ko"}):''}{result == "다음"? this.props.navigation.navigate('b_quiz_two') :''}

               {result == "정답"? Tts.speak("정답은 1번입니다.",{language:"ko"}):''}{result == "시작"? this.props.navigation.navigate('quizstart'):''}

                </Text>);})}

       <TouchableOpacity style={{ flex: 1 }}  onPress={() => {this._startRecognition(); }}>

           <TouchableOpacity style={{backgroundColor:'orange',borderRadius: 5 ,top:70,position: 'absolute',left:-80}}

                         onPress={() => {this._startRecognition(); }} >

                        <Text style ={{fontSize:30,color:'white'}}>문제듣기 </Text>
          </TouchableOpacity>



          <TouchableOpacity style={{backgroundColor:'orange',borderRadius: 5 ,top:70,position: 'absolute',right:-80}}
                         
                        onPress={() => {this._startRecognition(); }} >
                        
                        <Text style ={{fontSize:30,color:'white'}}>다음문제 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{backgroundColor:'black',borderRadius: 5 , margin:50,padding:15,bottom:10}}

                        onPress={() => {this._startRecognition(); }} >

                        <Text style ={{fontSize:30,color:'white'}}>QUIZ! </Text>
          </TouchableOpacity>


          <TouchableOpacity  style={{ backgroundColor:'orange',position: 'absolute',top:230,margin:60,padding:30,borderRadius: 10,left:-120}} 
                        
                        onPress={() => {this._startRecognition(); }}>

                        <Text style ={{fontSize:70,color:'white' }}>1</Text>
         </TouchableOpacity>

         <Text style = {{fontSize:40}}>초성 "ㄱ"는? </Text> 

         <TouchableOpacity style={{backgroundColor:'orange', margin:60,padding:30,bottom:5, borderRadius: 10}}
                        
                        onPress={() => {this._startRecognition(); }} >

                        <Text style ={{fontSize:70,color:'white'}}>2</Text>
        </TouchableOpacity>
            
        <TouchableOpacity style={{ backgroundColor:'orange',position: 'absolute',top:230,margin:60,padding:30,borderRadius: 10,right:-120}}   
        
                       onPress={() => {this._startRecognition(); }} >

                       <Text style ={{fontSize:70,color:'white' }}>3</Text>
       </TouchableOpacity>

               
      <TouchableOpacity style={{backgroundColor:'black', position:'absolute',left:-50,paddingTop:10,paddingBottom:10, paddingLeft:20, paddingRight:20, borderRadius: 10 ,  bottom :80   }}
                       
                       onPress={() => {this._startRecognition(); }}  >

                        <Text style ={{fontSize:20,color:'white' }}>시작페이지</Text>
       </TouchableOpacity>
                 
      <TouchableOpacity style={{backgroundColor:'black', position:'absolute',right:-20,paddingTop:10,paddingBottom:10, paddingLeft:20, paddingRight:20, borderRadius: 10 ,  bottom :80   }}   
                       
                       onPress={() => {this._startRecognition(); }}  >

                       <Text style ={{fontSize:20,color:'white' }}>정답듣기</Text>
       </TouchableOpacity>
        
       </TouchableOpacity>

       </View>

);}    }
       AppRegistry.registerComponent('b_quiz', () => b_quiz);