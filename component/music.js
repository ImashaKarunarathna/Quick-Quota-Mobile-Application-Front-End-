import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Linking, Dimensions, ImageBackground, Animated, Text } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Music = () => {
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





    'https://youtu.be/QiO8eUCco1U?si=SrYsMC1xEAb8637v',

    'https://youtu.be/kVi8ICWu3WI?si=DsP7McO4ihVVzti5',

    'https://youtu.be/C1Jp6U17e4Q?si=87W7gRUNSdM8vkZP',


    'https://youtu.be/XOXIZ5jbw0k?si=lYISCTROTOQiVHo7',


    'https://youtu.be/k09nnGtmIdA?si=sDGvzl4JvtiWUaZU',

    'https://youtu.be/eIh_bxOMjtQ?si=fciTup5DRxttd7R3',


    'https://youtu.be/I35paFqFOPk?si=zKybMt7p7yZPC3ik',

    'https://youtu.be/OS1tdN9BuvY?si=HVPml6XVB-egJdu '

  ];


  // Replace the text with images for each menu item
  const menuItemImages = [
    require('../assets/m1.png'),
    require('../assets/m2.png'),
    require('../assets/m3.png'),
    require('../assets/m4.png'),
    require('../assets/m5.png'),
    require('../assets/m6.png'),
    require('../assets/m7.png'),
    require('../assets/m8.png'),
  ];

  return (
    <View style={styles.container}>

      <ImageBackground source={require('../assets/fz.jpg')} style={styles.backgroundImage}>


        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

          <Image source={require('../assets/z1.png')} style={[styles.menuIcon, { marginBottom: 40, marginLeft: 10, width: 130, height: 70 }]} />
          <TouchableOpacity onPress={handleMenuToggle}>
            <Image source={require('../assets/mi.png')} style={[styles.menuIcon, { marginLeft: 20 }]} />
          </TouchableOpacity>

        </View>



        <Text style={styles.text}> Unleash your creativity and express yourself
          through music. Whether you're playing an instrument or singing along,
          music is a universal language that brings joy and connection.
        </Text>

        {isMenuOpen && (
          <ImageBackground source={require('../assets/mb.jpg')} style={styles.menubackground}>

            <Text style={styles.text}>Click   For A Magical Adventure! </Text>

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
    width: 80,
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
  text: {
    color: '#ffffff',
    fontSize: 24,
    marginTop: 40,
    marginLeft: 30,
    fontStyle: 'italic'
  }
});

export default Music;

