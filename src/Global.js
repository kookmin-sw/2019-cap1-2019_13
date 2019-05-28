import React, { Component } from 'react';
import { AsyncStorage, Button, Text, View, StyleSheet } from 'react-native';

export default class Global extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false 
    };
  }
}