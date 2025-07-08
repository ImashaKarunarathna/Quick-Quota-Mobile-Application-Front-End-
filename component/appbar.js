// AppBar.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList,Image ,ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AppBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigation = useNavigation();

  const handleOptionSelect = (itemValue) => {
    switch (itemValue) {
      case 'Quick Quota':
        navigation.navigate('Home');
        break;
      case 'Offerings':
        navigation.navigate('Offerings');
        break;
      case 'Fun Zone':
        navigation.navigate('Funzone');
        break;
      case 'Journey':
        navigation.navigate('Journey');
        break;
      case 'Get In Touch':
        navigation.navigate('GetInTouch');
        break;
        case 'Sign In':
        navigation.navigate('Signin');
        break;
        case 'Log In':
        navigation.navigate('LogIn');
        break;
      default:
        break;
    }
    setIsOpen(false);
  };

  const items = [
    { label: 'Quick Quota', value: 'Quick Quota' },
    { label: 'Offerings', value: 'Offerings' },
    { label: 'Fun Zone', value: 'Fun Zone' },
    { label: 'Journey', value: 'Journey' },
    { label: 'Get In Touch', value: 'Get In Touch' },
    { label: 'Sign In', value: 'Sign In' },
    { label: 'Log In', value: 'Log In' },
  ];

  return (
    
    <View style={styles.container}>
   

      <Image source={require('../assets/logo.png')} style={styles.image} />

      
      <TouchableOpacity onPress={() => setIsOpen(true)}>
      <Image source={require('../assets/t.png')} style={styles.icon} /> 
      </TouchableOpacity>
      
      

      <Modal
        visible={isOpen}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsOpen(false)}
      >
        <View style={styles.modalContainer}>
        <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>

        <Image source={require('../assets/logo.png')} style={styles.imagel} />

          <FlatList
            data={items}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleOptionSelect(item.value)}>
                <Text style={styles.menuItem}>{item.label}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.value}
          />
          </ImageBackground>
        </View>
      </Modal>
      
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: '#7338F0',
    
  },
  b:{

    color:'#180443',
    marginLeft:270,
    marginTop:55
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginTop:'10%' ,
    
  },
  modalContainer: {
    height:800,
    justifyContent:'center',
    alignItems: 'center',
    // Semi-transparent background
  },
  menuItem: {
    color:'#000000',
    textAlign:'center',
    fontSize:32,
    padding: 20,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#0000ff',
  },
  backgroundImage: {
    height:800,
    width:450,
    resizeMode: 'cover',
    justifyContent: 'center',
    
  },
  icon: {
    
    width: 50,
    height: 50,
    marginTop:'15%',
    marginLeft:280,
    zIndex:2
  },
  imagel:{
    height:120,
    width:120,
    alignItems:'center',
    marginLeft:160,
    marginTop:20,
    
  },
  
});

export default AppBar;
