import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, Button } from 'native-base'; // 추가된 코드
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'; 

// 하단 탭에 들어갈 컴포넌트들
import HomeTab from './AppTabNavigator/HomeTab';
import StudyTab from './AppTabNavigator/StudyTab';
import QuizTab from './AppTabNavigator/QuizTab';
import InfoTab from './AppTabNavigator/InfoTab';

// 하단 탭 네비게이터 생성
const AppTabNavigator = createMaterialTopTabNavigator({
  HomeTab:{ screen: HomeTab },
  Study:{ screen: StudyTab },
  Quiz:{ screen: QuizTab },
  Info:{ screen: InfoTab }
}, {
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: "bottom",
  tabBarOptions: {
    style: {
      backgroundColor:'white'
    },
    iconStyle: { height: 50 },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    upperCaseLabel: false,
    showLabel: false,
    showIcon: true,
  }
});

const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {

  // navigationOptions 코드 추가
  static navigationOptions = {
    headerLeft: <Icon name='md-mic' style={{ paddingLeft:20 }}/>,
    title: 'DOT단배',
    headerRight: <Icon name='ios-send' style={{ paddingRight:20 }}/>,
  }

  render() {
    return <AppTabContainet/>; // AppTabContainet 컴포넌트를 리턴한다.
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});