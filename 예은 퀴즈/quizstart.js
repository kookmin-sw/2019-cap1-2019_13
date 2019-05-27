
import React , {Component}  from 'react';
import {AppRegistry,Image, View, Text ,Alert,Button} from 'react-native';
import {TouchableOpacity,StyleSheet,TouchableHighlight} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 

export default class quizstart extends Component {
render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor :'bisque'  }}>
        
        <TouchableOpacity style={{backgroundColor:'orange',borderRadius: 5 ,margin:50,padding:15}}
                      onPress={() => this.props.navigation.navigate('a_quiz')} >
          <Text style ={{fontSize:30,color:'white'}}>자음 QUIZ </Text>
        </TouchableOpacity>
         <TouchableOpacity style={{backgroundColor:'orange',borderRadius: 5 , margin:50,padding:15}}
                      onPress={() => this.props.navigation.navigate('b_quiz')} >
          <Text style ={{fontSize:30,color:'white'}}>모음 QUIZ </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'orange',borderRadius: 5 , margin:50,padding:15}}
                      onPress={() => this.props.navigation.navigate('c_quiz')} >
          <Text style ={{fontSize:30,color:'white'}}>약어 QUIZ </Text>
        </TouchableOpacity>

      </View>

   );
    
  }
}

 

