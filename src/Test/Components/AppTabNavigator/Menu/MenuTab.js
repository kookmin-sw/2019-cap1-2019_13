import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';

class MenuTab extends React.Component{
    render() {
        return (
            <View style={ styles.container }>
                <View>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('InitialJaum')} style={styles.button}>
                        <Text style={styles.textInButton}>초성자음</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('Moum')} style={styles.button}>
                        <Text style={styles.textInButton}>모음</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('EndJaum')} style={styles.button}>
                        <Text style={styles.textInButton}>종성자음</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('Abbreviation')} style={styles.button}>
                        <Text style={styles.textInButton}>약어</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('Punctuation')} style={styles.button}>
                        <Text style={styles.textInButton}>문장부호</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity 
                    onPress={()=>this.props.navigation.navigate('Category')} style={styles.button}>
                        <Text style={styles.textInButton}>카테고리</Text>
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
        flexDirection:'row',
        flexWrap: 'wrap',
        backgroundColor: '#f6efb4',
        justifyContent: 'space-between'
    },
    button: {
        borderRadius: 100,
        margin: 40,
        height: 120,
        width: 120, 
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: 1,
        marginTop: 80
    },
    textInButton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
    }
});

export default MenuTab; 