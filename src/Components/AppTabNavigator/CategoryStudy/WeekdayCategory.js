import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import { Icon } from 'native-base';
import Tts from 'react-native-tts';

const SCREEN_WIDTH = Dimensions.get('window').width;

class WeekdayCategory extends Component {
    state = {
        screenWidth: 0,
    };

    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ screenWidth: contentWidth });
    };

    render() {
        const {goBack} = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={styles.goback}> 
                    <Icon name="md-arrow-round-back" onPress={()=>{goBack(); Tts.speak('뒤로가기', { language: 'ko', rate: 0.75 });}}/>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                    <View style={styles.card}>
                        <Image source={{uri: 'data:image/png;base64,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'}} style={styles.img}></Image>
                        <TouchableOpacity onPress={()=>Tts.speak("월", { language: 'ko', rate: 0.75 })} style={styles.button}>
                            <Text style={styles.text}>월</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <Image source={{uri: 'data:image/png;base64,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'}} style={styles.img}></Image>
                        <TouchableOpacity onPress={()=>Tts.speak("화", { language: 'ko', rate: 0.75 })} style={styles.button}>
                            <Text style={styles.text}>화</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <Image source={{uri: 'data:image/png;base64,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'}} style={styles.img}></Image>
                        <TouchableOpacity onPress={()=>Tts.speak("수", { language: 'ko', rate: 0.75 })} style={styles.button}>
                            <Text style={styles.text}>수</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <Image source={{uri: 'data:image/png;base64,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'}} style={styles.img}></Image>
                        <TouchableOpacity onPress={()=>Tts.speak("금", { language: 'ko', rate: 0.75 })} style={styles.button}>
                            <Text style={styles.text}>금</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffa0d2',
        width: SCREEN_WIDTH,
    },
    goback: {
        width: 40,
        height: 40,
        margin: 20,
    },
    card: {
        borderRadius: 50,
        backgroundColor: 'white',
        width: 300,
        height: 500,
        margin: 55,
        alignItems: 'center',
    },
    img: {
        marginTop: 30,
        width: 250,
        height: 300,
        margin: 10,
    },
    button: {
        width: 100,
        height: 50,
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 50
    },
    text: {
        color: 'white',
        fontSize: 25
    },
});

export default WeekdayCategory; 