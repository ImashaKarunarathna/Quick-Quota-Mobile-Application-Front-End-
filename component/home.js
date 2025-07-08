import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, ImageBackground,ScrollView } from 'react-native';
import Slidesho from './slidesho';


const Home = () => {
  return (
    <SafeAreaView style={styles.container}>

      <ImageBackground source={require('../assets/home.jpg')} style={styles.backgroundImage}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Slidesho />
        <Text style={styles.a}>
          In a world where screens dominate our daily lives, finding a healthy balance can feel like an uphill battle. That's where Quick Quota comes in. We're here to help you reclaim control of your digital habits and rediscover the joy of a balanced lifestyle.
        </Text>

        <Text style={styles.a}>
          With Quick Quota, you'll gain valuable insights into your screen time habits, allowing you to make informed decisions about how you engage with technology. Whether you're a parent looking to set boundaries for your family or an individual seeking to regain focus and productivity, our intuitive platform provides the tools and support you need to succeed.
        </Text>

        <Text style={styles.a}>
          But Quick Quota is more than just a screen time tracker. It's a community of like-minded individuals committed to promoting healthier digital habits and supporting each other on the journey towards a more mindful relationship with technology. From personalized recommendations to powerful parental controls, Quick Quota empowers you to live your best digital life, on your terms.
        </Text>

        <Text style={styles.a}>
          So why wait? Join the Quick Quota community today and take the first step towards a happier, healthier relationship with technology. Together, we'll unlock the full potential of your digital experience and embrace a life of balance and well-being.
        </Text>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  a: {
    color: '#7338F0',
    marginVertical: 10,
    fontSize: 16,
    lineHeight: 18,
    paddingHorizontal: 20,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
  }
});

export default Home;
