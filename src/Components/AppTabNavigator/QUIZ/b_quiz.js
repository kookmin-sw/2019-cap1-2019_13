import React , {Component}  from 'react';

import {AppRegistry,Image, View, Text ,Alert,Button} from 'react-native';

import {TouchableOpacity,StyleSheet,TouchableHighlight} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation'; 

import Tts from 'react-native-tts';



export default class  b_quiz extends Component {

    state = {

        togglee:true,

        togglee2:true,

        togglee3:true

    }

    press(){  

        const newb=!this.state.togglee;

        this.setState({togglee : newb}) 

    }

    press2(){

        const newb2=!this.state.togglee2;

        this.setState({togglee2 : newb2}) 

    }

    press3(){

        const newb3=!this.state.togglee3;

        this.setState({togglee3 : newb3}) 

    }

    render() {

        const { togglee }  = this.state; 

        const { togglee2 }  = this.state;

        const { togglee3 }  = this.state;



        const checkchange = togglee?"orange" : 'blue';   

        const checkchange2 = togglee2?"orange" : 'blue';

        const checkchange3 = togglee3?"orange" : 'blue';   

        const number1check = togglee? "1번선택" : '선택취소';

        const number2check = togglee2? "2번선택" : '선택취소';

        const number3check = togglee3? "3번선택" : '선택취소'; 

    

        return (

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , margin:10 , backgroundColor:'bisque'}}>

           <TouchableOpacity onPress={() => Tts.speak(" 모음'ㅓ'는 무엇인가요?",{language:"ko"})}style={{backgroundColor:'orange',position: 'absolute',top:40,left:10,borderRadius: 5 }}>

          <Text style ={{fontSize:30,color:'white'}}>문제듣기</Text>

          </TouchableOpacity>

        <Text

style={{padding: 10,fontSize: 40,fontWeight: 'bold',position: 'absolute',top: 20,  }}>

QUIZ!</Text>

<TouchableOpacity   onPress={() => {this.props.navigation.navigate('b_quiz_two'); Tts.speak("다음문제",{language:"ko"});}} style={{backgroundColor:'orange',position: 'absolute',top:40,right:10,borderRadius: 5 }}>

          <Text style ={{fontSize:30,color:'white'}}>다음문제</Text>

        </TouchableOpacity>

        <Text

style = {{fontSize:40,position:'absolute',top:170,}}>

모음 "ㅓ"는? 

</Text> 

<TouchableOpacity onPress={()=>{this.press(); Tts.speak(number1check,{language:"ko"});}} style={{ backgroundColor:checkchange, position: 'absolute',left:60,paddingTop:10, paddingBottom:10, paddingLeft:20, paddingRight:20, borderRadius: 10}}>

          <Text style ={{fontSize:20,color:'white' }}>1</Text>

        </TouchableOpacity>

       

       <TouchableOpacity onPress={()=>{this.press2(); Tts.speak(number2check,{language:"ko"});}}  style={{backgroundColor:checkchange2,position: 'absolute', alignItems :'center', paddingTop:10,paddingBottom:10, paddingLeft:20, paddingRight:20, borderRadius: 10}}>

          <Text style ={{fontSize:20,color:'white' }}>2</Text>

        </TouchableOpacity>



        <TouchableOpacity onPress={()=>{this.press3(); Tts.speak(number3check,{language:"ko"});}} style={{backgroundColor:checkchange3,position: 'absolute',right:60,paddingTop:10,paddingBottom:10, paddingLeft:20, paddingRight:20, borderRadius: 10}}>

          <Text style ={{fontSize:20,color:'white' }}>3</Text>

        </TouchableOpacity>

        

      <Image style={{ position:'absolute' , top:350,left:50 }} source={require('../QUIZ/Images/u.png')} />

      <Image style={{ position:'absolute' , top:350, alignItems :'center' }}  source={require('../QUIZ/Images/wa.png')}/>

      <Image style={{ position:'absolute' , top:350,right:50 }}  source={require('../QUIZ/Images/was.png')}/>



       <TouchableOpacity  onPress={() => { Tts.speak("처음으로 돌아가기" , {language:"ko"}); this.props.navigation.navigate('quizstart');  }}  style={{backgroundColor:'orange', position:'absolute',left:200,paddingTop:10,paddingBottom:10, paddingLeft:20, paddingRight:20, borderRadius: 10 ,  bottom :80   }}>

      <Text style ={{fontSize:20,color:'white' }}>돌아가기</Text>

        </TouchableOpacity>

      <TouchableOpacity  onPress={() => {Alert.alert('1번');  Tts.speak("정답은 1번입니다" , {language:"ko"});}}  style={{backgroundColor:'orange', position:'absolute',paddingTop:10,paddingBottom:10, paddingLeft:20, paddingRight:20, borderRadius: 10 ,  bottom :80 ,right:200  }}>

      <Text style ={{fontSize:20,color:'white' }}>정답보기</Text>

        </TouchableOpacity>





      </View>

    );

}

}