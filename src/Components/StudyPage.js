import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Tts from 'react-native-tts';
import { Icon } from 'native-base';

class MenuTab extends Component{
    constructor(props) {
        super(props);
        Tts.setDefaultLanguage('ko');
        Tts.addEventListener('tts-start', event => console.log('start', event));
        Tts.addEventListener('tts-finish', event => console.log('finish', event));
        Tts.addEventListener('tts-cancel', event => console.log('cancel', event));
    }

    render() {
        const {goBack} = this.props.navigation;
        const device_dot = this.props.navigation.getParam('deviceinfo', 'cantread');
        console.log("deviceinfo in studypage: ", device_dot.id);

        return (
            <View style={ styles.container }>
                <View style={styles.goback}> 
                    <Icon name="md-arrow-round-back" onPress={()=>{goBack(); Tts.speak("뒤로가기", { language: "ko", rate : 0.75 });}} />
                </View>

                <View style={styles.buttons}>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <TouchableOpacity 
                            onPress={()=>{this.props.navigation.navigate('InitialJaum', {deviceinfo2: device_dot}); Tts.stop(); Tts.speak("초성자음 배우기");}} style={styles.button}>
                                <Text style={styles.textInButton}>초성자음</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity 
                            onPress={()=>{this.props.navigation.navigate('Moum', {deviceinfo2: device_dot}); Tts.stop(); Tts.speak("모음 배우기");}} style={styles.button}>
                                <Text style={styles.textInButton}>모음</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity 
                            onPress={()=>{this.props.navigation.navigate('EndJaum', {deviceinfo2: device_dot}); Tts.stop(); Tts.speak("종성자음 배우기");}} style={styles.button}>
                                <Text style={styles.textInButton}>종성자음</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <TouchableOpacity 
                            onPress={()=>{this.props.navigation.navigate('Abbreviation', {deviceinfo2: device_dot}); Tts.stop(); Tts.speak("약어 배우기");}} style={styles.button}>
                                <Text style={styles.textInButton}>약어</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity 
                            onPress={()=>{this.props.navigation.navigate('Punctuation', {deviceinfo2: device_dot}); Tts.stop(); Tts.speak("문장부호 배우기");}} style={styles.button}>
                                <Text style={styles.textInButton}>문장부호</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity 
                            onPress={()=>{this.props.navigation.navigate('Category', {deviceinfo2: device_dot}); Tts.stop(); Tts.speak("카테고리로 배우기");}} style={styles.button}>
                                <Text style={styles.textInButton}>카테고리</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        flexWrap: 'wrap',
        backgroundColor: '#f5fcff',
        justifyContent: 'space-between'
    },
    button: {
        borderRadius: 30,
        margin: 30,
        height: 120,
        width: 120, 
        backgroundColor: '#22509d',
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: 1,
        marginTop: 10,
    },
    buttons: {
        flex: 0.9,
        alignItems: 'center',
        marginTop: 200,
    },
    textInButton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
    },
    goback: {
        flex: 0.1,
        width: 40,
        height: 40,
        marginLeft: 20,
        marginTop: 20,
    },
});

export default MenuTab; 