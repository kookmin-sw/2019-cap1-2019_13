import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import Tts from 'react-native-tts';

class CategoryTab extends React.Component{
    render() {
        const {goBack} = this.props.navigation;
        const device_dot_in_category = this.props.navigation.getParam('deviceinfo2', 'cantread');
        console.log("device info in category: ", device_dot_in_category.id);
        
        return (
            <View style={styles.container}>
                <View style={styles.goback}> 
                    <Icon name="md-arrow-round-back" onPress={()=>{goBack(); Tts.speak("뒤로가기", { language: 'ko', rate: 0.75});}}/>
                </View>

                <View style={styles.buttons}>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity 
                        onPress={()=>{this.props.navigation.navigate('Color', {device_info2: device_dot_in_category}); Tts.speak("색깔 배우기", { language: 'ko', rate: 0.75});}} style={styles.button}>
                            <Icon name="md-brush"/>
                            <Text style={styles.textInButton}>색깔</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this.props.navigation.navigate('Sports', {device_info2: device_dot_in_category}); Tts.speak("스포츠 배우기", { language: 'ko', rate: 0.75});}} style={styles.button}>
                            <Icon name="logo-dribbble"/>
                            <Text style={styles.textInButton}>스포츠</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this.props.navigation.navigate('Number', {device_info2: device_dot_in_category}); Tts.speak("숫자 배우기", { language: 'ko', rate: 0.75});}} style={styles.button}>
                            <Icon name="md-stopwatch"/>
                            <Text style={styles.textInButton}>숫자</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity 
                        onPress={()=>{this.props.navigation.navigate('Weekday', {device_info2: device_dot_in_category}); Tts.speak("요일 배우기", { language: 'ko', rate: 0.75});}} style={styles.button}>
                            <Icon name="md-calendar"/>
                            <Text style={styles.textInButton}>요일</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this.props.navigation.navigate('Season', {device_info2: device_dot_in_category}); Tts.speak("계절 배우기", { language: 'ko', rate: 0.75});}} style={styles.button}>
                            <Icon name="md-partly-sunny"/>
                            <Text style={styles.textInButton}>계절</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this.props.navigation.navigate('Animal', {device_info2: device_dot_in_category}); Tts.speak("동물 배우기", { language: 'ko', rate: 0.75});}} style={styles.button}>
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

export default CategoryTab; 