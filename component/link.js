import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Link = ({ screenName, children, style }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(screenName);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={[{ color: 'blue', textDecorationLine: 'underline' }, style]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Link;
