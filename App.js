import React from 'react';
import {Image, View, Text ,Alert} from 'react-native';
import {TouchableOpacity,StyleSheet} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'  }}>
        
        <TouchableOpacity style={{backgroundColor:'orange',borderRadius: 5 ,margin:50,padding:15}}
                      onPress={() => this.props.navigation.navigate('quiz1')} >
          <Text style ={{fontSize:30,color:'white'}}>자음 QUIZ </Text>
        </TouchableOpacity>
         <TouchableOpacity style={{backgroundColor:'orange',borderRadius: 5 , margin:50,padding:15}}
                      onPress={() => this.props.navigation.navigate('quiz2')} >
          <Text style ={{fontSize:30,color:'white'}}>모음 QUIZ </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'orange',borderRadius: 5 , margin:50,padding:15}}
                      onPress={() => this.props.navigation.navigate('quiz3')} >
          <Text style ={{fontSize:30,color:'white'}}>약어 QUIZ </Text>
        </TouchableOpacity>


      </View>
    );
  }
}

class quiz1screen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , margin:10}}>
        <Text
          style={{padding: 10,fontSize: 40,fontWeight: 'bold',position: 'absolute',top: 20,  }}>
          QUIZ!</Text>
        <TouchableOpacity style={{backgroundColor:'orange',position: 'absolute',top:40,right:60,borderRadius: 5 }}>
          <Text
          style ={{fontSize:30,color:'white'}}>next</Text>
        </TouchableOpacity>
        <Text
        style = {{fontSize:40,position:'absolute',top:170,}}>
        초성 "ㄱ"는? 
        </Text> 
       <TouchableOpacity style={{backgroundColor:'orange',position: 'absolute',top:300,left:60,paddingTop:10,                 paddingBottom:10, paddingLeft:20, paddingRight:20, borderRadius: 10}}>
          <Text style ={{fontSize:20,color:'white' }}>1</Text>
        </TouchableOpacity>
        
       <TouchableOpacity style={{backgroundColor:'orange',position: 'absolute',top:300 , alignItems :'center',                paddingTop:10,paddingBottom:10, paddingLeft:20, paddingRight:20, borderRadius: 10}}>
          <Text style ={{fontSize:20,color:'white' }}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:'orange',position: 'absolute',top:300,right:60,paddingTop:10,               paddingBottom:10, paddingLeft:20, paddingRight:20, borderRadius: 10}}>
          <Text style ={{fontSize:20,color:'white' }}>3</Text>
        </TouchableOpacity>
        
      <Image style={{ position:'absolute' , top:360,left:50 }} source={require('./gi.png')} />
      <Image style={{ position:'absolute' , top:360, alignItems :'center' }}  source={require('./ni.png')}/>
      <Image style={{ position:'absolute' , top:360,right:50 }}  source={require('./di.png')}/>

      <TouchableOpacity onPress={() => {Alert.alert('1번');}}  style={{backgroundColor:'orange',                            position:'absolute',alignItems:"center",paddingTop:10,paddingBottom:10, paddingLeft:20, paddingRight:20,           borderRadius: 10 ,  bottom :80   }}>
      <Text style ={{fontSize:20,color:'white' }}>정답보기</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

