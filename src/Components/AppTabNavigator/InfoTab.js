import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';


export default class InfoTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='md-repeat' style={{ color: tintColor, }} />
        )
    }

    render() {
        return (
            <View style={style.container}>
                <TouchableOpacity style={style.resetbutton}><Text>Reset</Text></TouchableOpacity>
                
                <TextInput style={style.textbox} placeholder="점자로 알고싶은 글자를 입력하세요."></TextInput>
                <TouchableOpacity style={style.inputdone}><Text>입력완료</Text></TouchableOpacity>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    resetbutton: {
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: '#ffcc99',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        width: 50,
        height: 30,
        
    },
    inputdone: {
        borderWidth: 1,
        borderRadius: 3,
        width: 120,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3f51b5',
        color: 'white',
        margin: 30,
    }, 
    textbox: {
        borderWidth: 1,
        borderRadius: 2,
        width: 230,
        height: 30,
        margin: 10,
        padding: 5,
    }
});