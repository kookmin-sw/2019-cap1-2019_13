import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import { Icon } from 'native-base';
import Tts from 'react-native-tts';
import Toast from "@remobile/react-native-toast";
import BluetoothSerial, {
    withSubscription
} from "react-native-bluetooth-serial-next";
import Voice from 'react-native-voice';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Number extends Component {
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
        Tts.speak("숫자를 말해보세요", {language:"ko"});

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
        console.log('here number');
        var speech = e.value[0].split(" ").slice(-1)[0];
        console.log(speech);
        const {goBack} = this.props.navigation;
        const device_dot_in_number = this.props.navigation.getParam('deviceinfo2', 'cantread');

        if (speech.includes("뒤로")) {
            goBack();
        }
        else if (speech.includes("일") || speech.includes("1")) {
            this.write(device_dot_in_number.id, "2001111100000F");
            this.setState({
                results: '',
            });
        } 
        else if (speech.includes("이") || speech.includes("2")) {
            this.write(device_dot_in_number.id, "2001111110000F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("삼") || speech.includes("3")) {
            this.write(device_dot_in_number.id, "2001111100100F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("사") || speech.includes("4")) {
            this.write(device_dot_in_number.id, "2001111100110F");
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
        const device_dot_in_number = this.props.navigation.getParam('deviceinfo2', 'cantread');
        console.log("device info in number: ", device_dot_in_number.id);

        return (
            <View style={styles.container}>
                <View style={styles.goback}> 
                    <Icon name="md-arrow-round-back" onPress={()=>{goBack(); Tts.speak('뒤로가기', { language: 'ko', rate: 0.75 });}}/>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                    <View style={styles.card}>
                        <Image source={{uri: 'https://vignette.wikia.nocookie.net/lyricwiki/images/9/98/Number_one.png/revision/latest?cb=20080802041439'}} style={styles.img}></Image>
                        <TouchableOpacity onPress={()=>{Tts.speak("1", { language: 'ko', rate: 0.75 }); this.write(device_dot_in_number.id, "2001111100000F");}} style={styles.button}>
                            <Text style={styles.text}>1</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <Image source={{uri: 'data:image/png;base64,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'}} style={styles.img}></Image>
                        <TouchableOpacity onPress={()=>{Tts.speak("2", { language: 'ko', rate: 0.75 }); this.write(device_dot_in_number.id, "2001111110000F");}} style={styles.button}>
                            <Text style={styles.text}>2</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <Image source={{uri: 'https://vignette.wikia.nocookie.net/phobia/images/f/f4/Three.png/revision/latest?cb=20161112225540'}} style={styles.img}></Image>
                        <TouchableOpacity onPress={()=>{Tts.speak("3", { language: 'ko', rate: 0.75 }); this.write(device_dot_in_number.id, "2001111100100F");}} style={styles.button}>
                            <Text style={styles.text}>3</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <Image source={{uri: 'https://cdn.pixabay.com/photo/2017/03/12/05/06/four-2136429_960_720.png'}} style={styles.img}></Image>
                        <TouchableOpacity onPress={()=>{Tts.speak("4", { language: 'ko', rate: 0.75 }); this.write(device_dot_in_number.id, "2001111100110F");}} style={styles.button}>
                            <Text style={styles.text}>4</Text>
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

export default Number; 