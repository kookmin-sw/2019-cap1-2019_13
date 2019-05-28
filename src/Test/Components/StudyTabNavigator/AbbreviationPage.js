import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Button } from 'native-base';

export default class AbbrevationPage extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-book' style={{ color: tintColor }} />
        )
    }
    
    render() {
        const {navigate, state} = this.props.navigation;
        return (
            <View>
                <Icon name="md-arrow-round-back" onPress={() => {navigate('select'), {go_back_key: state.key}}} style={styles.goback}></Icon>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    goback: {
        width: 40,
        height: 40,
        margin: 10
    }
});