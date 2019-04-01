import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import { Icon } from 'native-base';
import { Speech } from 'expo';

const SCREEN_WIDTH = Dimensions.get('window').width;

class AnimalCategory extends Component {
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
                        <Image source={{uri: 'https://www.guidedogsvictoria.com.au/wp-content/themes/default/static/img/puppy.png'}} style={styles.img}></Image>
                        <TouchableOpacity onPress={()=>Speech.speak("개", { language: 'ko', rate: 0.75 })} style={styles.button}>
                            <Text style={styles.text}>개</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <Image source={{uri: 'http://pngimg.com/uploads/birds/birds_PNG99.png'}} style={styles.img}></Image>
                        <TouchableOpacity onPress={()=>Speech.speak("새", { language: 'ko', rate: 0.75 })} style={styles.button}>
                            <Text style={styles.text}>새</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <Image source={{uri: 'data:image/jpeg;base64,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'}} style={styles.img}></Image>
                        <TouchableOpacity onPress={()=>Speech.speak("사자", { language: 'ko', rate: 0.75 })} style={styles.button}>
                            <Text style={styles.text}>사자</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <Image source={{uri: 'http://pngimg.com/uploads/horse/horse_PNG2528.png'}} style={styles.img}></Image>
                        <TouchableOpacity onPress={()=>Speech.speak("말", { language: 'ko', rate: 0.75 })} style={styles.button}>
                            <Text style={styles.text}>말</Text>
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

export default AnimalCategory; 