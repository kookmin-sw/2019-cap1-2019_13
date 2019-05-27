import React, { Component } from 'react';
import { View, Text, StyleSheet,AppRegistry,Image,Alert,Button,TouchableOpacity,TouchableHighlight } from 'react-native';
import { Icon } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 


import quizstart from './QUIZ/quizstart';
import  a_quiz from './QUIZ/a_quiz';
import  a_quiz_two from './QUIZ/a_quiz_two';
import  a_quiz_three from './QUIZ/a_quiz_three';
import  b_quiz from './QUIZ/b_quiz';
import  b_quiz_two from './QUIZ/b_quiz_two';
import  c_quiz from './QUIZ/c_quiz';
import  c_quiz_two from './QUIZ/c_quiz_two';
import test from './QUIZ/test';


const importss = createStackNavigator(

    {
        a_quiz: { screen: a_quiz },
        a_quiz_two: { screen: a_quiz_two},
        a_quiz_three: { screen: a_quiz_three},
        b_quiz: { screen: b_quiz },
        b_quiz_two: { screen: b_quiz_two },
        c_quiz: { screen: c_quiz },
        c_quiz_two: { screen: c_quiz_two },
        test:{screen: test},
        quizstart: { screen: quizstart },

    },

    {

        initialRouteName:'quizstart',
        headerMode:'none',

    }

);

const AppContainer = createAppContainer(importss);




export default class QuizTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='md-create' style={{ color: tintColor }} />
        )
    }

    render() {
        return (<AppContainer/>);
    }
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column',
    }
});
