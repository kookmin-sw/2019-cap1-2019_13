import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions  } from 'react-native';
import { Icon } from 'native-base';

const { height } = Dimensions.get('window');

class PunctuationTab extends React.Component{
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
                            <Text style={styles.text}>여는큰따옴표(“)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>닫는큰따옴표(”)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>여는작은따옴표(‘)</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>닫는작은따옴표(’)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>물결표(~)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>줄임표(•••)</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>줄임표(…)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>느낌표(!)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>마침표(.)</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>쉼표(,)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>물음표(?)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>쌍점(:)</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>쌍반점(;)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>붙임표(-)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>참고표(※)</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>여는소괄호 (</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>닫는소괄호 )</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>여는중괄호 {'\{'}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>닫는중괄호 {'\}'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>닫는소괄호 )</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>여는대괄호 [</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>닫는대괄호 ]</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>가운뎃점( · )</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>{'\<'} 또는 「</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row' }}>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>{'\>'} 또는 」</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>『 또는 《</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>』 또는 》</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection:'row', width: 125 }}>
                        <TouchableOpacity 
                        onPress={()=>this}  style={styles.button}>
                            <Text style={styles.text}>빗금(/)</Text>
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
        margin: 20,
    },
    syllables: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 50,
    },
    button: {
        borderRadius:20, 
        margin:10, 
        flex: 1,
        height:65, 
        backgroundColor:'dodgerblue', 
        justifyContent:'center',
    }, 
    text: {
        color:'white', 
        textAlign:'center', 
        fontWeight:'bold', 
        fontSize:15,
    }
});

export default PunctuationTab; 