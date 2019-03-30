import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class MoumTab extends React.Component{
    render() {
        const {goBack} = this.props.navigation;

        return (
            <View style={ styles.container }>
                <View style={{ flexDirection:'row' }}>
                <TouchableOpacity 
                onPress={()=>this} style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅏ</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅑ</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅓ</Text>
                </TouchableOpacity>
                </View>

                <View style={{ flexDirection:'row' }}>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅕ</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅗ</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅛ</Text>
                </TouchableOpacity>
                </View>

                <View style={{ flexDirection:'row' }}>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅜ</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅠ</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅡ</Text>
                </TouchableOpacity>
                </View>

                <View style={{ flexDirection:'row' }}>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>ㅣ</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'white', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}></Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'white', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}></Text>
                </TouchableOpacity>
                </View>

                <View style={{ flexDirection:'row' }}>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'white', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}></Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'white', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}></Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>this}  style={{borderRadius:20, margin:10, flex:1, height:65, backgroundColor:'white', justifyContent:'center'}}>
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

export default MoumTab; 