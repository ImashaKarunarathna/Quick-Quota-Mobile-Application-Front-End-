import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Linking, Dimensions, ImageBackground, Animated,Text } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Photography = () => {
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
   
    

   

    'https://youtu.be/j2b4aPIk814?si=u-PYCsS1r2i8eUtu',
    
    'https://youtu.be/KxQ5Irai-eA?si=aJOYNhrDjPpoVKIu',
    
    
    'https://youtu.be/X7kpzFS7ZMA?si=Q-EOkBRYC68brYfH',
    
    'https://youtu.be/f53VOUPhHLc?si=KTIoujrUg2SySvVg',
    
    
    'https://youtu.be/nuEcwnxvoB4?si=HNkg_-tplmfDIUrL',
    
    
    
    'https://youtu.be/BEm8MzrdkJ0?si=QS3PG3p4RX70IINY '
    
  ];

  
  // Replace the text with images for each menu item
  const menuItemImages = [
    require('../assets/p1.png'),
    require('../assets/p2.png'),
    require('../assets/p3.png'),
    require('../assets/p4.png'),
    require('../assets/p5.png'),
    require('../assets/p6.png'),
    
  ];

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/fz.jpg')} style={styles.backgroundImage}>

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

<Image source={require('../assets/z1.png')} style={[styles.menuIcon, { marginBottom: 40, marginLeft: 10, width: 130, height: 70 }]} />
<TouchableOpacity onPress={handleMenuToggle}>
  <Image source={require('../assets/pi.png')} style={[styles.menuIcon, { marginLeft: 20 }]} />
</TouchableOpacity>

</View>


        <Text style={styles.text}>Capture moments and tell stories through the
         lens of a camera. Whether you're into landscapes, portraits,
          or street photography, photography is a creative outlet that allows
           you to see the world from a unique perspective.



 

 
</Text>
        {isMenuOpen && (
          <ImageBackground source={require('../assets/pb.jpg')} style={styles.menubackground}>
            <Text style={styles.text}>Click For A Surprises! </Text>
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
    width: 140,
    height: 140,
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

export default Photography;
