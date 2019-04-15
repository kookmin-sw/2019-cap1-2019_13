import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Tts from 'react-native-tts';

class MenuTab extends Component{
    constructor(props) {
        super(props);
        Tts.setDefaultLanguage('ko');
        Tts.addEventListener('tts-start', event => console.log('start', event));
        Tts.addEventListener('tts-finish', event => console.log('finish', event));
        Tts.addEventListener('tts-cancel', event => console.log('cancel', event));
    }

    render() {
        return (
            <View style={ styles.container }>
                <View>
                    <TouchableOpacity 
                    onPress={()=>{this.props.navigation.navigate('InitialJaum'); Tts.stop(); Tts.speak("초성자음 배우기");}} style={styles.button}>
                        <Text style={styles.textInButton}>초성자음</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity 
                    onPress={()=>{this.props.navigation.navigate('Moum'); Tts.stop(); Tts.speak("모음 배우기");}} style={styles.button}>
                        <Text style={styles.textInButton}>모음</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity 
                    onPress={()=>{this.props.navigation.navigate('EndJaum'); Tts.stop(); Tts.speak("종성자음 배우기");}} style={styles.button}>
                        <Text style={styles.textInButton}>종성자음</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity 
                    onPress={()=>{this.props.navigation.navigate('Abbreviation'); Tts.stop(); Tts.speak("약어 배우기");}} style={styles.button}>
                        <Text style={styles.textInButton}>약어</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity 
                    onPress={()=>{this.props.navigation.navigate('Punctuation'); Tts.stop(); Tts.speak("문장부호 배우기");}} style={styles.button}>
                        <Text style={styles.textInButton}>문장부호</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity 
                    onPress={()=>{this.props.navigation.navigate('Category'); Tts.stop(); Tts.speak("카테고리로 배우기");}} style={styles.button}>
                        <Text style={styles.textInButton}>카테고리</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection:'row',
        flexWrap: 'wrap',
        backgroundColor: '#f6efb4',
        justifyContent: 'space-between'
    },
    button: {
        borderRadius: 100,
        margin: 30,
        height: 120,
        width: 120, 
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: 1,
        marginTop: 60
    },
    textInButton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
    }
});

export default MenuTab; 