import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Speech } from 'expo';
import Global from '../../../global';

class WordTab extends React.Component{
    render() {
        const {goBack} = this.props.navigation;

        return (
            <View style={ styles.container }>
                <View style={{ flexDirection:'row' }}>
                <TouchableOpacity 
                onPress={()=>(Global.status ? Speech.speak('사과',{language : 'ko', rate : 0.75}) : null)} style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>사과</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>(Global.status ? Speech.speak('오렌지',{language : 'ko', rate : 0.75}) : null)}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>오렌지</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>(Global.status ? Speech.speak('딸기',{language : 'ko', rate : 0.75}) : null)}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>딸기</Text>
                </TouchableOpacity>
                </View>

                <View style={{ flexDirection:'row' }}>
                <TouchableOpacity 
                onPress={()=>(Global.status ? Speech.speak('수박',{language : 'ko', rate : 0.75}) : null)}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>수박</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>(Global.status ? Speech.speak('메론',{language : 'ko', rate : 0.75}) : null)}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>메론</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>(Global.status ? Speech.speak('귤',{language : 'ko', rate : 0.75}) : null)}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>귤</Text>
                </TouchableOpacity>
                </View>

                <View style={{ flexDirection:'row' }}>
                <TouchableOpacity 
                onPress={()=>(Global.status ? Speech.speak('바나나',{language : 'ko', rate : 0.75}) : null)}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>바나나</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>(Global.status ? Speech.speak('한라봉',{language : 'ko', rate : 0.75}) : null)}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>한라봉</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>(Global.status ? Speech.speak('포도',{language : 'ko', rate : 0.75}) : null)}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>포도</Text>
                </TouchableOpacity>
                </View>

                <View style={{ flexDirection:'row' }}>
                <TouchableOpacity 
                onPress={()=>(Global.status ? Speech.speak('체리',{language : 'ko', rate : 0.75}) : null)}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>체리</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>(Global.status ? Speech.speak('키위',{language : 'ko', rate : 0.75}) : null)}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>키위</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>(Global.status ? Speech.speak('코코넛',{language : 'ko', rate : 0.75}) : null)}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>코코넛</Text>
                </TouchableOpacity>
                </View>

                <View style={{ flexDirection:'row' }}>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'transparent', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}></Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'transparent', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}></Text>
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

export default WordTab; 