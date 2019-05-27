
import React , {Component}  from 'react';
import {AppRegistry,Image, View, Text ,Alert,Button} from 'react-native';
import {TouchableOpacity,StyleSheet,TouchableHighlight} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import { Speech } from 'expo';


export default class quizstart extends Component {
render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor :'bisque'  }}>
        
        <TouchableOpacity style={{backgroundColor:'orange',borderRadius: 5 ,margin:50,padding:15}}
                      onPress={() => {this.props.navigation.navigate('a_quiz'); Speech.speak("자음퀴즈",{language:"ko"});}} >
          <Text style ={{fontSize:30,color:'white'}}>자음 QUIZ </Text>
        </TouchableOpacity>
         <TouchableOpacity style={{backgroundColor:'orange',borderRadius: 5 , margin:50,padding:15}}
                      onPress={() => {this.props.navigation.navigate('b_quiz'); Speech.speak("모음퀴즈",{language:"ko"});}} >
          <Text style ={{fontSize:30,color:'white'}}>모음 QUIZ </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'orange',borderRadius: 5 , margin:50,padding:15}}
                      onPress={() => {this.props.navigation.navigate('c_quiz'); Speech.speak("약어,약자 퀴즈",{language:"ko"});}} >
          <Text style ={{fontSize:30,color:'white'}}>약어,약자 QUIZ </Text>
        </TouchableOpacity>

      </View>

   );
    
  }
}

 
