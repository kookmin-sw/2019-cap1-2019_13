import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from 'native-base';
import Tts from 'react-native-tts';
import Toast from "@remobile/react-native-toast";
import BluetoothSerial, {
    withSubscription
  } from "react-native-bluetooth-serial-next";

class PunctuationTab extends React.Component{
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
        const device_dot_in_punctuation = this.props.navigation.getParam('deviceinfo2', 'cantread');
        console.log("device info in punctuation: ", device_dot_in_punctuation.id);
        
        return (
            <ScrollView style={ styles.container }>
                <View style={styles.goback}> 
                    <Icon name="md-arrow-round-back" onPress={()=>{goBack(); Tts.speak("뒤로가기", { language: 'ko', rate: 0.75 });}}/>
                </View>

                <View style={styles.syllables}>
                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("여는 큰따옴표", { language: "ko", rate : 0.75 }); this.write(device_dot_in_punctuation.id, "1011001F");}} style={styles.button}>
                            <Text style={styles.text}>여는큰따옴표(“)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("닫는 큰따옴표", { language: "ko", rate : 0.75 }); this.write(device_dot_in_punctuation.id, "1001011F");}}  style={styles.button}>
                            <Text style={styles.text}>닫는큰따옴표(”)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("여는 작은따옴표", { language: "ko", rate : 0.75 }); this.write(device_dot_in_punctuation.id, "2000001011001F");}}  style={styles.button}>
                            <Text style={styles.text}>여는작은따옴표(‘)</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("닫는 작은따옴표", { language: "ko", rate : 0.75 }); this.write(device_dot_in_punctuation.id, "2001011001000F");}}  style={styles.button}>
                            <Text style={styles.text}>닫는작은따옴표(’)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("물결표", { language: "ko", rate : 0.75 }); this.write(device_dot_in_punctuation.id, "2001001001001F");}}  style={styles.button}>
                            <Text style={styles.text}>물결표(~)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("빗금", { language: "ko", rate : 0.75 }); this.write(device_dot_in_punctuation.id, "2000111001100F");}}  style={styles.button}>
                            <Text style={styles.text}>빗금(/)</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("쉼표", { language: "ko", rate : 0.75 }); this.write(device_dot_in_punctuation.id, "1000010F");}}  style={styles.button}>
                            <Text style={styles.text}>쉼표(,)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("느낌표", { language: "ko", rate : 0.75 }); this.write(device_dot_in_punctuation.id, "1011010F");}}  style={styles.button}>
                            <Text style={styles.text}>느낌표(!)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("마침표", { language: "ko", rate : 0.75 }); this.write(device_dot_in_punctuation.id, "1010011F");}}  style={styles.button}>
                            <Text style={styles.text}>마침표(.)</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("물음표", { language: "ko", rate : 0.75 }); this.write(device_dot_in_punctuation.id, "1011001F");}}  style={styles.button}>
                            <Text style={styles.text}>물음표(?)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("쌍점", { language: "ko", rate : 0.75 }); this.write(device_dot_in_punctuation.id, "2000010010000F");}}  style={styles.button}>
                            <Text style={styles.text}>쌍점(:)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("가운뎃점", { language: "ko", rate : 0.75 }); this.write(device_dot_in_punctuation.id, "2000010011000F");}}  style={styles.button}>
                            <Text style={styles.text}>가운뎃점( · )</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("쌍반점", { language: "ko", rate : 0.75 }); this.write(device_dot_in_punctuation.id, "2000011011000F");}}  style={styles.button}>
                            <Text style={styles.text}>쌍반점(;)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("붙임표", { language: "ko", rate : 0.75 }); this.write(device_dot_in_punctuation.id, "1001001F");}}  style={styles.button}>
                            <Text style={styles.text}>붙임표(-)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("참고표", { language: "ko", rate : 0.75 }); this.write(device_dot_in_punctuation.id, "2001010001010F");}}  style={styles.button}>
                            <Text style={styles.text}>참고표(※)</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("여는 소괄호", { language: "ko", rate : 0.75 }); this.write(device_dot_in_punctuation.id, "2011001001000F");}}  style={styles.button}>
                            <Text style={styles.text}>여는소괄호 (</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("닫는 소괄호", { language: "ko", rate : 0.75 }); this.write(device_dot_in_punctuation.id, "2000001001011F");}}  style={styles.button}>
                            <Text style={styles.text}>닫는소괄호 )</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("여는 중괄호", { language: "ko", rate : 0.75 }); this.write(device_dot_in_punctuation.id, "2011001010000F");}}  style={styles.button}>
                            <Text style={styles.text}>여는중괄호 {'\{'}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("닫는 중괄호", { language: "ko", rate : 0.75 }); this.write(device_dot_in_punctuation.id, "2000010001011F");}}  style={styles.button}>
                            <Text style={styles.text}>닫는중괄호 {'\}'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("여는 대괄호", { language: "ko", rate : 0.75 }); this.write(device_dot_in_punctuation.id, "2011001011000F");}}  style={styles.button}>
                            <Text style={styles.text}>여는대괄호 [</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("닫는 대괄호", { language: "ko", rate : 0.75 }); this.write(device_dot_in_punctuation.id, "2000011001011F");}}  style={styles.button}>
                            <Text style={styles.text}>닫는대괄호 ]</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("여는 홑화살괄호 또는 여는 홑낫표", { language: "ko", rate : 0.75 }); this.write(device_dot_in_punctuation.id, "2000010011001F");}}  style={styles.button}>
                            <Text style={styles.text}>{'\<'} 또는 「</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("닫는 홑화살괄호 또는 닫는 홑낫표", { language: "ko", rate : 0.75 }); this.write(device_dot_in_punctuation.id, "2001011010000F");}}  style={styles.button}>
                            <Text style={styles.text}>{'\>'} 또는 」</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("여는 겹낫표 또는 여는 겹화살괄호", { language: "ko", rate : 0.75 }); this.write(device_dot_in_punctuation.id, "2000011011001F");}}  style={styles.button}>
                            <Text style={styles.text}>『 또는 《</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("닫는 겹낫표 또는 닫는 겹화살괄호", { language: "ko", rate : 0.75 }); this.write(device_dot_in_punctuation.id, "2001011011000F");}}  style={styles.button}>
                            <Text style={styles.text}>』 또는 》</Text>
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
        marginTop: 50,
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
        fontSize:20,
    }
});

export default PunctuationTab; 