import React from 'react';
import { SafeAreaView, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Funzone = () => {
  const navigation = useNavigation();

  const handleImageClick = (imageName) => {
    navigation.navigate(imageName);
  };

  return (
    <SafeAreaView style={styles.container}>

      
      <ImageBackground source={require('../assets/fb.jpg')} style={styles.backgroundImage}>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.j}>Fun Zone</Text>

        <TouchableOpacity onPress={() => handleImageClick('Exploration')}>
          <Image source={require('../assets/e.png')} style={styles.a} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleImageClick('Sport')}>
          <Image source={require('../assets/s.png')} style={styles.b} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleImageClick('Music')}>
          <Image source={require('../assets/m.png')} style={styles.c} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleImageClick('Crafting')}>
          <Image source={require('../assets/c.png')} style={styles.d} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleImageClick('Reading')}>
          <Image source={require('../assets/r.png')} style={styles.e} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleImageClick('Gardening')}>
          <Image source={require('../assets/g.png')} style={styles.f} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleImageClick('Photography')}>
          <Image source={require('../assets/p.png')} style={styles.g} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleImageClick('Science')}>
          <Image source={require('../assets/sc.png')} style={styles.h} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleImageClick('Cooking')}>
          <Image source={require('../assets/cook.png')} style={styles.i} />
        </TouchableOpacity>


      </ScrollView>
      </ImageBackground>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  j: {
    color: '#ffffff',
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 130
  },
  h1: {
    color: '#1f1f14',
    marginVertical: 10,
  },
  a: {
    height: 70,
    width: 170,
    marginBottom: 20,
    marginLeft: 11,
  },

  b: {
    height: 70,
    width: 170,
    marginBottom: 20,
    marginLeft: 44,

  },
  c: {
    height: 70,
    width: 170,
    marginBottom: 20,
    marginLeft: 67,

  },
  d: {
    height: 70,
    width: 170,
    marginBottom: 20,
    marginLeft: 90,

  },
  e: {
    height: 70,
    width: 170,
    marginBottom: 20,
    marginLeft: 113,

  },
  f: {
    height: 70,
    width: 170,
    marginBottom: 20,
    marginLeft: 140,

  },
  g: {
    height: 70,
    width: 170,
    marginBottom: 20,
    marginLeft: 159,

  },
  h: {
    height: 70,
    width: 170,
    marginBottom: 20,
    marginLeft: 182,

  },
  i: {
    height: 70,
    width: 170,
    marginBottom: 20,
    marginLeft: 205,

  },
  
  

});

export default Funzone;

