import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,ImageBackground, ScrollView} from 'react-native';

const Report1 = ({ route, navigation }) => {
    const { screenTime } = route.params;
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/1.jpg')} style={styles.backgroundImage}> 
            <ScrollView>
            <Text style={styles.text}>Your Screen Usage Time is less than 3 hours</Text>
            <Text style={styles.text}>Screen Usage: {screenTime.toFixed(2)} hours</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Go to Home</Text>
            </TouchableOpacity>
            </ScrollView>

            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        paddingHorizontal:50,
        paddingVertical:200,
        
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 25,
        color:'#ffffff'
    },
    button: {
        marginTop: 20,
        margin:40,
        padding: 10,
        backgroundColor: '#0FE5DC',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        alignItems:'center'
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:'#ffffff',
        borderWidth:2,
        
        },
});

export default Report1;
