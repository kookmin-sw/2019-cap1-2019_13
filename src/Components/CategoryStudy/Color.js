import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import { Icon } from 'native-base';
import Tts from 'react-native-tts';
import Toast from "@remobile/react-native-toast";
import BluetoothSerial, {
    withSubscription
} from "react-native-bluetooth-serial-next";


const SCREEN_WIDTH = Dimensions.get('window').width;

class Color extends Component {
    state = {
        screenWidth: 0,
    };

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
        const device_dot_in_color = this.props.navigation.getParam('deviceinfo2', 'cantread');
        console.log("device info in color: ", device_dot_in_color.id);

        return (
            <View style={styles.container}>
                <View style={styles.goback}> 
                    <Icon name="md-arrow-round-back" onPress={()=>{goBack(); Tts.speak('뒤로가기', { language: 'ko', rate: 0.75 });}}/>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                    <View style={styles.card}>
                        <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Red.svg/2000px-Red.svg.png'}} style={styles.img}></Image>
                        <TouchableOpacity onPress={()=>{Tts.speak("빨강", { language: 'ko', rate: 0.75 }); this.write(device_dot_in_color.id, "7000001000110110001010000000100110001011011F");}} style={styles.button}>
                            <Text style={styles.text}>빨강</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <Image source={{uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExIVFRUVFxgVFxcYFxgXFxcXFxcXFxcaFxUYHSggGBolHRcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NFQ8PFS0dFR0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIG/8QAJxABAQEAAQAJBQEBAAAAAAAAAAER8AIhMUFhgZHB0RJRcbHhofH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQb/xAAXEQEBAQEAAAAAAAAAAAAAAAAAAUEx/9oADAMBAAIRAxEAPwDsU0GDaNQ0ASkMFVC1QKFBAKgAqCrKkACKiiIuCABQUUSCKioKpUxdBPP/AGB1gEqiQRakVIKtgQogABKJQVcRU0RUimCk+yRTRChPBBSwXEANADRUEFxAVdRUBd8A9f8AARIqQFF0QRaaAEMgARKsASLogKGGggqQUwqgIvgGCFqYFFFogClQQUSQVrr8fQZ+qfYBeftFw0QEBVDUggoaCVTDRRKUwFSwigipq4IgUFUNQQiyeBIgoYZznkABQBUUROtU52gqliKIixFFKFSCKYRAXCgBaaEBIqYCrqYumKIaaVAxaSpgiwiAqoKAJSAl/C4AHX9hd8aARLSGiFikiaC6ki/oBKqAKHwgEUJAQFFE1QRAxRUWnOeoIJilgCLEAVCir3pi4gLkDYCGgAgLgoFQRTUUEFoKQIaIAmihFNEKkhP6oBUq4CKiioKAIALhU0A8pzyF+nnWCAYAEpbz+mARDQVTpBBEBQSwDRV5z1EiiCEBVqKgClIIkMFFSLogALO0CoaYCYGwBoEEDyAUihBAkNARcQwUipqgRBaBUVABUAi0oIRBRTEhYQFQAOc53AAvlVTZy/wVA6KYIooWiG6RIugQSrAAqClLSKCAoJQMBUVKCmkMESRediAoqALEwiiIShaKZzlD6QFvgRFESrSkADEBYkUoBQoJVEFFqYoJAxaCGgChEEXEFBFQFD/hvUAKmGAg16AEAESc56AaKqCwQ3TEUCVFBTA1BFABItqWrBUVKcgGEIoJiwhAQCgLTYgCooMi/XzrUBAoipikBFMKAuogKSCClFw0CAlVFglWoohhAW9SathRAQsFBdQAIQCKUEPQZ5zrBWiUBEVFgIpgKFJEggLKmilXAwQgi4CUFFElC0FlRcSgKkUCgghoEFFKgG+Iu+FBEhz9gK10GOl8gJOt9Pt54J0+3zBSJOesXo/AC06ff+Do+4ImHffynx7gKs7kvZ6AC1mAqRro9jM7fL3BFb+fZm89QAny1Ozy9gCs1b2qAnS7k+PagCX2WgDAAr//2Q=='}} style={styles.img}></Image>
                        <TouchableOpacity onPress={()=>{Tts.speak("노랑", { language: 'ko', rate: 0.75 }); this.write(device_dot_in_color.id, "5100100101001000010110001011011F");}} style={styles.button}>
                            <Text style={styles.text}>노랑</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <Image source={{uri: 'http://www.vonkietzell-spinnler.de/wp-content/uploads/2015/05/green-1.png'}} style={styles.img}></Image>
                        <TouchableOpacity onPress={()=>{Tts.speak("초록", { language: 'ko', rate: 0.75 }); this.write(device_dot_in_color.id, "5000011101001000010101001100000F");}} style={styles.button}>
                            <Text style={styles.text}>초록</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Solid_blue.svg/2000px-Solid_blue.svg.png'}} style={styles.img}></Image>
                        <TouchableOpacity onPress={()=>{Tts.speak("파랑", { language: 'ko', rate: 0.75 }); this.write(device_dot_in_color.id, "5100110110001000010110001011011F");}} style={styles.button}>
                            <Text style={styles.text}>파랑</Text>
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
});

export default Color; 