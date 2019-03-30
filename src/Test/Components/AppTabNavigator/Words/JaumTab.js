import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class JaumTab extends React.Component{
    render() {
        const {goBack} = this.props.navigation;

        return (
            <View style={ styles.container }>
                <View style={{ flexDirection:'row' }}>
                <TouchableOpacity 
                onPress={()=>this} style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㄱ</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㄴ</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㄷ</Text>
                </TouchableOpacity>
                </View>

                <View style={{ flexDirection:'row' }}>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㄹ</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅁ</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅂ</Text>
                </TouchableOpacity>
                </View>

                <View style={{ flexDirection:'row' }}>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅅ</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅇ</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅈ</Text>
                </TouchableOpacity>
                </View>

                <View style={{ flexDirection:'row' }}>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅊ</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅋ</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅌ</Text>
                </TouchableOpacity>
                </View>

                <View style={{ flexDirection:'row' }}>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅍ</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅎ</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'transparent', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}></Text>
                </TouchableOpacity>
                </View>

                <View style={{ flexDirection:'row' }}>
                <TouchableOpacity 
                onPress={()=>goBack()}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'#ffbe00', justifyContent:'center'}}>
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