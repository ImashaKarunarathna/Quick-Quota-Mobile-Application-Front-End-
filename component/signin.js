import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const baseUrl = 'http://192.168.87.88:8000';

  const handleSignIn = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Network response was not ok');
      }

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setSuccess(data.success);
        setError('');
      }
    } catch (error) {
      console.error("Sign-In Error:", error);
      setError(error.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/login.jpg')} style={styles.backgroundImage}>
        <Text style={styles.a}>Sign In</Text>

        <Text style={styles.l}> Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <Text style={styles.l}> Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}
        {success ? <Text style={styles.success}>{success}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Create Your Account</Text>
        </TouchableOpacity>

      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  input: {
    width: '75%',
    height: 40,
    borderWidth: 1,
    borderColor: '#0000ff',
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 50,
    paddingHorizontal: 10,
  },
  button: {
    width: '60%',
    height: 40,
    backgroundColor: '#00004d',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 80
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  backgroundImage: {
    flex: 1,
    height: 850,
    width: 420,
  },
  a: {
    color: '#00004d',
    fontSize: 32,
    marginTop: 150,
    marginLeft: 150
  },
  l: {
    color: '#00004d',
    marginLeft: 60,
    marginTop: 20
  },
  error: {
    color: 'red',
    marginLeft: 60,
    marginTop: 10,
  },
  success: {
    color: 'green',
    marginLeft: 60,
    marginTop: 10,
  }
});

export default SignIn;
