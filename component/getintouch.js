// Screen1.js (and similarly for other screens)
import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import Link from './link';



const GetInTouch = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/hbackground.jpg')} style={styles.backgroundImage}>
        <Text style={styles.j}>Get In Touch</Text>
        <Text style={styles.h}>Have a question, suggestion, or just want
          to say hello? We'd love to hear from you! Our dedicated
          team is here to assist you with anything you need. Whether
          it's a technical issue, a product inquiry, or simply wanting
          to connect, don't hesitate to reach out. Your satisfaction is
          our top priority, and we're committed to providing you with the
          best possible experience</Text>

        <Image source={require('../assets/ll.jpeg')} style={styles.image} />
        <Text style={styles.a}>Sabaragamuwa University,</Text>
        <Text style={styles.b}>BelihulOya</Text>
        <Image source={require('../assets/pp.png')} style={styles.image} />
        <Text style={styles.b}>0717777777</Text>
        <Image source={require('../assets/gg.jpeg')} style={styles.image} />
        <Text style={styles.a}>quickquota@gmail.com</Text>

        <Text style={styles.m}>Help us shape the future of our service by sharing
          your valuable feedback with us today!</Text>

        <Link screenName="Feedback" style={styles.n}>
          <Text style={styles.n}>Add to feedback</Text>
        </Link>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#180443',
    alignItems: 'center',

  },
  j: {
    color: '#ffffff',
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20
  },
  h: {
    color: '#7338F0',
    marginVertical: 15,
    lineHeight: 18,
    paddingHorizontal: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 170,
  },
  a: {
    color: '#ffffff',
    marginLeft: 110,
    alignItems: 'center',
  },
  b: {
    color: '#ffffff',
    marginLeft: 160,
    alignItems: 'center'
  },

  m: {
    color: '#ffff4d',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  n: {
    color: '#D8F90C',
    fontSize: 20,
    marginLeft: 120


  },
  backgroundImage: {
    flex: 1,
  }

});

export default GetInTouch;
