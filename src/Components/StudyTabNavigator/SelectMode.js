import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { createSwitchNavigator, createAppContainer, NavigationActions } from 'react-navigation'; 

export default class StudyTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-book' style={{ color: tintColor }} />
        )
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={style.container}>
                <TouchableOpacity style={style.button} onPress={() => {navigation.navigate({routeName: 'basic'})}}>
                    <Text style={style.buttonText}>자음, 모음 배우기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={() => {navigation.navigate({routeName: 'abbreviation'})}}> 
                    <Text style={style.buttonText}>약어, 문장부호 배우기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={() => {navigation.navigate({routeName: 'category'})}}>
                    <Text style={style.buttonText}>카테고리로 배우기</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        margin: 60,
        backgroundColor: "#b0e0e6",
        width: 280,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    buttonText: {
        fontSize: 30,
        color: "#808080",
    }
});