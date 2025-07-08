import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, Modal,Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Audio } from 'expo-av';
import { Asset } from 'expo-asset';

const Timer = () => {
    const [timeValue, setTimeValue] = useState('');
    const [timeUnit, setTimeUnit] = useState('seconds');
    const [remainingTime, setRemainingTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const intervalRef = useRef(null);
    const soundRef = useRef(null);

    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        { label: 'Seconds', value: 'seconds' },
        { label: 'Minutes', value: 'minutes' },
        { label: 'Hours', value: 'hours' }
    ]);

    useEffect(() => {
        if (isRunning && remainingTime > 0) {
            intervalRef.current = setInterval(() => {
                setRemainingTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (remainingTime === 0 && isRunning) {
            clearInterval(intervalRef.current);
            playSound();
            setIsRunning(false);
            setIsModalVisible(true);  // Show the custom modal
        }

        return () => clearInterval(intervalRef.current);
    }, [isRunning, remainingTime]);

    const playSound = async () => {
        console.log('Playing sound...');
        try {
            const asset = Asset.fromModule(require('../assets/song.mp3'));
            await asset.downloadAsync();
            const { sound } = await Audio.Sound.createAsync(
                { uri: asset.localUri }
            );
            soundRef.current = sound;
            await soundRef.current.playAsync();
        } catch (error) {
            console.error('Error playing sound:', error);
        }
    };

    const handleSetTime = () => {
        let timeInSeconds = parseFloat(timeValue);
        if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
            Alert.alert('Please enter a valid time value.');
            return;
        }

        switch (timeUnit) {
            case 'minutes':
                timeInSeconds *= 60;
                break;
            case 'hours':
                timeInSeconds *= 3600;
                break;
            default:
                break;
        }

        setRemainingTime(timeInSeconds);
        setIsRunning(true);
    };

    const handleReset = () => {
        setTimeValue('');
        setRemainingTime(0);
        setIsRunning(false);
        clearInterval(intervalRef.current);
        if (soundRef.current) {
            soundRef.current.unloadAsync();
        }
    };

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    useEffect(() => {
        return () => {
            if (soundRef.current) {
                soundRef.current.unloadAsync();
            }
        };
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/profile.jpg')} style={styles.backgroundImage}>
                <ScrollView>
                    <Text style={styles.heading}>Timer</Text>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter time"
                            keyboardType="numeric"
                            placeholderTextColor="#888"
                            value={timeValue}
                            onChangeText={setTimeValue}
                        />
                        <DropDownPicker
                            open={open}
                            value={timeUnit}
                            items={items}
                            setOpen={setOpen}
                            setValue={setTimeUnit}
                            setItems={setItems}
                            style={styles.dropdown}
                            containerStyle={styles.dropdownContainer}
                            dropDownContainerStyle={styles.dropdownMenu}
                            placeholder=""
                        />
                    </View>

                    <Text style={styles.timeDisplay}>{formatTime(remainingTime)}</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button1} onPress={handleSetTime}>
                            <Text style={styles.buttonText}>Set</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button2} onPress={handleReset}>
                            <Text style={styles.buttonText}>Reset</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>

            <Modal
                transparent={true}
                visible={isModalVisible}
                animationType="slide"
                onRequestClose={() => setIsModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Time is up!</Text>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setIsModalVisible(false)}
                        >
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 36,
        color: '#4d4dff',
        marginBottom: 20,
        marginLeft: '40%',
        marginTop: 40,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: '15%',
        marginTop: 20,
    },
    input: {
        height: 40,
        borderColor: '#4d4dff',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 10,
        width: 150,
        fontSize: 16,
        textAlign: 'center',
        color: '#ffffff',
    },
    dropdown: {
        borderColor: '#4d4dff',
        backgroundColor: '#4d4dff', // Change background color of the picker
    },
    dropdownContainer: {
        width: 150,
        backgroundColor: '#030D46', 
        color:'#ffffff'// Change background color of the picker container
    },
    dropdownMenu: {
        backgroundColor: '#4d4dff', // Change background color of the dropdown menu
    },
    timeDisplay: {
        fontSize: 60,
        color: '#ffffff',
        margin: 20,
        left:'30%'

    },
    buttonContainer: {
        justifyContent:'center',
        alignItems:'center'
    },
    button1: {
        backgroundColor: '#4d4dff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical:20,
       borderColor:'#ffffff',
       borderStyle:'dotted',
       borderWidth:2
        
    },
    button2: {
        backgroundColor: '#4d4dff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical:20,
        borderColor:'#ffffff',
        borderStyle:'dotted',
        borderWidth:2

        
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark background with transparency
    },
    modalContent: {
        backgroundColor: '#4d4dff', // Background color of the modal
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 24,
        color: '#ffffff', // Text color inside the modal
        marginBottom: 15,
    },
    closeButton: {
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    closeButtonText: {
        color: '#4d4dff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Timer;
