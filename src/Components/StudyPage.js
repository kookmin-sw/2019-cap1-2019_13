import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Tts from 'react-native-tts';
import { Icon } from 'native-base';
import Voice from 'react-native-voice';

class StudyPage extends Component{
    constructor(props) {
        super(props);
        Tts.setDefaultLanguage('ko');
        Tts.addEventListener('tts-start', event => console.log('start', event));
        Tts.addEventListener('tts-finish', event => console.log('finish', event));
        Tts.addEventListener('tts-cancel', event => console.log('cancel', event));
        
        this.mounted = false;
        this.thisPage = '';
        Tts.speak("어떤걸 배우고싶으세요",{language:"ko"});
    }

    componentDidMount() {
        console.log("componentDidMount");
        this._startRecognition();
        this.mounted= true;
    }

    componentWillUnmount() {
        Voice.destroy().then(Voice.removeAllListeners);
        this.mounted = false;
      }

    onSpeechStartAtStudy(e) {
        console.log("onSpeechStart in study");
        if (this.mounted) { 
            this.setState({
                started: '√',
            });
        };
    }

    onSpeechPartialResultsAtStudy(e) {
        console.log("studypage에서 onspeechpartial");
        let speech = e.value[0].split(" ").slice(-1)[0];
        const {goBack} = this.props.navigation;
        const device_dot = this.props.navigation.getParam('deviceinfo', 'cantread');
        console.log("speech: ", speech);

        if (speech.includes("뒤로")) {
            goBack();
        }
        else if (speech.includes("초성")) {               
            this.props.navigation.navigate('InitialJaum', {deviceinfo2: device_dot});
            this.setState({
                results: '',
            });
        } 
        else if (speech.includes("모음") || speech.includes("무음") || speech.includes("뭐")) {
            this.props.navigation.navigate('Moum', {deviceinfo2: device_dot});
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("거") || speech.includes("약") || speech.includes("거야") || speech.includes("자")) {
            this.props.navigation.navigate('Abbreviation', {deviceinfo2: device_dot});
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("종성")) {
            this.props.navigation.navigate('EndJaum', {deviceinfo2: device_dot});
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("부호")) {
            this.props.navigation.navigate('Punctuation', {deviceinfo2: device_dot});
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("카테고리")) {
            this.props.navigation.navigate('Category', {deviceinfo2: device_dot});
            this.setState({
                results: '',
            });
        }
    }

    async _startRecognition(e) {
        console.log("스터디모드에서 눌렀어~");
        console.log("mounted in study: ", this.mounted);
        this.mounted = true;
        this.thisPage = "StudyPage";
        Voice.onSpeechStart = this.onSpeechStartAtStudy.bind(this);
        Voice.onSpeechPartialResults = this.onSpeechPartialResultsAtStudy.bind(this);
        if (this.mounted) {
            this.setState({
                started: true,
                results: [],
            });
            try {
                await Voice.start('ko-KR');
            } catch (e) {
                console.error(e);
            }
        }
    }

    render() {
        const {goBack} = this.props.navigation;
        const device_dot = this.props.navigation.getParam('deviceinfo', 'cantread');
        console.log("deviceinfo in studypage: ", device_dot.id);
        
        return (
            <View style={ styles.container }>
                <View style={styles.goback}> 
                    <Icon name="md-arrow-round-back" onPress={()=>{goBack(); Tts.speak("뒤로가기", { language: "ko", rate : 0.75 });}} />
                </View>

                <View style={styles.buttons}>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <TouchableOpacity 
                            onPress={()=>{this.props.navigation.navigate('InitialJaum', {deviceinfo2: device_dot}); Tts.stop(); Tts.speak("초성자음 배우기");}} style={styles.button}>
                                <Text style={styles.textInButton}>초성자음</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity 
                            onPress={()=>{this.props.navigation.navigate('Moum', {deviceinfo2: device_dot}); Tts.stop(); Tts.speak("모음 배우기");}} style={styles.button}>
                                <Text style={styles.textInButton}>모음</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity 
                            onPress={()=>{this.props.navigation.navigate('EndJaum', {deviceinfo2: device_dot}); Tts.stop(); Tts.speak("종성자음 배우기");}} style={styles.button}>
                                <Text style={styles.textInButton}>종성자음</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <TouchableOpacity 
                            onPress={()=>{this.props.navigation.navigate('Abbreviation', {deviceinfo2: device_dot}); Tts.stop(); Tts.speak("약어 배우기");}} style={styles.button}>
                                <Text style={styles.textInButton}>약어</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity 
                            onPress={()=>{this.props.navigation.navigate('Category', {deviceinfo2: device_dot}); Tts.stop(); Tts.speak("카테고리로 배우기");}} style={styles.button}>
                                <Text style={styles.textInButton}>카테고리</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

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
        flexDirection:'column',
        flexWrap: 'wrap',
        backgroundColor: '#f5fcff',
        justifyContent: 'space-between'
    },
    button: {
        borderRadius: 30,
        margin: 30,
        height: 120,
        width: 120, 
        backgroundColor: '#22509d',
        justifyContent: 'center',
        alignItems: 'center',
        aspectRatio: 1,
        marginTop: 10,
    },
    buttons: {
        flex: 0.9,
        alignItems: 'center',
        marginTop: 80,
    },
    textInButton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
    },
    goback: {
        flex: 0.1,
        width: 40,
        height: 40,
        marginLeft: 20,
        marginTop: 20,
    },
    sttbutton: {
        borderRadius: 30,
        margin: 30,
        height: 250,
        width: 500, 
        backgroundColor: '#ff9933',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 70
    }
});

export default StudyPage; 