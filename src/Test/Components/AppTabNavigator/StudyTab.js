import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import MenuTab from './Menu/MenuTab';
import MoumTab from './Words/MoumTab';
import JaumTab from './Words/JaumTab';
import WordTab from './Words/WordTab';

const MainStack = createStackNavigator(
    {
        Menu:{ screen: MenuTab },
        Jaum:{ screen: JaumTab },
        Moum:{ screen: MoumTab},
        Word:{ screen: WordTab},
    },
    {
        headerMode:'none',
    }
);

const App = createAppContainer(MainStack);

export default class StudyTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-book' style={{ color: tintColor, }} />
        )
    }
    render() {
        return (
           <App/>
        );
    }

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column',
    }
});