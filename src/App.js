<<<<<<< HEAD
import React, { Component } from 'react';
import { Stylesheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './Components/MainScreen';

const AppStackNavigator = createStackNavigator({
  Main: {
    screen: MainScreen  // MainScreen 컴포넌트를 네비게이터에 등록
  }
});

export default createAppContainer(AppStackNavigator);
=======
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
import MoumQuiz1 from './Components/QuizLevel/MoumQuizzes/MoumQuiz1';
import MoumQuiz2 from './Components/QuizLevel/MoumQuizzes/MoumQuiz2';
import AbQuiz1 from './Components/QuizLevel/AbbreviationQuizzes/AbQuiz1';
import AbQuiz2 from './Components/QuizLevel/AbbreviationQuizzes/AbQuiz2';


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
    MoumQuiz1: { screen: MoumQuiz1 },
    MoumQuiz2: { screen: MoumQuiz2 },
    AbQuiz1: { screen: AbQuiz1 },
    AbQuiz2: { screen: AbQuiz2 },
  },
  { initialRouteName: "Home", headerMode: "none" }
);

export default createAppContainer(App);
>>>>>>> Dev
