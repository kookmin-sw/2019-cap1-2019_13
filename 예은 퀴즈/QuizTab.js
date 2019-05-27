

import React , {Component}  from 'react';
import {AppRegistry,Image, View, Text ,Alert,Button} from 'react-native';
import {TouchableOpacity,StyleSheet,TouchableHighlight} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import  a_quiz from './a_quiz';
import  a_quiz_two from './a_quiz_two';
import  a_quiz_three from './a_quiz_three';
import  b_quiz from './b_quiz';
import  b_quiz_two from './b_quiz_two';
import  c_quiz from './c_quiz';
import  c_quiz_two from './c_quiz_two';
import quizstart from './quizstart';

const importss = createStackNavigator(
    {
       
        a_quiz: { screen: a_quiz },
        a_quiz_two: { screen: a_quiz_two },
        a_quiz_three: { screen: a_quiz_three },
        b_quiz: { screen: b_quiz },
        b_quiz_two: { screen: b_quiz_two },
        c_quiz: { screen: c_quiz },
        c_quiz_two: { screen: c_quiz_two },
        quizstart: { screen: quizstart },
    },
    {
      initialRouteName:'quizstart',
    }
);
const AppContainer = createAppContainer(importss);


export default class QuizTab extends Component{ 
render() {
    return (<AppContainer />);
  }

}



