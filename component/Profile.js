import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, Text, StyleSheet, Image, Animated, ScrollView ,ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({ route, navigation }) => {
    const { username } = route.params;
    const [scaleValue] = useState(new Animated.Value(1));
    const slideAnim = useRef(new Animated.Value(-100)).current;

    useEffect(() => {
        const zoomIn = () => {
            Animated.sequence([
                Animated.timing(scaleValue, {
                    toValue: 1.2,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(scaleValue, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ]).start(() => zoomIn());
        };

        zoomIn();

        Animated.sequence([
            Animated.timing(slideAnim, {
                toValue: 100,
                duration: 1500,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: -100,
                duration: 1500,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 1500,
                useNativeDriver: true,
            }),
        ]).start();
    }, [scaleValue, slideAnim]);

    useEffect(() => {
        const loginTime = new Date();
        AsyncStorage.setItem('loginTime', loginTime.toString());
    }, []);

    const calculateScreenTime = async (loginTime, logoutTime) => {
        const diffInMs = logoutTime - loginTime;
        const diffInHours = diffInMs / (1000 * 60 * 60);
        return diffInHours;
    };

    const handleLogout = async () => {
        const logoutTime = new Date();
        const loginTime = new Date(await AsyncStorage.getItem('loginTime'));
        const screenTime = await calculateScreenTime(loginTime, logoutTime);
        await AsyncStorage.setItem('screenUsageTime', screenTime.toString());

        let screenTimeData = JSON.parse(await AsyncStorage.getItem('screenTimeData')) || [];
        screenTimeData.push(screenTime);
        await AsyncStorage.setItem('screenTimeData', JSON.stringify(screenTimeData));

        if (screenTime < 3) {
            navigation.navigate('Report1', { screenTime });
        } else if (screenTime < 5) {
            navigation.navigate('Report2', { screenTime });
        } else {
            navigation.navigate('Report3', { screenTime });
        }
    };

    const handleCheckProgress = () => {
        navigation.navigate('Graph');
    };

    const handleSetTime = () => {
        navigation.navigate('Timer');
    };

    const handleLogOut = () => {
        navigation.navigate('Home');
    };

    return (
        <SafeAreaView style={styles.container}>

              <ImageBackground source={require('../assets/profile.jpg')} style={styles.backgroundImage}> 


              <Text style={styles.linkText1} onPress={handleCheckProgress}>
                    Check Your Progress - - - -
                </Text>

            <Animated.Image
                source={require('../assets/logo.png')}
                style={[styles.logo, { transform: [{ scale: scaleValue }] }]}
            />
            <Animated.Text style={[styles.welcomeText, { transform: [{ translateX: slideAnim }] }]}>
                Hello {username},
                 Welcome To Quick Quota
            </Animated.Text>

            <ScrollView contentContainerStyle={styles.scrollView}>
                
                <Text style={styles.settime} onPress={handleSetTime}>
                    Set Time
                </Text>

                <Text style={styles.linkText2} onPress={handleLogout}>
                    - - - - Log Out
                </Text>
            </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:'100%',
        backgroundColor: '#f0f8ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
        marginTop:60,
    },
    scrollView: {
        alignItems: 'center',
    },
    linkText1: {
        color: '#ffffff',
        fontSize: 20,
        marginVertical: 20,
        marginLeft:100,
        
        
    },
    linkText2: {
        color: '#ffffff',
        fontSize: 20,
        marginVertical: 20,
        marginRight:230,
        marginTop:160,
    },

    settime:{
        color: '#ffffff',
        fontSize: 26,
        marginVertical: 20,
        textShadowColor: '#111FBF',
        borderBottomWidth:5,
        borderTopWidth:5,
        borderLeftWidth:5,
        borderRightWidth:5,
        borderColor:'#ffffff',
        borderStyle:'dotted',
        padding:15,
        
        

    },

    welcomeText: {
        color: '#ffd700',
        fontSize: 32,
        fontStyle:'italic',
        textShadowColor: '#000',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 1,
        textAlign: 'center',
        marginTop: 20,
        marginBottom:20
    },
    backgroundImage: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    
    },
});

export default Profile;
