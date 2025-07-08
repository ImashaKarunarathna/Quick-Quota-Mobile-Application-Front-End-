// Screen1.js (and similarly for other screens)
import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, ImageBackground } from 'react-native';
import Link from './link';

const Screen2 = () => {
  return (
    <SafeAreaView style={styles.container}>

      <ImageBackground source={require('../assets/hbackground.jpg')} style={styles.backgroundImage}>
        <Text style={styles.o}>     Offerings    </Text>
        <Text style={styles.k}>  Welcome to Quick Quota! </Text>

        <Text style={styles.l}>
          We're dedicated to helping you and your family to manage screen time effectively.
          Explore our offerings below
        </Text>

        <Text style={styles.p}>Insightful Reports</Text>
        <Text style={styles.l}>Gain valuable insights into your screen time habits with our detailed reports.
          Understand how you spend time on your devices and make informed decisions about your digital lifestyle.</Text>

        <Text style={styles.p}>Powerful Parental Controls</Text>
        <Text style={styles.l}>Take control of your family's screen time with our advanced
          parental control features. Set limits, block inappropriate content,
          and create a safe online environment for your children.</Text>

        <Text style={styles.p}>Easy-to-Use Interface</Text>
        <Text style={styles.l}>Our user-friendly interface makes it simple to navigate and customize
          settings according to your preferences. Get started in just a few clicks and take control
          of your digital experience.</Text>

        <Text style={styles.p}>Explore New Hobbies</Text>
        <Text style={styles.l}>Looking to explore new hobbies and reduce screen time?
          Check out our curated list of hobbies with detailed guides on
          how to get started.</Text>

        <Link screenName="Signin" style={styles.n}>
          <Text style={styles.n}>Get Started Today !</Text>
        </Link>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'

  },
  o: {
    color: '#ffffff',
    fontSize: 24,
    textAlignVertical: 'top',
    marginTop: 20,
    marginLeft: 100,
  },
  k: {
    color: '#ffffcc',
    fontSize: 20,
    marginBottom: 30,
    marginLeft: 50,
  },
  l: {
    color: '#7338F0',
    marginBottom: 20,
    fontSize: 16,
    lineHeight: 18,
    paddingHorizontal: 20,
  },
  p: {
    color: '#66ff66',
    marginLeft: 120
  },
  n: {
    color: '#00ff00',
    fontSize: 18,
    marginLeft: 120

  },
  backgroundImage: {
    flex: 1,
  }
}
);

export default Screen2;
