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

class Sports extends Component {
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
        Tts.speak("스포츠를 말해보세요", {language:"ko"});

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
        console.log('here sports');
        var speech = e.value[0].split(" ").slice(-1)[0];
        console.log(speech);
        const {goBack} = this.props.navigation;
        const device_dot_in_sports = this.props.navigation.getParam('deviceinfo2', 'cantread');

        if (speech.includes("뒤로")) {
            goBack();
        }
        else if (speech.includes("축구")) {
            this.write(device_dot_in_sports.id, "5000011101100100000000100101100F");
            this.setState({
                results: '',
            });
        } 
        else if (speech.includes("야구")) {
            this.write(device_dot_in_sports.id, "3001110000100101100F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("농구")) {
            this.write(device_dot_in_sports.id, "5100100101001011011000100101100F");
            this.setState({
                results: '',
            });
        }
        else if (speech.includes("골프")) {
            this.write(device_dot_in_sports.id, "5000100101001010000100110010101F");
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
        const device_dot_in_sports = this.props.navigation.getParam('deviceinfo2', 'cantread');
        console.log("device info in sports: ", device_dot_in_sports.id);

        return (
            <View style={styles.container}>
                <View style={styles.goback}> 
                    <Icon name="md-arrow-round-back" onPress={()=>{goBack(); Tts.speak("뒤로가기", { language: 'ko', rate: 0.75 });}}/>
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                    <View style={styles.card}>
                        <Image source={{uri: 'https://static1.squarespace.com/static/5a2edf83cd39c395cfd435aa/t/5a67608a53450a2008b64cf7/1516724370871/icon-sports-soccer.png'}} style={styles.img}></Image>
                        <TouchableOpacity onPress={()=>{Tts.speak("축구", { language: 'ko', rate: 0.75 }); this.write(device_dot_in_sports.id, "5000011101100100000000100101100F");}} style={styles.button}>
                            <Text style={styles.text}>축구</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <Image source={{uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEBAQEBIWEBAVGRAQGBAVFRAYFhUSGBUWFxUXFhcZHSkgGh0mGxYXIjEiKCkrLi4wFx8zODMsOSgtLisBCgoKDg0OGxAQGy8gHSUvLTUrLSs3Ky01MDctLi8tKy8tLTctLS01Ly0uLSs1LS0tNy0rKystNS0vLTAuLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwQCBQYHAQj/xAA9EAACAgECAwUFBgQGAgMBAAABAgADEQQhBRIxBhNBUWEiMnGBkQcUI0JSwWJyobEkM4LR4fCiwlNjkhX/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIEAwX/xAAwEQEBAAIBAwEHAwEJAAAAAAAAAQIRAyExQRIEMmFxscHwUYGhkRMiIzNygpLR8f/aAAwDAQACEQMRAD8A9xiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiYWWKu5OIGcSlZr/0jPqZXfVWHxx8JGxtZiXA8RNM2T1JPxJmBrjY3gceY+olJeN6Q29wNRSb847nva+fPly5zn0nLdrbUr0titbXT3mag1hI94b8uFYlsZwMGeXWcO06p3SOlrbYC/eKbfAAotyiuz+UcrHwlMs9Nfs/s85Zbdv0TE/N9VOsvDXMb7mUlRY4sZwV6hS7c4I6YXOJ6T9nXbO62h6tUGteluTvfZ5ivgG33YdMkA9M5OTJxz3dI5fZvRhM5lv8AX4PR4lXScQqt9xgT+k7H6GWpdlIiICIiAiIgIiICIiAiIgIiICIiAnxmAGTsPOYX3Kgy308T8Jqbr2sO+w8FkC1fr87J/wDo/sJVOTudz5wBMgJA+AT7iZAT7iBhiMSTlnzEDXcWvvrTOno+8WEgcpsSsD+IlvAeQ3nJ8b0XFrq2FyaPUA5P3Qc/Nj+BmwQ3qGHpOt41oHvr5E1FmlGcs9XJzFcbjmYHl+I32nE6nsvwUcyWa38bxsbUUFw3m3s4z8RKZtnstxnz+W/vP46uS4XpFutvpXQXam1cMwe6xHpGMcrbAHfOCwyRjY7mbnsge71llL/huU/yb0xqFAOwSzlHeJsdsDoCBsSftnB9XRdU2n4lW+nt/wAP97DczVrhnVXwSOXK7EMNz4Z3t8L12p+9V1WXafiVeSFvV6e+qyN2UNgkeYUt16+ErJq/+NHJl6sMsZdyf6vv0/bo6Z1xNjoOP2V4Wz8RPP8AMPn4/P6yrYsq2LOry3c6TVpcvNWwYf1B8iPCTzzzT6p6W56zyn+hHkR4idjwfi6alf02Dqn7jzEnY2UREkIiICIiAiIgIiICIiAkd9wRSzdP7nyEzJxOf1ur719vcGwH7wMrLmsbmb5DyEkUSKoScSo+gTMCfBM1EkAJkFmQEyAgYcs+FZLifCIFPWaRLq3qsHMjgqy7jIPqJxfEeDdn9M3JcK0cYBTvtSzDbbKq5I+k74iaXX9ntA7Pddp6GY4LWWInw3Jlco68WfpvW2T4PO+J9neDXo50es7m3lblraz2XbGynvhzDJ22Pj0MqcU1PAjXUla3028qN3tLHmRsAkN3r+0QfEDw2M6zXcN7P2+wW0yHzquWvB+KMAfnmayviWl4KLdMlf3oWsttLg1k2q45Stlij2irrgAAkh12nPXTw3TO+qe/b4luv5dBwnW1ailWqt78ABS5wG5sfnUAYPyklqzn+CcaC2923DLNF3pzzpS4Utjq/wCGv136zpLROku4w8uFwy1/1foo2CQJa1bB0JVhuCJatEqWiS5O64FxddUn6bFwGX9x6GbOeYaPWPp7FtTqPDwYeKn0M9H0GrS+tbUPssM+oPiD6g7SYLEREkIiICIiAiIgIia3tBxqrQ0G+7JGQqooyzuc4VR5nB+hPhFuk443K6jDjur5QKx1bc/y/wDP7GaqkTk9F2vs1btY1S1LnvHdnPLXpxsCTge0cYUeOC2wIzveCcWXUo9gR66lOBZYOVbFxnnXO/L6nEp6pV8+LPDvG8rkqyvpLksUOjB0O4ZSCD8CJYWS5s1kiiYLJFkjMCZgTESQQGJiRJJgZIjIlDi/C6dXWab07yskNyksNx0OVIM2BkbSCXXWOS1fYzhKDNlK1g+LXXL9CXmlbsxpNHYnENDabe4PeNRz1Wg1EFbShxzBgjMRuek6DinYnQ6m577ldrGxk97YAMDoADsJrNZ9muicfhNdQw3DK4bf1Dg/0InOzr2jXjy43HWWeXXv5n1atu22s1bFtHojbQpI5uWxif8AWCFB9N8To9Na71o9iGpyMmskHlPlmaJ+Nngen+5Wjv7VP+HYLyLZW5J9oDOCr5BAyTlfMkT8Eo4gWN2scIrD2dOABy+Wf0/DJPnEuro5MZlj6sZMZO3fdbG0SpbLlsp2y7IqWzddjeKd1b3DH2LOnpZ4fUbfECaW2VmYggg4I3BHgR0MD1+JR4LrhqKK7fEjDDycbN/UGXpYIiICIiAiIgJ579tFqDSUAvizvSVTxZTTYjHHkOcZPhn1noU8Y+1EseJMtmTldL3fl3ZF3s/OxD8dpTk7NPsk/wATe9aarg+ur1NtNDYCW6my51OABVVTX3KN5gkYA9Jur76dVqtc+sYnR6LkUU5IVrCzKMgH2iWQ4HqB0mi7MvTjUXWItncaZHrrcAqXsUsWweuTn5NI7eCE6bR01MzanXOLynMFq7tQeTmAGccrFiR0w3kJy8N+U1l0vw+9v/HU27Dg2p4pqalbR16bRaTH4QdXLFPAgDbHU5wM+uczcDtlo1uq03eG+5itZNS5Tn2BOc4xnyzicz2x4nqO803DXanQ1WYD3LYOQ17hVAOGRcLjlI3OBnAObVvEqNC66HhWnXUaw7NZsxBA3Lvtk777hVz8pbemW8czm9at7SdJJ+tr0ISRZy3Zfh3EUtsu12pFgZcChMlVOQc+6AMDbYfOb9NfSXFYtQ2HOEDoWOOu2czpKx5Y6upd/JeBmYMiBmQMlVJmfCZjmfCYAmRtMiZGxgVtfU71utb905BAsABKnzwes4m/7Oza3NdrrrX6lmUHfxxljgenhO8JnM9rL+IkpRoKwOYEtqSyAJ/CAeh9cE+Q8RXKS93bgzzxy1jl6d+XOXditfp7ab6b11gofvVptDqQPzBMll5iNs+zvg+Erce4/bxHULo9EcIVDMx2J9kFufxVVyFI6k5HlLK9gtZaObUa88/UgC23B/mZ1/tIqOF//wAH7xqrWOqSxeXvBWVZbFJKq3tNs5PveBUecpq612aryYzL1eqZ5eOmmzoarSrTpmsy+MLzdW+XgMya2cx2Y0dupZuJarYHLJnbI/WB4IBsv18idjwfjI1YtITkCMFBznIIyPgfT1lpWfm4tW3G713vxq3bKlks2GVbDLM7rvs81u91B9LVH0V//SdpPLeyep7vW0nwYms/6gQP/LlnqUmBERJCIiAiIgJ572u5bNW4YA8nd4z4EKCD9WM9Cnm/aBv8Xf8AzfsJFGmq4LSot5By95WtBAOwRVKrj1wevoJhouGXUX8Netg66dLKXY7bd2yqQPUsZskMnRpXUdJyZTz+a01/CNdUOI8V1OpGWqrqKgjOKyjcwXPTKoo/1HzkPYTTaitNTxJBRXTaxJ05VawUQnmKW9KwDkAEcp5TnGcyzxvSc2n1JqTmusQLtjmfHugn5n6zT8YS3uuHcKD4DCs2Yx1HvH1xixsdMgeUpejXhlOWa7b1v4TGJhxDXcfusqpP3bRocOfDB6B8H8RyN+XPKPoTvdF2e4XwixL7rz3yhiveMM7jBK1IMnY48esw7R36LhmmrOmJ094VkqNaoSR+Y3htnXJyS2+dx4zT9h+y9etFmp17PZcTk6du9RgD7tlhOHbmA2x7OMjfGA116dat694bytxw8SeXoHCO0uj1bFKLg7gc3Ly2KceeGAzNuGmk0fCNDoSbUrq05xymwkDby5mMuaXiuntIWq+qwnJASytiQOpABnSX9WHOTe8JdfFsOafC0jzGZKjImYEwTMSZAEyNjPpMhseByfalOK22mvSMlNAA/EL8rMT1BIBYY9APjNLp/s/axg+u1TXH9Cc3zBscliPgBO7tecHxPhXFdU7Cy+uirJ9lWsxjw9hQOb5tKWee7Xw8uWvT6pjP5qv2u4pela8PQG25z3Ydce3UOgOPdbwboMKTsDtQ4oTwvSV0o+b3JsdgASxxvjPryqPMLNxo+ymn0S9617d8Ol7MERD6IDgg9CCTsTNLodP971d2r1Loa6DsitldhlW9EA3Hmc+W8VfC4yanXGfzfDoE1HRGI70KrMo8CRv/AFzMLDOb4drmdtXrSPZGEUHxO23yHL9TN3p9R3laP05lDY+MtLtn5eK4X8766ptLdyW1P+l63+jA/tPZ54g289uQ5APwl44vsREkIiICIiAnmvaQY1l4/iB+qqf3npU887a1curY/rVH/uv/AKyKNWjSwjSkjSdGkC6jSu3DkbU16ok86I1YXbG5PteecEj5zJGkytITLZ2aHhaDU8WvudRZXpu7VQRt3mPZ9Dynnb0JUy92m7W896V8Pqe/WJzAWqMjlPvoVx7a5xnOFBAIO0ua4uKbe6H4hV+XGB7ZGAfrOa4frzwWg+yray4cxB3WtBsgJG5A32zuS2+wlL0beLXL3m7NST71teB9kDrV+88S1Fl1wLK1OeUUsMcyMT0I2Ps8q7gjIIM3vBuznC9Pctmn5TcucHv3cgkEE8pcgHBI6eM5Kzszr9XjWcRsK0Hld6U5Rb3Q6OVC8g5Qc43blB8cCdHZ9nfDWUYWwfxLa5z675H0iTzIZ8k93Lkv+3t9Y7HmjM1HZ/g9Whp7mkuyZLZdgTk/AAD6TYmydGK630SkzAtI2skT2QhI9krWWTF7JXssgLHmv17Wcj90QLMHlLdObwzJ7HlWx4S49uy11zc+s1JPmEyT8nbZR6BZQ41doa6W02lUlz7PPWTkk42LbmzOBtuNvCdPxvRHUJ3YsNa59rAzzDymjsfR8Ozgc92OpOX39eiD4f1nOzTbhy3k65byviTpGs4lkV6Xh9SNWzYLhsZA6sxI2P5m28h8JkdYtdt1igmqsJSBnbwH0HKfqPOfU+8WFtVqHalFDcqjZjkYACnoOnXc7fGa/TgGvT1e5WWfUW2MV9oIT4dcYXHy9IdJqTV6zz9b9JHXUe1nG/5fn5fGe2AT83cD11q3UunSyzvDWfFCxx8zydfh5z9JS+N2x83FeOkREu4kREBERATjftC0+1Fo82rPz9pf7NOymr7S6Hv9LagGWA51/mXcAfHGPnA8yRpMrSojSVWlRcVpMrykrSVXgXFeUbuD02ahdS+XZQvKh90EdDjxIO49flJ1eLRzqy5IyCMjYjPlIWxys7XSHVdtrEYabR0/erRkc3tMB6BV3YDxOQBNNw7s3rtU7Jrrn0iAc1elUq690DgivFhVApIGCCQCsnbiFHCwBSvNacEgncjzdvLyA/p1lTVavjmpAtRO6RA7g4rQ4KkEKGy5yPl0PUAzn3ur1b9XHH1ccmM/W9629XYe7TOr6PWNXuMhk6jxzykA/Aidp3k4DQdjnsQPqdU7WEBvwySBkfrfJb44E3XBOEtpWcnUWXKQAEfovr16/SWx6eHHnuOfW5+q/L7uia2RNZK5tkbWy7ImeyQPZI2skD2QM7LJWsefHsld3gLHlC6mvmNnIpsx72BzfAGT2PK9jwnbm+Js9i8+pbuaQcise+3oPX1P0Er0VELbqbECIV7mqojblOANj4AD57mdHZpUsKl1DcpyM74MranQWs7Wth8bVr+VB4uw8SPIZycTnZpt4+aZWS9J+dJ8/NrP7POGDUcSpVwT3YFrDy7oLy/AB+QY9T5z3icT9l3BRRp31DAiy4gDm94VrnAPqWLE+vwE7aX45qdXL2rkxyz1j2hERLsxERAREQEREDyztVw77tqXAGK3/ETywTuPkcj4YmrVp6Z2t4P97oIUfipl09fNfmP6gTy0NK0W1aSK8qK0kDQLYeZh5UDzMPAp8RfTaZu/sTNjHZsZOQPDJwPjKp7T6/UqK9FQQOnfdRj+dsIP6mbfmmpt7UmtmrrostfpjDdR44UE4+kpejXxZXKe76rPNvb9kel4dxaoclWoTK8oKMzEDKgjk5kI5d8eG6mXNDpeLixTdqauQEFlG5I8R/lj+81pPFWbv8rW7eyKeZRkLkgEYKjq2MnPXcSUa7jDjHcV1/xlk/Zm/tIn7r522e9jfz5OyNswaya/SPYK070qbMDmK+7n0mZsnRiWGskL2SFrJE1kISvZIHeYM8hd4GTvIgMz6qkyzVVICmubPh+jax0RerED/c/Ib/KQ01TtOyXDORTew3bZfRfE/P8A71juN/p6RWiovuqAo+AkkRLhERAREQEREBERATgu3PZ/lY6qoey29ijwb9fwPj67+Jx3s+OoIIIyDkEHoR4gwPEc4mYedP2p7MnTk21DNB8PGs+R/h8j8j68w1UqMw8yDyDBEc0CyHlDWcbND8opssP8IYg/DAMnDzW8TN3Ovc3JWce4xAz6jY5lb2deGY3L+9/O/s+NrNdqCrcn3atSpBYe1zN7I2O/5j1AGM9Z9s1/E19nuEf/AOwMmD/5D+wlHUrrME26hFUb4D4JI3AACjMyp1vEAMKiXr4WBqyD8CGGfmJX+rVda6ej8+Lf8Mt1BU/eAgbOwQ52x4y0bJquHPqMMb+XJOwXwHr/ANMtF5eMWfvX7J2skbWSPczJapKrEtmZpXJkplmumQIaqpcqpktVM2/CeFNc2Bso6t5f8yBlwHhJufJ/y194+f8ACJ26gAADYDbEj02nWpQiDCj/ALkyWXk0EREkIiICIiAiIgIiICIiB8ZQQQRkHYg9CJxnH+yeM2aYZHU1eI/k8x6fTynaRGh489HpImpnqfFeB06jcjls/wDkXr8x4zkeI9m7qcnl7xP1Lv8AUdRKaHLmmaHtFoamZTZVY+xHeJ4DPQjGPrOwNE1vGqgqqxNq4PWrw2/N6StvR24P8yOKp0mjGeSq52GccwGAfM8vl6y9Tw3SOxNdtmmbfmRXCb+PXP0Bl27VIysF1F1hw3s8g8vzHHTzkwqFvtMun1XgHJFb4/iBG0pMm/Pjy73c/r95J9E/C+H11qe7drATksz8+/7TYLTMuE6BUQ4pFBJyVUhs+RyJsVonTbzc/eqitMmSiXFok6aeNqKddEtV0TZ6LhVlvurt+o7D6+PynRaDgddeC/tt6+6Pl4/OJLRpuE8Da3DN7Ffn4n4f7zqqKVrUKg5VHhJIl5NBERJCIiAiIgIiICIiAiIgIiICIiAiIgU9Xwym3d0BP6hsfqJoeK9iKbwBzsuDzA5OQfMFcY/rOqiRZKmWy7jzXW/Z5qMfh6mxzlMB7SVADAklSo5sDOxMrt2F1rsDatDbjJFNRZx45Jbb6T1KJX+zjtPaOSefo4qvs9eAAK8AbAc1eAPrLFfZ249eVfif9gZ1sSfTHBz9HZsfnf5KP3P+02Wm4TTX0XmPm2//ABL0SdQIiJIREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/9k='}} style={styles.img}></Image>
                        <TouchableOpacity onPress={()=>{Tts.speak("야구", { language: 'ko', rate: 0.75 }); this.write(device_dot_in_sports.id, "3001110000100101100F");}} style={styles.button}>
                            <Text style={styles.text}>야구</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <Image source={{uri: 'data:image/jpeg;base64,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'}} style={styles.img}></Image>
                        <TouchableOpacity onPress={()=>{Tts.speak("농구", { language: 'ko', rate: 0.75 }); this.write(device_dot_in_sports.id, "5100100101001011011000100101100F");}} style={styles.button}>
                            <Text style={styles.text}>농구</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <Image source={{uri: 'http://pngimg.com/uploads/golf/golf_PNG33.png'}} style={styles.img}></Image>
                        <TouchableOpacity onPress={()=>{Tts.speak("골프", { language: 'ko', rate: 0.75 }); this.write(device_dot_in_sports.id, "5000100101001010000100110010101F");}} style={styles.button}>
                            <Text style={styles.text}>골프</Text>
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

export default Sports; 