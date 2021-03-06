import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import { Icon } from 'native-base';
import Toast from "@remobile/react-native-toast";
import Tts from 'react-native-tts';
import BluetoothSerial, {
    withSubscription
} from "react-native-bluetooth-serial-next";
import Voice from 'react-native-voice';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Season extends Component {
    state = {
        screenWidth: 0,
    };

    constructor(props) {
        super(props);
        this.state = {
            started: '',
            results: [],
   
        };
        this.mounted = false;
        Tts.speak("계절을 말해보세요", {language:"ko"});

        Voice.onSpeechStart = this.onSpeechStart.bind(this);
        Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this);
    }

    componentDidMount() {
        this.mounted= true;
    }

    componentWillUnmount() {
        Voice.destroy().then(Voice.removeAllListeners);
        this.mounted = false;
    }

    onSpeechStart(e) {
        if (this.mounted) { 
            this.setState({
                started: '√',
            });
        };
    }

    onSpeechPartialResults(e) {
        console.log('here season');
        var speech = e.value[0].split(" ").slice(-1)[0];
        console.log(speech);
        const {goBack} = this.props.navigation;
        const device_dot_in_season = this.props.navigation.getParam('deviceinfo2', 'cantread');

        if (speech.includes("뒤로")) {
            goBack();
        }
        else if (speech.includes("봄")) {
            this.write(device_dot_in_season.id, "3000110101001010001F");
            this.setState({
                results: '',
            });
        } 
        else if (speech.includes("여름")) {
            this.write(device_dot_in_season.id, "4100011000010010101010001F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("가을")) {
            this.write(device_dot_in_season.id, "3110101010101010000F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("겨울")) {
            this.write(device_dot_in_season.id, "3000100100011111101F");
            this.setState({
                results: '',
            });
        }
    }

    async _startRecognition(e) {
        if (this.mounted) {
            this.setState({
                started: '',
                results: [],
            });
            try {
                await Voice.start('ko-KR');
            } catch (e) {
                console.error(e);
            }
        }
    }

    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ screenWidth: contentWidth });
    };

    write = async (id, message) => {
        try {
          await BluetoothSerial.device(id).write(message);
          Toast.showShortBottom("Successfuly wrote to device");
        } catch (e) {
          Toast.showShortBottom(e.message);
        }
    };

    render() {
        const {goBack} = this.props.navigation;
        const device_dot_in_season = this.props.navigation.getParam('deviceinfo2', 'cantread');
        console.log("device info in season: ", device_dot_in_season.id);

        return (
            <View style={styles.container}>
                <View style={styles.goback}> 
                    <Icon name="md-arrow-round-back" onPress={()=>{goBack(); Tts.speak('뒤로가기', { language: 'ko', rate: 0.75 });}}/>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                    <View style={styles.card}>
                        <Image source={{uri: 'http://www.stickpng.com/assets/images/580b585b2edbce24c47b262f.png'}} style={styles.img}></Image>
                        <TouchableOpacity onPress={()=>{Tts.speak("봄", { language: 'ko', rate: 0.75 }); this.write(device_dot_in_season.id, "3000110101001010001F");}} style={styles.button}>
                            <Text style={styles.text}>봄</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                    <Image source={{uri: 'data:image/jpeg;base64,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'}} style={styles.img}></Image>
                        <TouchableOpacity onPress={()=>{Tts.speak("여름", { language: 'ko', rate: 0.75 }); this.write(device_dot_in_season.id, "4100011000010010101010001F");}} style={styles.button}>
                            <Text style={styles.text}>여름</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <Image source={{uri: 'https://atlas-content-cdn.pixelsquid.com/stock-images/fall-tree-deciduous-q1A7l82-600.jpg'}} style={styles.img}></Image>
                        <TouchableOpacity onPress={()=>{Tts.speak("가을", { language: 'ko', rate: 0.75 }); this.write(device_dot_in_season.id, "3110101010101010000F");}} style={styles.button}>
                            <Text style={styles.text}>가을</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <Image source={{uri: 'data:image/jpeg;base64,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'}} style={styles.img}></Image>
                        <TouchableOpacity onPress={()=>{Tts.speak("겨울", { language: 'ko', rate: 0.75 }); this.write(device_dot_in_season.id, "3000100100011111101F");}} style={styles.button}>
                            <Text style={styles.text}>겨울</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity style={styles.sttbutton} onPress={() => {this._startRecognition();}}>
                        <Text style={{color: 'white', fontSize: 70}}>음성인식</Text>
                    </TouchableOpacity>                
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5fcff',
        width: SCREEN_WIDTH,
    },
    goback: {
        width: 40,
        height: 40,
        margin: 20,
    },
    card: {
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#abb0b2',
        backgroundColor: 'white',
        width: 300,
        height: 450,
        marginTop: 10,
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 30,
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
        backgroundColor: '#22509d',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 50
    },
    text: {
        color: 'white',
        fontSize: 25
    },
    sttbutton: {
        borderRadius: 30,
        margin: 30,
        height: 250,
        width: 500, 
        backgroundColor: '#ff9933',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        marginBottom: 70
    }
});

export default Season; 