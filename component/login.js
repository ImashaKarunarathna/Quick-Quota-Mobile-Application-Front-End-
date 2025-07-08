// Login.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const handleSignIn = async () => {
    const baseUrl = 'http://192.168.87.88:8000';

    try {
      const response = await fetch(`${baseUrl}/api/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      if (data.access && data.refresh) {
        await AsyncStorage.setItem('access_token', data.access);
        await AsyncStorage.setItem('refresh_token', data.refresh);

        navigation.navigate('Profile', { username });
      } else {
        setError(data.error || 'Invalid credentials.');
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/login.jpg')} style={styles.backgroundImage}>
        <Text style={styles.heading}>Log In</Text>

        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <Text>or</Text>
        
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Continue With Google</Text>
        </TouchableOpacity>

      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 32,
    color: '#00004d',
    marginBottom: 20,
  },
  label: {
    color: '#00004d',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#0000ff',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#00004d',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  error: {
    color: 'red',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 10,
  },
});

export default Login;
