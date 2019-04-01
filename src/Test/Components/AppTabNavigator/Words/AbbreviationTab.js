import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Icon } from 'native-base';
import { Speech } from 'expo';

const { height } = Dimensions.get('window');

class AbbreviationTab extends React.Component{
    state = {
        screenHeight: 0,
    };

    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ screenHeight: contentHeight });
    };

    render() {
        const {goBack} = this.props.navigation;
        const scrollEnabled = this.state.screenHeight > height;

        return (
            <ScrollView style={ styles.container }>
                <View style={styles.goback}> 
                    <Icon name="md-arrow-round-back" onPress={()=>{goBack(); Speech.speak("뒤로가기", { language: 'ko', rate: 0.75 });}} />
                </View>

                <View style={styles.syllables}>
                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("가", { language: "ko", rate : 0.75 });}} style={styles.button}>
                            <Text style={styles.text}>가</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("나", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>나</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("다", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>다</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("마", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>마</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("바", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>바</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("사", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>사</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("자", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>자</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("카", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>카</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("타", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>타</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("파", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>파</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("하", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>하</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("억", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>억</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("언", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>언</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("얼", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>얼</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("연", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>연</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("열", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>열</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("영", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>영</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("옥", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>옥</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("온", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>온</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("옹", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>옹</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("운", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>운</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("울", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>울</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("은", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>은</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("을", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>을</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("것", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>것</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("받침쌍시옷", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>받침ㅆ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("그래서", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>그래서</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("그러나", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>그러나</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("그러면", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>그러면</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("그러므로", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>그러므로</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("그런데", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>그런데</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("그리고", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>그리고</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Speech.speak("그리하여", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>그리하여</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

                
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
        marginLeft: 20,
        marginTop: 20,
    },
    syllables: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 40,
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
        fontSize: 25,
    }
});

export default AbbreviationTab; 