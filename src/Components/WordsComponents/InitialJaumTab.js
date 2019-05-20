import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import Tts from 'react-native-tts';
import Toast from "@remobile/react-native-toast";
import BluetoothSerial, {
    withSubscription
  } from "react-native-bluetooth-serial-next";

class InitialJaumTab extends React.Component{
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
        const device_dot_in_initialjaum = this.props.navigation.getParam('deviceinfo2', 'cantread');
        console.log("device info in intialjaum: ", device_dot_in_initialjaum.id);
        
        return (
            <View style={ styles.container }>
                <View style={styles.goback}> 
                    <Icon name="md-arrow-round-back" onPress={()=>{goBack(); Tts.speak("뒤로가기", { language: "ko", rate : 0.75 });}} />
                </View>
                
                <View style={styles.syllables}>
                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㄱ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_initialjaum.id, "1000100F");} } style={styles.button}>
                            <Text style={styles.text}>ㄱ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㄴ", { language: "ko", rate : 0.3 }); this.write(device_dot_in_initialjaum.id, "1100100F");}}  style={styles.button}>
                            <Text style={styles.text}>ㄴ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㄷ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_initialjaum.id, "1010100F");}}  style={styles.button}>
                            <Text style={styles.text}>ㄷ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㄹ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_initialjaum.id, "1000010F");}}  style={styles.button}>
                            <Text style={styles.text}>ㄹ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅁ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_initialjaum.id, "1100010F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅁ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅂ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_initialjaum.id, "1000110F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅂ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅅ", { language: "ko", rate : 0.6 }); this.write(device_dot_in_initialjaum.id, "1000001F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅅ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅈ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_initialjaum.id, "1000101F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅈ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅊ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_initialjaum.id, "1000011F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅊ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅋ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_initialjaum.id, "1110100F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅋ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅌ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_initialjaum.id, "1110010F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅌ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅍ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_initialjaum.id, "1100110F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅍ</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("ㅎ", { language: "ko", rate : 0.75 }); this.write(device_dot_in_initialjaum.id, "1010110F");}}  style={styles.button}>
                            <Text style={styles.text}>ㅎ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("된소리", { language: "ko", rate : 0.75 }); this.write(device_dot_in_initialjaum.id, "1000001F");}}  style={styles.button}>
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
        backgroundColor: '#f5fcff',
    },
    goback: {
        width: 40,
        height: 40,
        margin: 20,
    },
    syllables: {
        marginTop: 150,
        marginLeft: 20,
        marginRight: 20
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

export default InitialJaumTab; 