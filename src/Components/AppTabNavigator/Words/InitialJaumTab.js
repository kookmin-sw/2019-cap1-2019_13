import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import Tts from 'react-native-tts';

class InitialJaumTab extends React.Component{
    render() {
        const {goBack} = this.props.navigation;
        

        return (
            <View style={ styles.container }>
                <View style={styles.goback}> 
                    <Icon name="md-arrow-round-back" onPress={()=>{goBack(); Tts.speak("뒤로가기", { language: "ko", rate : 0.75 });}} />
                </View>
                <View style={styles.syllables}>
                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㄱ", { language: "ko", rate : 0.75 });} } style={styles.button}>
                            <Text style={styles.text}>ㄱ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㄴ", { language: "ko", rate : 0.3 });}}  style={styles.button}>
                            <Text style={styles.text}>ㄴ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㄷ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㄷ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㄹ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㄹ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅁ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㅁ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅂ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㅂ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅅ", { language: "ko", rate : 0.6 });}}  style={styles.button}>
                            <Text style={styles.text}>ㅅ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅈ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㅈ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅊ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㅊ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅋ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㅋ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅌ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㅌ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅍ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㅍ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅎ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㅎ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("된소리", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>된소리</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

                
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f6efb4',
    },
    goback: {
        width: 40,
        height: 40,
        margin: 20,
    },
    syllables: {
        marginTop: 70,
        marginLeft: 20,
        marginRight: 20
    },
    button: {
        borderRadius:20, 
        margin:10, 
        flex: 1,
        height:65, 
        backgroundColor:'dodgerblue', 
        justifyContent:'center',
    }, 
    text: {
        color:'white', 
        textAlign:'center', 
        fontWeight:'bold', 
        fontSize:30,
    }
});

export default InitialJaumTab; 