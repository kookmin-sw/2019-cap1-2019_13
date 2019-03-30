import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, ImageBackground, TouchableOpacity } from 'react-native';
import { Icon, Header, Body, Left, Right } from 'native-base';
import HeaderBtn from '../Commons/HeaderBtn';
import { Button } from 'react-native-elements';

export default class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-home' style={{ color: tintColor,  }} />
        )
        
    }
    
    render() {
        return (
            <View style={style.container}>
                <ImageBackground 
                    style={{height:'100%',width:'100%' }}
                    source={{uri:'http://post.phinf.naver.net/20160816_166/1471310839667iJ4KL_JPEG/ImTMIxZjNAqz90hyehJllNxstg5Q.jpg'}}>
                    <Text style={{marginTop:40, color:'red', fontSize:30, fontWeight:'bold', textAlign:'center'}}>How to use?</Text>
                </ImageBackground>
            </View>
        );
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

    