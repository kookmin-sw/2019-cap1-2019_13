import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import Tts from 'react-native-tts';

class CategoryTab extends React.Component{
    render() {
        const {goBack} = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={styles.goback}> 
                    <Icon name="md-arrow-round-back" onPress={()=>{goBack(); Tts.speak("뒤로가기", { language: 'ko', rate: 0.75});}}/>
                </View>

                <View style={styles.menuContainer}>
                    <View>
                        <TouchableOpacity 
                        onPress={()=>{this.props.navigation.navigate('Color'); Tts.speak("색깔 배우기", { language: 'ko', rate: 0.75});}} style={styles.button}>
                            <Icon name="md-brush"/>
                            <Text style={styles.textInButton}>색깔</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity 
                        onPress={()=>{this.props.navigation.navigate('Sports'); Tts.speak("스포츠 배우기", { language: 'ko', rate: 0.75});}} style={styles.button}>
                            <Icon name="logo-dribbble"/>
                            <Text style={styles.textInButton}>스포츠</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity 
                        onPress={()=>{this.props.navigation.navigate('Number'); Tts.speak("숫자 배우기", { language: 'ko', rate: 0.75});}} style={styles.button}>
                            <Icon name="md-stopwatch"/>
                            <Text style={styles.textInButton}>숫자</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity 
                        onPress={()=>{this.props.navigation.navigate('Weekday'); Tts.speak("요일 배우기", { language: 'ko', rate: 0.75});}} style={styles.button}>
                            <Icon name="md-calendar"/>
                            <Text style={styles.textInButton}>요일</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity 
                        onPress={()=>{this.props.navigation.navigate('Season'); Tts.speak("계절 배우기", { language: 'ko', rate: 0.75});}} style={styles.button}>
                            <Icon name="md-partly-sunny"/>
                            <Text style={styles.textInButton}>계절</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity 
                        onPress={()=>{this.props.navigation.navigate('Animal'); Tts.speak("동물 배우기", { language: 'ko', rate: 0.75});}} style={styles.button}>
                            <Icon name="md-paw"/>
                            <Text style={styles.textInButton}>동물</Text>
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
        backgroundColor: '#ffa0d2',
    },
    goback: {
        marginTop: 20,
        marginLeft: 20
    },
    menuContainer: {
        alignItems: 'center',
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    button: {
        borderRadius: 100,
        marginLeft: 30,
        marginRight: 30,
        height: 120,
        width: 120, 
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: 1,
        marginTop: 50
    },
    textInButton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
    }
});

export default CategoryTab; 