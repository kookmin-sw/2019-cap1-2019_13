import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

export default class InfoTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='person' style={{ color: tintColor, }} />
        )
    }

    render() {
        return (
            <View style={style.container}>
                <Text style={{fontSize:40, marginBottom:50, fontWeight:'bold'}}>INFO</Text>
                <Text style={{fontSize:30, marginBottom:30}}>2019 캡스톤 디자인 13조</Text>
                <Text style={{fontSize:30, marginBottom:10}}>팀장 김채은</Text>
                <Text style={{fontSize:30, marginBottom:10}}>팀원 김세훈</Text>
                <Text style={{fontSize:30, marginBottom:10}}>팀원 김윤성</Text>
                <Text style={{fontSize:30, marginBottom:10}}>팀원 이준영</Text>
                <Text style={{fontSize:30, marginBottom:100}}>팀원 장예은</Text>
                
                <Text style={{fontSize:20}}>Copyright ⓒ 2019, UmjiSongarak Corp.</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6effbf',
    }
});