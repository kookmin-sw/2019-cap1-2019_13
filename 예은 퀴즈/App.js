import React , {Component} from 'react';
import {AppRegistry,Image, View, Text ,Alert,Button} from 'react-native';
import {TouchableOpacity,StyleSheet,TouchableHighlight} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import  QuizTab from './QuizTab';




const AppStackNavigator = createStackNavigator({
   QuizTab: { screen: QuizTab }
});

export default createAppContainer(AppStackNavigator);


