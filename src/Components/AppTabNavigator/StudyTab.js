import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import MenuTab from './Menu/MenuTab';
import MoumTab from './Words/MoumTab';
import InitialJaumTab from './Words/InitialJaumTab';
import EndJaumTab from './Words/EndJaumTab';
import AbbreviationTab from './Words/AbbreviationTab';
import CategoryTab from './Words/CategoryTab';
import PunctuationTab from './Words/PunctuationTab';

import AnimalCategory from './CategoryStudy/AnimalCategory';
import ColorCategory from './CategoryStudy/ColorCategory';
import NumberCategory from './CategoryStudy/NumberCategory';
import SeasonCategory from './CategoryStudy/SeasonCategory';
import SportsCategory from './CategoryStudy/SportsCategory';
import WeekdayCategory from './CategoryStudy/WeekdayCategory';

const MainStack = createStackNavigator(
    {
        Menu: { screen: MenuTab },
        InitialJaum: { screen: InitialJaumTab },
        Moum: { screen: MoumTab },
        EndJaum: { screen: EndJaumTab },
        Abbreviation: { screen: AbbreviationTab },
        Punctuation: { screen: PunctuationTab },
        Category: { screen: CategoryTab },

        Animal: { screen: AnimalCategory },
        Color: { screen: ColorCategory },
        Number: { screen: NumberCategory },
        Season: { screen: SeasonCategory },
        Sports: { screen: SportsCategory },
        Weekday: { screen: WeekdayCategory },
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