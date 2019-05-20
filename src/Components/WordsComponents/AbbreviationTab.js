import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from 'native-base';
import Tts from 'react-native-tts';
import Toast from "@remobile/react-native-toast";
import BluetoothSerial, {
    withSubscription
  } from "react-native-bluetooth-serial-next";

class AbbreviationTab extends React.Component{
    write = async (id, message) => {
        try {
          await BluetoothSerial.device(id).write(message);
          Toast.showShortBottom("Successfuly wrote to device");
        } catch (e) {
          Toast.showShortBottom(e.message);
        }
      };
    
    render() {
        const {goBack} = this.props.navigation;
        const device_dot_in_abbreviation = this.props.navigation.getParam('deviceinfo2', 'cantread');
        console.log("device info in abbreviation: ", device_dot_in_abbreviation.id);
        
        return (
            <ScrollView style={ styles.container }>
                <View style={styles.goback}> 
                    <Icon name="md-arrow-round-back" onPress={()=>{goBack(); Tts.speak("뒤로가기", { language: 'ko', rate: 0.75 });}} />
                </View>

                <View style={styles.syllables}>
                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("가", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "1110101F");}} style={styles.button}>
                            <Text style={styles.text}>가</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("나", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "1100100F");}}  style={styles.button}>
                            <Text style={styles.text}>나</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("다", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "1010100F");}}  style={styles.button}>
                            <Text style={styles.text}>다</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("마", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "1100010F");}}  style={styles.button}>
                            <Text style={styles.text}>마</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("바", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "1000110F");}}  style={styles.button}>
                            <Text style={styles.text}>바</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("사", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "1111000F");}}  style={styles.button}>
                            <Text style={styles.text}>사</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("자", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "1000101F");}}  style={styles.button}>
                            <Text style={styles.text}>자</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("카", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "1110100F");}}  style={styles.button}>
                            <Text style={styles.text}>카</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("타", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "1110010F");}}  style={styles.button}>
                            <Text style={styles.text}>타</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("파", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "1100110F");}}  style={styles.button}>
                            <Text style={styles.text}>파</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("하", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "1010110F");}}  style={styles.button}>
                            <Text style={styles.text}>하</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("억", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "1100111F");}}  style={styles.button}>
                            <Text style={styles.text}>억</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("언", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "1011111F");}}  style={styles.button}>
                            <Text style={styles.text}>언</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("얼", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "1011110F");}}  style={styles.button}>
                            <Text style={styles.text}>얼</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("연", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "1100001F");}}  style={styles.button}>
                            <Text style={styles.text}>연</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("열", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "1110011F");}}  style={styles.button}>
                            <Text style={styles.text}>열</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("영", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "1110111F");}}  style={styles.button}>
                            <Text style={styles.text}>영</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("옥", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "1101101F");}}  style={styles.button}>
                            <Text style={styles.text}>옥</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("온", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "1111011F");}}  style={styles.button}>
                            <Text style={styles.text}>온</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("옹", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "1111111F");}}  style={styles.button}>
                            <Text style={styles.text}>옹</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("운", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "1110110F");}}  style={styles.button}>
                            <Text style={styles.text}>운</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("울", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "1111101F");}}  style={styles.button}>
                            <Text style={styles.text}>울</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("은", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "1101011F");}}  style={styles.button}>
                            <Text style={styles.text}>은</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("을", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "1011101F");}}  style={styles.button}>
                            <Text style={styles.text}>을</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("것", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "2000111011100F");}}  style={styles.button}>
                            <Text style={styles.text}>것</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("받침쌍시옷", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "1001100F");}}  style={styles.button}>
                            <Text style={styles.text}>받침ㅆ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("그래서", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "2100000011100F");}}  style={styles.button}>
                            <Text style={styles.text}>그래서</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("그러나", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "2100000100100F");}}  style={styles.button}>
                            <Text style={styles.text}>그러나</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("그러면", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "2100000010010F");}}  style={styles.button}>
                            <Text style={styles.text}>그러면</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("그러므로", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "2100000010001F");}}  style={styles.button}>
                            <Text style={styles.text}>그러므로</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("그런데", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "2100000101110F");}}  style={styles.button}>
                            <Text style={styles.text}>그런데</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("그리고", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "2100000101001F");}}  style={styles.button}>
                            <Text style={styles.text}>그리고</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("그리하여", { language: "ko", rate : 0.75 }); this.write(device_dot_in_abbreviation.id, "2100000100011F");}}  style={styles.button}>
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
        backgroundColor: '#f5fcff',
    },
    goback: {
        width: 40,
        height: 40,
        margin: 20,
    },
    syllables: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 40,
    },
    button: {
        borderRadius:30, 
        margin:10, 
        flex: 1,
        height:65, 
        backgroundColor:'#22509d', 
        justifyContent:'center',
    }, 
    text: {
        color:'white', 
        textAlign:'center', 
        fontWeight:'bold', 
        fontSize:30,
    }
});

export default AbbreviationTab; 