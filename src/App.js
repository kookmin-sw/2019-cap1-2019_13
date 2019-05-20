import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomePage from './Components/HomePage';
import StudyPage from './Components/StudyPage';
import QuizPage from './Components/QuizPage';
import TranslatePage from './Components/TranslatePage';

import InitialJaumPage from './Components/WordsComponents/InitialJaumTab';
import MoumPage from './Components/WordsComponents/MoumTab';
import EndJaumPage from './Components/WordsComponents/EndJaumTab';
import AbbreviationPage from './Components/WordsComponents/AbbreviationTab';
import PunctuationPage from './Components/WordsComponents/PunctuationTab';
import CategoryPage from './Components/WordsComponents/CategoryTab';

import ColorPage from './Components/CategoryStudy/Color';
import AnimalPage from './Components/CategoryStudy/Animal';
import NumberPage from './Components/CategoryStudy/Number';
import SeasonPage from './Components/CategoryStudy/Season';
import SportsPage from './Components/CategoryStudy/Sports';
import WeekdayPage from './Components/CategoryStudy/Weekday';

import JaumQuiz1 from './Components/QuizLevel/JaumQuizzes/JaumQuiz1';
import JaumQuiz2 from './Components/QuizLevel/JaumQuizzes/JaumQuiz2';
import JaumQuiz3 from './Components/QuizLevel/JaumQuizzes/JaumQuiz3';

const App = createStackNavigator(
  {
    Home: { screen: HomePage},
    Study: { screen: StudyPage },
    Quiz: { screen: QuizPage },
    Translate: { screen: TranslatePage },
    InitialJaum: { screen: InitialJaumPage },
    Moum: { screen: MoumPage },
    EndJaum: { screen: EndJaumPage },
    Abbreviation: { screen: AbbreviationPage },
    Punctuation: { screen: PunctuationPage },
    Category: { screen: CategoryPage },
    Color: { screen: ColorPage },
    Animal: { screen: AnimalPage },
    Number: { screen: NumberPage },
    Season: { screen: SeasonPage },
    Sports: { screen: SportsPage },
    Weekday: { screen: WeekdayPage },
    JaumQuiz1: { screen: JaumQuiz1 },
    JaumQuiz2: { screen: JaumQuiz2 },
    JaumQuiz3: { screen: JaumQuiz3 },
  },
  { initialRouteName: "Home", headerMode: "none" }
);

export default createAppContainer(App);