import React, { Component } from 'react';
import { StyleSheet, Text, View,Alert, TouchableOpacity } from 'react-native';
import { Icon, Button, Left } from 'native-base'; // 추가된 코드
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'; 
import HeaderBtn from './Commons/HeaderBtn';

// 하단 탭에 들어갈 컴포넌트들
import HomeTab from './AppTabNavigator/HomeTab';
import StudyTab from './AppTabNavigator/StudyTab';
import QuizTab from './AppTabNavigator/QuizTab';
import InfoTab from './AppTabNavigator/InfoTab';

// 하단 탭 네비게이터 생성
const AppTabNavigator = createMaterialTopTabNavigator({
  Home:{ screen: HomeTab },
  Study:{ screen: StudyTab },
  Quiz:{ screen: QuizTab },
  Info:{ screen: InfoTab },
}, {
  animationEnabled: true,
  swipeEnabled: false,
  tabBarPosition: "bottom",
  tabBarOptions: {
    style: {
      backgroundColor:'#00bbfe',
    },
    iconStyle: { height: 30 },
    activeTintColor: '#000',
    inactiveTintColor: '#ffffff',
    upperCaseLabel: false,
    showLabel: false,
    showIcon: true,
  },
});

const AppTabContainet = createAppContainer(AppTabNavigator);
_usestt=()=>{
  //function to make two option alert
  Alert.alert(
      //title
      '안녕하세요?',
      //body
      '음성인식 기능을 사용합니다.',
      [
      {text: 'OK', onPress: () => console.log('Yes Pressed')},
      {text: 'Cancel', onPress: () => console.log('No Pressed'), style: 'cancel'},
      ],
      { cancelable: false }
      //clicking out side of alert will not cancel
  );
}
export default class MainScreen extends Component {
  // navigationOptions 코드 추가
  static navigationOptions = {
    //header:null
    headerLeft: (
      <TouchableOpacity 
          onPress={()=>Alert.alert(
            //title
            '안녕하세요!',
            //body
            '음성인식 기능을 사용할까요?',
            [
            {text: 'OK', onPress: () => console.log('Active Stt')},
            {text: 'Cancel', onPress: () => console.log('Inactive Stt'), style: 'cancel'},
            ],
            { cancelable: false }
            //clicking out side of alert will not cancel
        )}
          style={{ borderRadius:100/2, backgroundColor:'tomato',  height:40, width:40, justifyContent:'center',alignItems:'center', marginLeft:10 }}>
          <Icon name='ios-mic' style={{ justifyContent:'center',alignItems:'center' }}/>          
      </TouchableOpacity>
      ),
      title: 'DOT단배',
      // headerRight: (
      // <HeaderBtn>
      //   <Icon name='ios-refresh' style={{ paddingRight:20 }}/>
      // </HeaderBtn>
      // ),
      headerTintColor: '#ffffff',
      headerStyle: {
      backgroundColor: '#00bbfe',
      },
      headerTitleStyle: {
      fontWeight: 'bold', 
      fontSize: 20,
      },
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