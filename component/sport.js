import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Linking, Dimensions, ImageBackground, Animated,Text } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Sport = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuItemsAnimation] = useState([...Array.from({ length: 8 })].map(() => new Animated.Value(0)));

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemPress = (url) => {
    Linking.openURL(url);
  };

  useEffect(() => {
    if (isMenuOpen) {
      menuItemsAnimation.forEach((itemAnim, index) => {
        Animated.loop(
          Animated.sequence([
            Animated.timing(itemAnim, {
              toValue: 1,
              duration: 3000,
              useNativeDriver: true,
            }),
            Animated.timing(itemAnim, {
              toValue: 0,
              duration: 3000,
              useNativeDriver: true,
            }),
            Animated.delay(1),
          ])
        ).start();
      });
    } else {
      menuItemsAnimation.forEach((itemAnim) => {
        itemAnim.stopAnimation();
      });
    }
  }, [isMenuOpen]);

  const menuItemsTranslateX = menuItemsAnimation.map((itemAnim, index) =>
    itemAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [windowWidth * (index % 2 === 0 ? 1 : -1), 0],
    })
  );

  const menuItemsTranslateY = menuItemsAnimation.map((itemAnim, index) =>
    itemAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [windowHeight * (index % 4 < 2 ? 1 : -1), 0],
    })
  );

  // URLs for each menu item
  const menuItemUrls = [
   
    'https://youtu.be/xXSz5JTSCog?si=IDOx7tad77mDzUmt',
    
   ' https://youtu.be/s1K7ZwTidU8?si=7b9KrXUSZsqNcyod',
    
    'https://youtu.be/k70Gv9F7j2Q?si=DCtLzJi98Fc8_3sW',
    
    
    'https://youtu.be/EwwSkS9QOGw?si=smQ_o6Y7dthxZ6Aa',
    
    'https://youtu.be/X3qfHb_tODo?si=2nC2pN-NPl6LCMue',
    
    'https://youtu.be/Lebip2dOVTU?si=5DZ7Fy0A9XdB_i6Y',
    
    'https://youtu.be/lxuH5iVoXfQ?si=92SQq2d0qLJmfcDU',
    
    'https://youtu.be/lcB0LYNp0oI?si=ZttbYBF5IVBuGLgu'
    
    
    
  ];

  
  // Replace the text with images for each menu item
  const menuItemImages = [
    require('../assets/s1.png'),
    require('../assets/s2.png'),
    require('../assets/s3.png'),
    require('../assets/s5.png'),
    require('../assets/s6.png'),
    require('../assets/s7.png'),
    require('../assets/s2.png'),
    require('../assets/s8.png'),
  ];

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/fz.jpg')} style={styles.backgroundImage}>

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

<Image source={require('../assets/z1.png')} style={[styles.menuIcon, { marginBottom: 40, marginLeft: 10, width: 130, height: 70 }]} />
<TouchableOpacity onPress={handleMenuToggle}>
  <Image source={require('../assets/s1.png')} style={[styles.menuIcon, { marginLeft: 20 }]} />
</TouchableOpacity>

</View>


        <Text style={styles.text}>Stay active and boost your well-being with sports.
         From team games to solo activities, sports offer a fun and 
         engaging way to stay fit and healthy.



 </Text>
        {isMenuOpen && (
          <ImageBackground source={require('../assets/sb.jpg')} style={styles.menubackground}>
            <Text style={styles.text}>Excitement Awaits! Click Me! </Text>
            <View style={styles.menu}>
              {menuItemsAnimation.map((itemAnim, index) => (
                <Animated.View
                  key={index}
                  style={[
                    styles.menuItem,
                    { transform: [{ translateX: menuItemsTranslateX[index] }, { translateY: menuItemsTranslateY[index] }] },
                  ]}
                >
                  <TouchableOpacity onPress={() => handleMenuItemPress(menuItemUrls[index])}>
                    {/* Display images instead of text */}
                    <Image source={menuItemImages[index]} style={styles.menuItemImage} />
                  </TouchableOpacity>
                </Animated.View>
              ))}
            </View>
          </ImageBackground>
        )}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    width: 100,
    height: 100,
    marginRight: 10,
    marginLeft: 140,
    marginTop: 100,
  },
  menu: {
    padding: 20,
  },
  menuItem: {
    paddingVertical: 10,
    marginLeft: 160
  },
  menuItemImage: {
    width: 80, // Adjust image size as needed
    height: 80,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  menubackground: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  text:{
  color:'#ffffff',
  fontSize:24,
  marginTop:40,
  marginLeft:30,
  fontStyle: 'italic'
  }
});

export default Sport;
