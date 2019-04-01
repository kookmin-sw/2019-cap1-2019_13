import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import { Icon } from 'native-base';
import { Speech } from 'expo';

const SCREEN_WIDTH = Dimensions.get('window').width;

class NumberCategory extends Component {
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
                    <Icon name="md-arrow-round-back" onPress={()=>{goBack(); Speech.speak('뒤로가기', { language: 'ko', rate: 0.75 });}}/>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                    <View style={styles.card}>
                        <Image source={{uri: 'https://vignette.wikia.nocookie.net/lyricwiki/images/9/98/Number_one.png/revision/latest?cb=20080802041439'}} style={styles.img}></Image>
                        <TouchableOpacity onPress={()=>Speech.speak("1", { language: 'ko', rate: 0.75 })} style={styles.button}>
                            <Text style={styles.text}>1</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <Image source={{uri: 'data:image/png;base64,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'}} style={styles.img}></Image>
                        <TouchableOpacity onPress={()=>Speech.speak("2", { language: 'ko', rate: 0.75 })} style={styles.button}>
                            <Text style={styles.text}>2</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <Image source={{uri: 'https://vignette.wikia.nocookie.net/phobia/images/f/f4/Three.png/revision/latest?cb=20161112225540'}} style={styles.img}></Image>
                        <TouchableOpacity onPress={()=>Speech.speak("3", { language: 'ko', rate: 0.75 })} style={styles.button}>
                            <Text style={styles.text}>3</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <Image source={{uri: 'https://cdn.pixabay.com/photo/2017/03/12/05/06/four-2136429_960_720.png'}} style={styles.img}></Image>
                        <TouchableOpacity onPress={()=>Speech.speak("4", { language: 'ko', rate: 0.75 })} style={styles.button}>
                            <Text style={styles.text}>4</Text>
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

export default NumberCategory; 