import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { createSwitchNavigator, createAppContainer, NavigationActions } from 'react-navigation'; 

// study tab 내에서 내비게이터
import SelectMode from '../StudyTabNavigator/SelectMode';
import BasicPage from '../StudyTabNavigator/BasicPage';
import AbbreviationPage from '../StudyTabNavigator/AbbreviationPage';
import CategoryPage from '../StudyTabNavigator/CategoryPage';

const NavigatorInStudyTab = createSwitchNavigator(
    {
        select: { screen: SelectMode },
        basic: { screen: BasicPage },
        abbreviation: { screen: AbbreviationPage },
        category: {screen: CategoryPage },
    },
);

export const NavigatorForStudyTab = createAppContainer(NavigatorInStudyTab);
  
export default class StudyTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-book' style={{ color: tintColor }} />
        )
    }

    render() {
        return <NavigatorForStudyTab />;
    }
}
