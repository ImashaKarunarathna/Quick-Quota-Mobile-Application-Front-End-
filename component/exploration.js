import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Linking, Dimensions, ImageBackground, Animated,Text } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Exploration = () => {
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
   
    'https://youtu.be/n6Ga2_helTk?si=Cp9Rbg9VutXq8fto',
    
   ' https://youtu.be/pQLSQuonSOQ?si=0jbfDicnNy3upzB8',
    
    'https://youtube.com/@puradvida?si=iZnPTQ54KQK3RloN',
    
    'https://youtu.be/ARBj3NqsX9I?si=Mf8WDXMHzUrmbHdK',
    
    'https://youtu.be/5u2YT5mZN4Q?si=a49CfsM-kQgbnVJH',
    
    'https://youtu.be/Cqg8tQH4U8M?si=eTDlIrmK2QBA5Euc',
    
    'https://youtube.com/@dianamarieabbott3880?si=mQVzNtPbUam-xgpc',
    
    'https://youtu.be/7H3D-6nj_dY?si=iL_7s3Phws3WbCqe'
    
    
  ];

  
  // Replace the text with images for each menu item
  const menuItemImages = [
    require('../assets/e1.png'),
    require('../assets/e2.png'),
    require('../assets/e33.png'),
    require('../assets/e44.png'),
    require('../assets/e55.png'),
    require('../assets/e6.png'),
    require('../assets/e7.png'),
    require('../assets/e8.png'),
  ];

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/fz.jpg')} style={styles.backgroundImage}>

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

<Image source={require('../assets/z1.png')} style={[styles.menuIcon, { marginBottom: 40, marginLeft: 10, width: 130, height: 70 }]} />
<TouchableOpacity onPress={handleMenuToggle}>
  <Image source={require('../assets/ei.png')} style={[styles.menuIcon, { marginLeft: 20 }]} />
</TouchableOpacity>

</View>


        <Text style={styles.text}>Dive into the unknown and discover new horizons with exploration.
           Whether it's exploring nature trails or diving into new cultures,
            exploration opens doors to endless possibilities.</Text>
        {isMenuOpen && (
          <ImageBackground source={require('../assets/eb.jpg')} style={styles.menubackground}>
            <Text style={styles.text}>Get Ready To Explore! </Text>
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
    width: 120,
    height: 120,
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

export default Exploration;
