import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions  } from 'react-native';
import { Icon } from 'native-base';
import Tts from 'react-native-tts';

const { height } = Dimensions.get('window');

class PunctuationTab extends React.Component{
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
                    <Icon name="md-arrow-round-back" onPress={()=>{goBack(); Tts.speak("뒤로가기", { language: 'ko', rate: 0.75 });}}/>
                </View>

                <View style={styles.syllables}>
                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("여는 큰따옴표", { language: "ko", rate : 0.75 });}} style={styles.button}>
                            <Text style={styles.text}>여는큰따옴표(“)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("닫는 큰따옴표", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>닫는큰따옴표(”)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("여는 작은따옴표", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>여는작은따옴표(‘)</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("닫는 작은따옴표", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>닫는작은따옴표(’)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("물결표", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>물결표(~)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("가운데점 줄임표", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>줄임표(•••)</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("밑에점 줄임표", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>줄임표(…)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("느낌표", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>느낌표(!)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("마침표", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>마침표(.)</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("쉼표", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>쉼표(,)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("물음표", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>물음표(?)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("쌍점", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>쌍점(:)</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("쌍반점", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>쌍반점(;)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("붙임표", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>붙임표(-)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("참고표", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>참고표(※)</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("여는 소괄호", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>여는소괄호 (</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("닫는 소괄호", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>닫는소괄호 )</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("여는 중괄호", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>여는중괄호 {'\{'}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("닫는 중괄호", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>닫는중괄호 {'\}'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("여는 대괄호", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>여는대괄호 [</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("닫는 대괄호", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>닫는대괄호 ]</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("가운뎃점", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>가운뎃점( · )</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("여는 홑화살괄호 또는 여는 홑낫표", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>{'\<'} 또는 「</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("닫는 홑화살괄호 또는 닫는 홑낫표", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>{'\>'} 또는 」</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("여는 겹낫표 또는 여는 겹화살괄호", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>『 또는 《</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("닫는 겹낫표 또는 닫는 겹화살괄호", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>』 또는 》</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{this; Tts.speak("빗금", { language: "ko", rate : 0.75 });}}  style={styles.button}>
                            <Text style={styles.text}>빗금(/)</Text>
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
        margin: 20,
    },
    syllables: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 50,
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
        fontSize:15,
    }
});

export default PunctuationTab; 