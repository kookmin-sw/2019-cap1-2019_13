
import React , {Component}  from 'react';
import {AppRegistry,Image, View, Text ,Alert,Button} from 'react-native';
import {TouchableOpacity,StyleSheet,TouchableHighlight} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 

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
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , margin:10 , backgroundColor:'bisque'}}>
        <Text
          style={{padding: 10,fontSize: 40,fontWeight: 'bold',position: 'absolute',top: 20,  }}>
          QUIZ!</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('b_quiz_two')} style={{backgroundColor:'orange',position: 'absolute',top:40,right:60,borderRadius: 5 }}>
          <Text
          style ={{fontSize:30,color:'white'}}>next</Text>
        </TouchableOpacity>
        <Text
        style = {{fontSize:40,position:'absolute',top:170,}}>
        모음 "ㅓ"는? 
        </Text> 
       <TouchableOpacity onPress={()=>this.press()} style={{backgroundColor:checkchange,position: 'absolute',top:300,left:60,paddingTop:10,                 paddingBottom:10, paddingLeft:20, paddingRight:20, borderRadius: 10}}>
          <Text style ={{fontSize:20,color:'white' }}>1</Text>
        </TouchableOpacity>
        
       <TouchableOpacity onPress={()=>this.press2()}  style={{backgroundColor:checkchange2,position: 'absolute',top:300 , alignItems :'center',                paddingTop:10,paddingBottom:10, paddingLeft:20, paddingRight:20, borderRadius: 10}}>
          <Text style ={{fontSize:20,color:'white' }}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.press3()} style={{backgroundColor:checkchange3,position: 'absolute',top:300,right:60,paddingTop:10,               paddingBottom:10, paddingLeft:20, paddingRight:20, borderRadius: 10}}>
          <Text style ={{fontSize:20,color:'white' }}>3</Text>
        </TouchableOpacity>
        
      <Image style={{ position:'absolute' , top:360,left:50 }} source={require('./Images/u.png')} />
      <Image style={{ position:'absolute' , top:360, alignItems :'center' }}  source={require('./Images/wa.png')}/>
      <Image style={{ position:'absolute' , top:360,right:50 }}  source={require('./Images/was.png')}/>

      <TouchableOpacity onPress={() => {Alert.alert('1번');}}  style={{backgroundColor:'orange',                            position:'absolute',alignItems:"center",paddingTop:10,paddingBottom:10, paddingLeft:20, paddingRight:20,           borderRadius: 10 ,  bottom :80   }}>
      <Text style ={{fontSize:20,color:'white' }}>정답보기</Text>
        </TouchableOpacity>

      </View>
    );
  }
}



