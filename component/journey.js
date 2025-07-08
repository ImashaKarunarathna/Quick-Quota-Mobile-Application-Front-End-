// Screen1.js (and similarly for other screens)
import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image, ImageBackground } from 'react-native';

const Journey = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/hbackground.jpg')} style={styles.backgroundImage}>
        <Text style={styles.j}>Our Journey</Text>
        <Text style={styles.h}>At our core, we're a team of passionate individuals driven by
          innovation and a relentless pursuit of excellence. With a shared
          dedication to crafting unforgettable experiences, we thrive
          on pushing boundaries and challenging the status quo. Our journey
          began with a simple idea: to create something truly remarkable.
          Today, that vision fuels every aspect of our work as we strive
          to exceed expectations and leave a lasting impact. Welcome to
          our world, where creativity knows no bounds, and possibilities are endless.</Text>

        <Image source={require('../assets/about.png')} style={styles.image} />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Adjust background color as needed
    alignItems: 'center',

  },
  j: {
    color: '#ffffff',
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 120
  },
  h: {
    color: '#7338F0',
    marginVertical: 15,
    lineHeight: 18,
    paddingHorizontal: 20,
  },
  image: {
    opacity: 0.5,
    marginTop: 50,
    marginLeft: 70,
  },
  backgroundImage: {
    flex: 1,
  }
});

export default Journey;
