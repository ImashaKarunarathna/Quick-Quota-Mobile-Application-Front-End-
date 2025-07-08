import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Linking, Dimensions, ImageBackground, Animated,Text } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Reading = () => {
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
   
    


    'https://youtu.be/FL9dkB7uMCE?si=KwzQXLWR3s3YE3hO',
    
    'https://youtu.be/Rvey9g0VgY0?si=IjudHig58A34I6rM',
    
    'https://youtu.be/s_Chsfe7Ic8?si=aVj9MzwN6B7XieKF',
    
    'https://youtu.be/-qA_CTobJsU?si=pzFREBhcoE7lp1qj',
    
    
    'https://youtu.be/Zv9LGNlDUks?si=fOO1Fvf-5o5gj7Vw',
    
    
    'https://youtu.be/H6S1Sh0T8gU?si=-hTIN8uUrxTsJxt9',
    
    
    'https://youtu.be/GsLTgxIsRys?si=wJamohm9X8hAktJQ',
    
    
    'https://youtu.be/dJsyoKpGQrc?si=r4gCL7Ts2hnuLAL6 ',


    
  ];

  
  // Replace the text with images for each menu item
  const menuItemImages = [
    require('../assets/r1.png'),
    require('../assets/r2.png'),
    require('../assets/r3.png'),
    require('../assets/r4.png'),
    require('../assets/r5.png'),
    require('../assets/r6.png'),
    require('../assets/r7.png'),
    require('../assets/r8.png'),
  ];

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/fz.jpg')} style={styles.backgroundImage}>

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

<Image source={require('../assets/z1.png')} style={[styles.menuIcon, { marginBottom: 40, marginLeft: 10, width: 130, height: 70 }]} />
<TouchableOpacity onPress={handleMenuToggle}>
  <Image source={require('../assets/ri.png')} style={[styles.menuIcon, { marginLeft: 20 }]} />
</TouchableOpacity>

</View>


        <Text style={styles.text}>Immerse yourself in the world of literature 
        and let your imagination soar. Whether it's fiction, non-fiction, or 
        poetry, reading opens doors to new perspectives, ideas, and adventures.


  .</Text>
        {isMenuOpen && (
          <ImageBackground source={require('../assets/rb.jpg')} style={styles.menubackground}>
            <Text style={styles.text}>Click To Unlock The Excitement! </Text>
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

export default Reading;
