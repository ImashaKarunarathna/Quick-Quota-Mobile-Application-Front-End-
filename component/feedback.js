import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(''); // State for Age
  const [comment, setComment] = useState(''); // State for Comment

  const handleFormSubmit = () => {
    // Here you can perform actions with the form data, such as sending it to a server
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Age:', age); // Log Age
    console.log('Comment:', comment); // Log Comment
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/y.jpg')} style={styles.backgroundImage} resizeMode="cover">
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <Text style={styles.a}> We Value Your Feedback!</Text>
          <Text style={styles.b}>
            We're always striving to improve and provide
            the best experience for our users. Your feedback is
            essential to us. Please take a moment to share your thoughts
            on your experience with our website and any suggestions
            you may have for improvement.
          </Text>

          <Text style={styles.c}>Feedback Form</Text>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={[styles.input, { color: '#ffffff' }]}
            onChangeText={text => setName(text)}
            value={name}
            placeholder="Please Enter your name"
            placeholderTextColor="red"
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input, { color: '#ffffff' }]}
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder="Please Enter your email"
            placeholderTextColor="red"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Age</Text>
          <TextInput
            style={[styles.input, { color: '#ffffff' }]}
            onChangeText={text => setAge(text)} // Update age state
            value={age} // Use age state for value
            placeholder="Please Enter your Age"
            placeholderTextColor="red"
          />

          <Text style={styles.label}>Comment</Text>
          <TextInput
            style={[styles.input, { color: '#ffffff' }]}
            onChangeText={text => setComment(text)} // Update comment state
            value={comment} // Use comment state for value
            placeholder="Please Enter your Comment"
            placeholderTextColor="red"
          />

          <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
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
    paddingHorizontal: 20,
    backgroundColor: '#000000',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#ffffff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  a: {
    color: '#ffffff',
    fontSize: 18,
    marginTop: 20,
    marginLeft: 50,
    marginBottom: 20,
  },
  b: {
    color: '#ffffff',
    marginBottom: 20,
    lineHeight: 18,
    paddingHorizontal: 20,
    fontsize: 15,
  },
  c: {
    color: '#ffffff',
    lineHeight: 18,
    paddingHorizontal: 20,
    fontSize: 18,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});

export default Feedback;