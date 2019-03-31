import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Icon } from 'native-base';

const { height } = Dimensions.get('window');

class AbbreviationTab extends React.Component{
    state = {
        screenHeight: 0,
    };

    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ screenHeight: contentHeight });
    };

    render() {
        const {goBack} = this.props.navigation;
        const scrollEnabled = this.state.screenHeight > height;

        return (
            <ScrollView style={ styles.container }>
                <View style={styles.goback}> 
                    <Icon name="md-arrow-round-back" onPress={()=>goBack()}/>
                </View>

                <View style={styles.syllables}>
                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>this} style={styles.button}>
                            <Text style={styles.text}>가</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>나</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>다</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>마</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>바</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>사</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>자</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>카</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>타</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>파</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>하</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>억</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>언</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>얼</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>연</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>열</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>영</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>옥</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>온</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>옹</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>운</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>울</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>은</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>을</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>것</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>받침ㅆ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>그래서</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>그러나</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>그러면</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>그러므로</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>그런데</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>그리고</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>그리하여</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

                
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f6efb4',
    },
    goback: {
        width: 40,
        height: 40,
        marginLeft: 20,
        marginTop: 20,
    },
    syllables: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 40,
    },
    button: {
        borderRadius:20, 
        margin:10, 
        flex: 1,
        height:55, 
        backgroundColor:'dodgerblue', 
        justifyContent:'center',
    }, 
    text: {
        color:'white', 
        textAlign:'center', 
        fontWeight:'bold', 
        fontSize: 25,
    }
});

export default AbbreviationTab; 