class quiz2screen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , margin:10}}>
        <Text
          style={{padding: 10,fontSize: 40,fontWeight: 'bold',position: 'absolute',top: 20,  }}>
          QUIZ!</Text>
        <TouchableOpacity style={{backgroundColor:'orange',position: 'absolute',top:40,right:60,borderRadius: 5 }}>
          <Text
          style ={{fontSize:30,color:'white'}}>next</Text>
        </TouchableOpacity>
        <Text
        style = {{fontSize:40,position:'absolute',top:170,}}>
        모음 "ㅓ"는? 
        </Text> 
       <TouchableOpacity style={{backgroundColor:'orange',position: 'absolute',top:300,left:60,paddingTop:10,                 paddingBottom:10, paddingLeft:20, paddingRight:20, borderRadius: 10}}>
          <Text style ={{fontSize:20,color:'white' }}>1</Text>
        </TouchableOpacity>
        
       <TouchableOpacity style={{backgroundColor:'orange',position: 'absolute',top:300 , alignItems :'center',                paddingTop:10,paddingBottom:10, paddingLeft:20, paddingRight:20, borderRadius: 10}}>
          <Text style ={{fontSize:20,color:'white' }}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:'orange',position: 'absolute',top:300,right:60,paddingTop:10,               paddingBottom:10, paddingLeft:20, paddingRight:20, borderRadius: 10}}>
          <Text style ={{fontSize:20,color:'white' }}>3</Text>
        </TouchableOpacity>
        
      <Image style={{ position:'absolute' , top:360,left:50 }} source={require('./u.png')} />
      <Image style={{ position:'absolute' , top:360, alignItems :'center' }}  source={require('./wa.png')}/>
      <Image style={{ position:'absolute' , top:360,right:50 }}  source={require('./was.png')}/>

      <TouchableOpacity onPress={() => {Alert.alert('1번');}}  style={{backgroundColor:'orange',                            position:'absolute',alignItems:"center",paddingTop:10,paddingBottom:10, paddingLeft:20, paddingRight:20,           borderRadius: 10 ,  bottom :80   }}>
      <Text style ={{fontSize:20,color:'white' }}>정답보기</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
class quiz3screen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , margin:10}}>
        <Text
          style={{padding: 10,fontSize: 40,fontWeight: 'bold',position: 'absolute',top: 20,  }}>
          QUIZ!</Text>
        <TouchableOpacity style={{backgroundColor:'orange',position: 'absolute',top:40,right:60,borderRadius: 5 }}>
          <Text
          style ={{fontSize:30,color:'white'}}>next</Text>
        </TouchableOpacity>
        <Text
        style = {{fontSize:40,position:'absolute',top:170,}}>
        약자"받침 ㅆ"는? 
        </Text> 
       <TouchableOpacity style={{backgroundColor:'orange',position: 'absolute',top:300,left:60,paddingTop:10,                 paddingBottom:10, paddingLeft:20, paddingRight:20, borderRadius: 10}}>
          <Text style ={{fontSize:20,color:'white' }}>1</Text>
        </TouchableOpacity>
        
       <TouchableOpacity style={{backgroundColor:'orange',position: 'absolute', top:300 , alignItems :'center',                paddingTop:10,paddingBottom:10, paddingLeft:20, paddingRight:20, borderRadius: 10}}>
          <Text style ={{fontSize:20,color:'white' }}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:'orange',position: 'absolute',top:300,right:60,paddingTop:10,               paddingBottom:10, paddingLeft:20, paddingRight:20, borderRadius: 10}}>
          <Text style ={{fontSize:20,color:'white' }}>3</Text>
        </TouchableOpacity>
        
      <Image style={{ position:'absolute' , top:360,left:50 }} source={require('./gi.png')} />
      <Image style={{ position:'absolute' , top:360, alignItems :'center' }}  source={require('./ni.png')}/>
      <Image style={{ position:'absolute' , top:360,right:50 }}  source={require('./siss.png')}/>

      <TouchableOpacity onPress={() => {Alert.alert('3번');}}  style={{backgroundColor:'orange',                            position:'absolute',alignItems:"center",paddingTop:10,paddingBottom:10, paddingLeft:20, paddingRight:20,           borderRadius: 10 ,  bottom :80   }}>
      <Text style ={{fontSize:20,color:'white' }}>정답보기</Text>
        </TouchableOpacity>

      </View>
    );
  }
}



const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    quiz1: quiz1screen,
    quiz2: quiz2screen,
    quiz3:quiz3screen

    },
  {
    initialRouteName: 'Home',
  }
);
const styles = StyleSheet.create({
 
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

