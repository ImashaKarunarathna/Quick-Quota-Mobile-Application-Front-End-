

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet ,ImageBackground} from 'react-native';
import Link from './link';

const Frogot = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Here you can implement your sign-in logic using email and password
    console.log('Signing in with:', email, password);
  };

  const handleGoogleSignIn = () => {
    // Here you can implement sign-in using Google account
    console.log('Signing in with Google');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/login.jpg')} style={styles.backgroundImage}>
        
      <Text style={styles.m}> Frogot Password</Text>
      
            <Text style={styles.l}> Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.l}>New Password</Text>

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

     <Text style={styles.l}>Confirm Password</Text>
     <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />


      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Submit</Text>
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
  input: {
    width: '75%',
    height: 40,
    borderWidth: 1,
    borderColor: '#0000ff',
    borderRadius: 5,
    marginBottom: 10,
    marginTop:10,
    marginLeft:50,
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
    marginTop:30,
    marginLeft:80
  },
  googleButton: {
    width: '60%',
    height: 40,
    backgroundColor: '#00004d',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 10,
    marginTop:10,
    marginLeft:80
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  backgroundImage:{
     flex:1,
     height:850,
     width: 420,

  },
  
  l:{
    color:'#00004d',
    marginLeft:60,
    marginTop:20
  },
  o:{
    color:'#00004d',
    marginLeft:20,
    marginBottom:20,
    marginLeft:200,
    fontSize:18
  },
  m:{
   color:'#00004d',
   fontSize:24,
   marginLeft:90,
   marginTop:30
  }
  
  
});

export default Frogot;

