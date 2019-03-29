import React from 'react';
import {Image, View, Text ,Alert} from 'react-native';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity,StyleSheet} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'  }}>
        <Button
          style={{backgroundColor: 'orange',border: 30}}  
          onPress={() => this.props.navigation.navigate('quiz')}> 
         <Text style={{fontSize : 30,color:'white'}}>QUIZ</Text>
        </Button>
      </View>
    );
  }
}

class quizscreen extends React.Component {
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
        "ㄱ"는 무엇인가요? 
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

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    quiz: quizscreen,
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

