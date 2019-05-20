import React, { Component } from 'react';
import { View, Text, StyleSheet, NativeAppEventEmitter, Button, ListView } from 'react-native';
import { Icon } from 'native-base';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import Tts from 'react-native-tts';


export default class InfoTab extends Component {
    render() {
        const {goBack} = this.props.navigation;
        console.log("deviceinfo in translatepage: ", this.props.navigation.getParam('deviceinfo', 'cantread'));

        return (
            <View style={style.container}>
                <View style={style.goback}> 
                    <Icon name="md-arrow-round-back" onPress={()=>{goBack(); Tts.speak("뒤로가기", { language: "ko", rate : 0.75 });}} />
                </View>
                
                <View style={style.content}>
                    <TouchableOpacity style={style.resetbutton}><Text>Reset</Text></TouchableOpacity>
                    <TextInput style={style.textbox} placeholder="점자로 알고싶은 글자를 입력하세요."></TextInput>
                    <TouchableOpacity style={style.inputdone}><Text style={style.text}>입력완료</Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    resetbutton: {
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
        borderRadius: 3,
        width: 120,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#22509d',
        margin: 30,
    }, 
    textbox: {
        borderWidth: 1,
        borderRadius: 2,
        width: 230,
        height: 30,
        margin: 10,
        padding: 5,
    },
    goback: {
        flex: 0.1,
        width: 40,
        height: 40,
        marginLeft: 20,
        marginTop: 20,
    },
    content: {
        flex: 0.9,
        alignItems: 'center',
        marginTop: 250,
    }, 
    text: {
        color: 'white',
    }
});