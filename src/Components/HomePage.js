import React, { Component } from 'react';
import { View, Text, StyleSheet, 
    Platform,
    ScrollView,
    Switch,
    SafeAreaView,
    ActivityIndicator,
    Modal} from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import Toast from "@remobile/react-native-toast";
import BluetoothSerial, {
  withSubscription
} from "react-native-bluetooth-serial-next";
import { Buffer } from "buffer";
import Tts from 'react-native-tts';

import Button from "./components/Button";
import DeviceList from "./components/DeviceList";

global.Buffer = Buffer;

const iconv = require("iconv-lite");

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.events = null;
        this.state = {
          isEnabled: false,
          device: null,
          devices: [],
          scanning: false,
          processing: false
        };
    }
    
      async componentDidMount() {
        this.events = this.props.events;
    
        try {
          const [isEnabled, devices] = await Promise.all([
            BluetoothSerial.isEnabled(),
            BluetoothSerial.list()
          ]);
    
          this.setState({
            isEnabled,
            devices: devices.map(device => ({
              ...device,
              paired: true,
              connected: false
            }))
          });
        } catch (e) {
          Toast.showShortBottom(e.message);
        }
    
        this.events.on("bluetoothEnabled", () => {
          Toast.showShortBottom("Bluetooth enabled");
          this.setState({ isEnabled: true });
        });
    
        this.events.on("bluetoothDisabled", () => {
          Toast.showShortBottom("Bluetooth disabled");
          this.setState({ isEnabled: false });
        });
    
        this.events.on("connectionSuccess", ({ device }) => {
          if (device) {
            Toast.showShortBottom(
              `Device ${device.name}<${device.id}> has been connected`
            );
          }
        });
    
        this.events.on("connectionFailed", ({ device }) => {
          if (device) {
            Toast.showShortBottom(
              `Failed to connect with device ${device.name}<${device.id}>`
            );
          }
        });
    
        this.events.on("connectionLost", ({ device }) => {
          if (device) {
            Toast.showShortBottom(
              `Device ${device.name}<${device.id}> connection has been lost`
            );
          }
        });
    
        this.events.on("data", result => {
          if (result) {
            const { id, data } = result;
            console.log(`Data from device ${id} : ${data}`);
          }
        });
    
        this.events.on("error", e => {
          if (e) {
            console.log(`Error: ${e.message}`);
            Toast.showShortBottom(e.message);
          }
        });
      }
    
      requestEnable = () => async () => {
        try {
          await BluetoothSerial.requestEnable();
          this.setState({ isEnabled: true });
        } catch (e) {
          Toast.showShortBottom(e.message);
        }
      };
    
      toggleBluetooth = async value => {
        try {
          if (value) {
            await BluetoothSerial.enable();
          } else {
            await BluetoothSerial.disable();
          }
        } catch (e) {
          Toast.showShortBottom(e.message);
        }
      };
    
      listDevices = async () => {
        try {
          const list = await BluetoothSerial.list();
    
          this.setState(({ devices }) => ({
            devices: devices.map(device => {
              const found = list.find(v => v.id === device.id);
    
              if (found) {
                return {
                  ...found,
                  paired: true,
                  connected: false
                };
              }
    
              return device;
            })
          }));
        } catch (e) {
          Toast.showShortBottom(e.message);
        }
      };
    
      discoverUnpairedDevices = async () => {
        this.setState({ scanning: true });
    
        try {
          const unpairedDevices = await BluetoothSerial.listUnpaired();
    
          this.setState(({ devices }) => ({
            scanning: false,
            devices: devices
              .map(device => {
                const found = unpairedDevices.find(d => d.id === device.id);
    
                if (found) {
                  return {
                    ...device,
                    ...found,
                    connected: false,
                    paired: false
                  };
                }
    
                return device.paired || device.connected ? device : null;
              })
              .map(v => v)
          }));
        } catch (e) {
          Toast.showShortBottom(e.message);
    
          this.setState(({ devices }) => ({
            scanning: false,
            devices: devices.filter(device => device.paired || device.connected)
          }));
        }
      };
    
      cancelDiscovery = () => async () => {
        try {
          await BluetoothSerial.cancelDiscovery();
          this.setState({ scanning: false });
        } catch (e) {
          Toast.showShortBottom(e.message);
        }
      };
    
      toggleDevicePairing = async ({ id, paired }) => {
        if (paired) {
          await this.unpairDevice(id);
        } else {
          await this.pairDevice(id);
        }
      };
    
      pairDevice = async id => {
        this.setState({ processing: true });
    
        try {
          const paired = await BluetoothSerial.pairDevice(id);
    
          if (paired) {
            Toast.showShortBottom(
              `Device ${paired.name}<${paired.id}> paired successfully`
            );
    
            this.setState(({ devices, device }) => ({
              processing: false,
              device: {
                ...device,
                ...paired,
                paired: true
              },
              devices: devices.map(v => {
                if (v.id === paired.id) {
                  return {
                    ...v,
                    ...paired,
                    paired: true
                  };
                }
    
                return v;
              })
            }));
          } else {
            Toast.showShortBottom(`Device <${id}> pairing failed`);
            this.setState({ processing: false });
          }
        } catch (e) {
          Toast.showShortBottom(e.message);
          this.setState({ processing: false });
        }
      };
    
      unpairDevice = async id => {
        this.setState({ processing: true });
    
        try {
          const unpaired = await BluetoothSerial.unpairDevice(id);
    
          if (unpaired) {
            Toast.showShortBottom(
              `Device ${unpaired.name}<${unpaired.id}> unpaired successfully`
            );
    
            this.setState(({ devices, device }) => ({
              processing: false,
              device: {
                ...device,
                ...unpaired,
                connected: false,
                paired: false
              },
              devices: devices.map(v => {
                if (v.id === unpaired.id) {
                  return {
                    ...v,
                    ...unpaired,
                    connected: false,
                    paired: false
                  };
                }
    
                return v;
              })
            }));
          } else {
            Toast.showShortBottom(`Device <${id}> unpairing failed`);
            this.setState({ processing: false });
          }
        } catch (e) {
          Toast.showShortBottom(e.message);
          this.setState({ processing: false });
        }
      };
    
      toggleDeviceConnection = async ({ id, connected }) => {
        if (connected) {
          await this.disconnect(id);
        } else {
          await this.connect(id);
        }
      };
    
      connect = async id => {
        this.setState({ processing: true });
    
        try {
          const connected = await BluetoothSerial.device(id).connect();
    
          if (connected) {
            Toast.showShortBottom(
              `Connected to device ${connected.name}<${connected.id}>`
            );
    
            this.setState(({ devices, device }) => ({
              processing: false,
              device: {
                ...device,
                ...connected,
                connected: true
              },
              devices: devices.map(v => {
                if (v.id === connected.id) {
                  return {
                    ...v,
                    ...connected,
                    connected: true
                  };
                }
    
                return v;
              })
            }));
          } else {
            Toast.showShortBottom(`Failed to connect to device <${id}>`);
            this.setState({ processing: false });
          }
        } catch (e) {
          Toast.showShortBottom(e.message);
          this.setState({ processing: false });
        }
      };
    
      disconnect = async id => {
        this.setState({ processing: true });
    
        try {
          await BluetoothSerial.device(id).disconnect();
    
          this.setState(({ devices, device }) => ({
            processing: false,
            device: {
              ...device,
              connected: false
            },
            devices: devices.map(v => {
              if (v.id === id) {
                return {
                  ...v,
                  connected: false
                };
              }
    
              return v;
            })
          }));
        } catch (e) {
          Toast.showShortBottom(e.message);
          this.setState({ processing: false });
        }
      };
    
      write = async (id, message) => {
        try {
          await BluetoothSerial.device(id).write(message);
          Toast.showShortBottom("Successfuly wrote to device");
        } catch (e) {
          Toast.showShortBottom(e.message);
        }
      };

      writeToDevice = async (id, message) => {
        try {
          await BluetoothSerial.device(id).writeToDevice(message);
          Toast.showShortBottom("Successfuly wrote to device");
        } catch (e) {
          Toast.showShortBottom(e.message);
        }
      };
    
      writePackets = async (id, message, packetSize = 64) => {
        try {
          const device = BluetoothSerial.device(id);
          const toWrite = iconv.encode(message, "cp852");
          const writePromises = [];
          const packetCount = Math.ceil(toWrite.length / packetSize);
    
          for (var i = 0; i < packetCount; i++) {
            const packet = new Buffer(packetSize);
            packet.fill(" ");
            toWrite.copy(packet, 0, i * packetSize, (i + 1) * packetSize);
            writePromises.push(device.write(packet));
          }
    
          await Promise.all(writePromises).then(() =>
            Toast.showShortBottom("Writed packets")
          );
        } catch (e) {
          Toast.showShortBottom(e.message);
        }
      };
    
      renderModal = (device, processing) => {
        if (!device) return null;
    
        const { id, name, paired, connected } = device;
    
        return (
          <Modal
            animationType="fade"
            transparent={false}
            visible={true}
            onRequestClose={() => {}}
          >
            {device ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>{name}</Text>
                <Text style={{ fontSize: 14 }}>{`<${id}>`}</Text>
    
                {processing && (
                  <ActivityIndicator
                    style={{ marginTop: 15 }}
                    size={Platform.OS === "ios" ? 1 : 60}
                  />
                )}
    
                {!processing && (
                  <View style={{ marginTop: 20, width: "50%" }}>
                    {Platform.OS !== "ios" && (
                      <Button
                        title={paired ? "Unpair" : "Pair"}
                        style={{
                          backgroundColor: "#22509d"
                        }}
                        textStyle={{ color: "#fff" }}
                        onPress={() => this.toggleDevicePairing(device)}
                      />
                    )}
                    <Button
                      title={connected ? "Disconnect" : "Connect"}
                      style={{
                        backgroundColor: "#22509d"
                      }}
                      textStyle={{ color: "#fff" }}
                      onPress={() => this.toggleDeviceConnection(device)}
                    />
                    {connected && (
                      <React.Fragment>
                        <Button
                          title="Write"
                          style={{
                            backgroundColor: "#22509d"
                          }}
                          textStyle={{ color: "#fff" }}
                          onPress={() =>
                            this.write(
                              id,
                              "write test!F"
                            )
                          }
                        />
                        <Button
                          title="Write packets"
                          style={{
                            backgroundColor: "#22509d"
                          }}
                          textStyle={{ color: "#fff" }}
                          onPress={() =>
                            this.writePackets(
                              id,
                              "This is the test message!Does it work? Tell me it works!F"
                            )
                          }
                        />
                      </React.Fragment>
                    )}
                    <Button
                      title="Close"
                      onPress={() => this.setState({ device: null })}
                    />
                  </View>
                )}
              </View>
            ) : null}
          </Modal>
        );
      };

    render() {
        const { isEnabled, device, devices, scanning, processing } = this.state;

        return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.topBar}>
            <Text style={styles.heading}>블루투스 연결</Text>
            <View style={styles.enableInfoWrapper}>
                <Text style={{ fontSize: 14, color: "#fff", paddingRight: 10 }}>
                {isEnabled ? "ON" : "OFF"}
                </Text>
                <Switch onValueChange={this.toggleBluetooth} value={isEnabled} />
            </View>
            </View>

            {scanning ? (
            isEnabled && (
                <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}
                >
                <ActivityIndicator
                    style={{ marginBottom: 15 }}
                    size={Platform.OS === "ios" ? 1 : 60}
                />
                <Button
                    textStyle={{ color: "#fff" }}
                    style={styles.buttonRaised}
                    title="Cancel Discovery"
                    onPress={this.cancelDiscovery}
                />
                </View>
            )
            ) : (
            <React.Fragment>
                {this.renderModal(device, processing)}
                <DeviceList
                devices={devices}
                onDevicePressed={device => this.setState({ device })}
                onRefresh={this.listDevices}
                />
            </React.Fragment>
            )}

            <View style={styles.footer}>
                <ScrollView horizontal contentContainerStyle={styles.fixedFooter}>
                    {isEnabled && (
                    <Button
                        title="Discover more"
                        onPress={this.discoverUnpairedDevices}
                    />
                    )}
                    {!isEnabled && (
                    <Button title="Request enable" onPress={this.requestEnable} />
                    )}
                </ScrollView>
            </View>

            <View style={{flexDirection: 'row', backgroundColor: '#22509d', justifyContent: 'center'}}>
                <TouchableOpacity 
                onPress={()=>{this.props.navigation.navigate('Study', {deviceinfo: devices[0]}); Tts.stop(); Tts.speak("스터디모드");}} style={styles.button}>
                <Text style={styles.textInButton}>스터디모드</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=>{this.props.navigation.navigate('JaumQuiz1', {deviceinfo: devices[0]}); Tts.stop(); Tts.speak("퀴즈모드");}} style={styles.button}>
                <Text style={styles.textInButton}>퀴즈모드</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=>{this.props.navigation.navigate('Translate', {deviceinfo: devices[0]}); Tts.stop(); Tts.speak("점자번역모드");}} style={styles.button}>
                <Text style={styles.textInButton}>점자번역모드</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 0.9,
      backgroundColor: "#f5fcff"
    },
    topBar: {
      height: 56,
      paddingHorizontal: 16,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      elevation: 6,
      backgroundColor: "#22509d"
    },
    heading: {
      fontWeight: "bold",
      fontSize: 16,
      alignSelf: "center",
      color: "#fff"
    },
    enableInfoWrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    listContainer: {
      borderColor: "#ccc",
      borderTopWidth: 0.5
    },
    listItem: {
      flex: 1,
      height: "auto",
      paddingHorizontal: 16,
      borderColor: "#ccc",
      borderBottomWidth: 0.5,
      justifyContent: "center",
      paddingTop: 15,
      paddingBottom: 15
    },
    listItemStatus: {
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 2,
      paddingBottom: 2,
      fontWeight: "bold",
      fontSize: 12,
      color: "#fff"
    },
    footer: {
      height: 52,
      borderTopWidth: 1,
      borderTopColor: "#999"
    },
    fixedFooter: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderTopWidth: 1,
      borderTopColor: "#ddd"
    },
    button: {
      height: 36,
      margin: 5,
      paddingHorizontal: 16,
      alignItems: "center",
      justifyContent: "center"
    },
    buttonText: {
      color: "#22509d",
      fontWeight: "bold",
      fontSize: 14
    },
    buttonRaised: {
      backgroundColor: "#22509d",
      borderRadius: 2,
      elevation: 2
    },
    textInButton: {
        color: 'white',
    }
  });