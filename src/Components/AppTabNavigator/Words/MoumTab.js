import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import Tts from 'react-native-tts';

class MoumTab extends React.Component{
    render() {
        const {goBack} = this.props.navigation;

        return (
            <View style={ styles.container }>
                <View style={styles.goback}> 
                    <Icon name="md-arrow-round-back" onPress={()=>{goBack(); Tts.speak("뒤로가기", { language: "ko", rate : 0.75 });}}/>
                </View>

                <View style={styles.syllables}>
                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅏ", { language: "ko", rate : 0.75 });}} style={styles.button}>
                            <Text style={styles.text}>ㅏ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅑ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㅑ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅓ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㅓ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅕ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㅕ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅗ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㅗ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅛ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㅛ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅜ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㅜ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅠ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㅠ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅡ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㅡ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅣ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㅣ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅐ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㅐ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅒ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㅒ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅔ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㅔ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅖ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㅖ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅘ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㅘ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅙ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㅙ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅚ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㅚ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅝ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㅝ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅞ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㅞ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅟ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㅟ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅢ", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>ㅢ</Text>
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
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20
    },
    button: {
        borderRadius:20, 
        margin:10, 
        flex: 1,
        height:55, 
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

export default MoumTab; 