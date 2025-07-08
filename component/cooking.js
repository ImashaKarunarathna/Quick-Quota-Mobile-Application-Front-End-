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
   
    

'https://youtu.be/YlYgOedviIc?si=Znp5cW93F7q9EMGV',

'https://youtu.be/DGh-Tl1J3zw?si=xkWZAGccr47svt8L',


'https://youtu.be/AHWnf7Dg3LM?si=Bns-GBdoIaYCATON',


'https://youtu.be/wbN6YctBhRg?si=EZr271xWYPV9P8Yh',


'https://youtu.be/BtZ19TEIR7E?si=s_5ax_MdTyfROPiG',


'https://youtu.be/9trl_fL6ncI?si=DS9r0yqZipSKWHE3',


'https://youtu.be/4V9pPGrpN1E?si=0DAwA3ZtnWloCZYs',


'https://youtu.be/aMDV2tfY9rM?si=FTNvSfcPsFOysRDi '
    
  ];

  
  // Replace the text with images for each menu item
  const menuItemImages = [
    require('../assets/cook1.png'),
    require('../assets/cook2.png'),
    require('../assets/cook3.png'),
    require('../assets/cook4.png'),
    require('../assets/cook5.png'),
    require('../assets/cook6.png'),
    require('../assets/cook7.png'),
    require('../assets/cook8.png'),
  ];

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/fz.jpg')} style={styles.backgroundImage}>

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

<Image source={require('../assets/z1.png')} style={[styles.menuIcon, { marginBottom: 40, marginLeft: 10, width: 130, height: 70 }]} />
<TouchableOpacity onPress={handleMenuToggle}>
  <Image source={require('../assets/cooki.png')} style={[styles.menuIcon, { marginLeft: 20 }]} />
</TouchableOpacity>

</View>


        <Text style={styles.text}>Embark on a culinary journey and discover
         the joy of cooking. From mastering basic recipes to experimenting
          with flavors and cuisines, cooking is a rewarding hobby that
           satisfies both the palate and the soul.



  
      </Text>
        {isMenuOpen && (
          <ImageBackground source={require('../assets/cookb.jpg')} style={styles.menubackground}>
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

export default Exploration;
