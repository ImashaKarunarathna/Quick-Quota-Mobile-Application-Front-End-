import React, { useState, useEffect } from 'react';
import {SafeAreaView, Text, StyleSheet, ScrollView, Dimensions, Button,ImageBackground,View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const screenWidth = Dimensions.get('window').width;

const Graph = () => {
    const [screenTime, setScreenTime] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = JSON.parse(await AsyncStorage.getItem('screenTimeData')) || [];
            setScreenTime(data);
        };

        fetchData();
    }, []);

    const handleAddSession = async () => {
        const loginTime = new Date(await AsyncStorage.getItem('loginTime'));
        const logoutTime = new Date();
        const screenTimeData = await calculateScreenTime(loginTime, logoutTime);

        const newScreenTime = [...screenTime, screenTimeData];
        setScreenTime(newScreenTime);
        await AsyncStorage.setItem('screenTimeData', JSON.stringify(newScreenTime));
        await AsyncStorage.setItem('loginTime', logoutTime.toString());
    };

    const calculateScreenTime = (loginTime, logoutTime) => {
        const diffInMs = logoutTime - loginTime;
        const diffInHours = diffInMs / (1000 * 60 * 60);
        return diffInHours;
    };

    return (
        
            <SafeAreaView style={styles.container}>
           <ScrollView>
                <Text style={styles.header}>Your Screen Usage Time</Text>


                
                {screenTime.length > 0 ? (
                    <LineChart
                        data={{
                            labels: screenTime.map((_, index) => `Day ${index + 1}`),
                            datasets: [
                                {
                                    data: screenTime,
                                },
                            ],
                        }}
                        width={screenWidth - 40} // Ensure it fits within the screen
                        height={500}
                        yAxisLabel=""
                        yAxisSuffix="h"
                        chartConfig={{
                            backgroundColor: '#022173',
                            backgroundGradientFrom: '#1E2923',
                            backgroundGradientTo: '#08130D',
                            decimalPlaces: 2, // Optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16,
                            },
                            propsForDots: {
                                r: '6',
                                strokeWidth: '2',
                                stroke: '#ffa726',
                            },
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                        }}
                    />
                ) : (
                    <Text style={styles.noDataText}>No screen usage data available.</Text>
                )}
                

                <View style={styles.buttonContainer}>
                    <Button title="Add Session" onPress={handleAddSession}  />
                </View>

                </ScrollView>
            </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
       backgroundColor: '#0B89F1',
    },
    header: {
        fontSize: 22,
        textAlign: 'center',
        margin: 40,
        fontWeight: 'bold',
        color: 'black',
    },
    noDataText: {
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
        color: 'gray',
    },
    
    buttonContainer: {
        margin: 20,
        backgroundColor: '#007BEE',
        borderColor: '#ffffff',
        borderStyle:'solid',
        
    },
    
});

export default Graph;
