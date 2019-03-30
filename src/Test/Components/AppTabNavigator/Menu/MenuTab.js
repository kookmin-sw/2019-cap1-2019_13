import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Icon, Header, Body, Left, Right } from 'native-base';

class MenuTab extends React.Component{
    render() {
        return (
            <View style={ styles.container }>

                <View style={{ flexDirection:'row' }}>
                <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate('Jaum')} style={{borderRadius:20, margin:10, flex:1, height:150, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>자음 배우기</Text>
                </TouchableOpacity>
                </View>

                <View style={{ flexDirection:'row' }}>
                <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate('Moum')} style={{borderRadius:20, margin:10, flex:1, height:150, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>모음 배우기</Text>
                </TouchableOpacity>
                </View>

                <View style={{ flexDirection:'row' }}>
                <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate('Word')} style={{borderRadius:20, margin:10, flex:1, height:150, backgroundColor:'dodgerblue', justifyContent:'center'}}>
                    <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:30}}>단어 배우기</Text>
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
        backgroundColor: '#f6efb4'
    }
});

export default MenuTab; 