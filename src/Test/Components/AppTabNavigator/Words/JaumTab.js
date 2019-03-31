import React, { Component, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Speech } from 'expo';
import Global from '../../../global';

class JaumTab extends React.Component{
    render() {
        const {goBack} = this.props.navigation;
        return (
            <View style={ styles.container }>
                <View style={{ flexDirection:'row' }}>
                <TouchableOpacity 
                onPress={()=>(Global.status ? Speech.speak('기역',{language : 'ko', rate : 0.75}) : null)} style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㄱ</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>(Global.status ? Speech.speak('니은',{language : 'ko', rate : 0.75}) : null)}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㄴ</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>(Global.status ? Speech.speak('디귿',{language : 'ko', rate : 0.75}) : null)}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㄷ</Text>
                </TouchableOpacity>
                </View>

                <View style={{ flexDirection:'row' }}>
                <TouchableOpacity 
                onPress={()=>(Global.status ? Speech.speak('리을',{language : 'ko', rate : 0.75}) : null)}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㄹ</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>(Global.status ? Speech.speak('미음',{language : 'ko', rate : 0.75}) : null)}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅁ</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>(Global.status ? Speech.speak('비읍',{language : 'ko', rate : 0.75}) : null)}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅂ</Text>
                </TouchableOpacity>
                </View>

                <View style={{ flexDirection:'row' }}>
                <TouchableOpacity 
                onPress={()=>(Global.status ? Speech.speak('시옷',{language : 'ko', rate : 0.75}) : null)}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅅ</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>(Global.status ? Speech.speak('이응',{language : 'ko', rate : 0.75}) : null)}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅇ</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>(Global.status ? Speech.speak('지읒',{language : 'ko', rate : 0.75}) : null)}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅈ</Text>
                </TouchableOpacity>
                </View>

                <View style={{ flexDirection:'row' }}>
                <TouchableOpacity 
                onPress={()=>(Global.status ? Speech.speak('치읓',{language : 'ko', rate : 0.75}) : null)}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅊ</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>(Global.status ? Speech.speak('키읔',{language : 'ko', rate : 0.75}) : null)}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅋ</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>(Global.status ? Speech.speak('티읕',{language : 'ko', rate : 0.75}) : null)}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅌ</Text>
                </TouchableOpacity>
                </View>

                <View style={{ flexDirection:'row' }}>
                <TouchableOpacity 
                onPress={()=>(Global.status ? Speech.speak('피읖',{language : 'ko', rate : 0.75}) : null)}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅍ</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>(Global.status ? Speech.speak('히읗',{language : 'ko', rate : 0.75}) : null)}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅎ</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'transparent', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}></Text>
                </TouchableOpacity>
                </View>

                <View style={{ flexDirection:'row' }}>
                <TouchableOpacity 
                onPress={()=>{goBack(); (Global.status ? Speech.speak('뒤로가기',{language : 'ko', rate : 0.75}) : null)}}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'#ffbe00', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>뒤로가기</Text>
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
        justifyContent: 'center',
        flexDirection:'column',
    }
});

export default JaumTab; 