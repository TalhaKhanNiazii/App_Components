// HomeScreen.js

import React from 'react';
import {View, Text, Button} from 'react-native';
import {useTheme} from './useContext';

const HomeScreen = () => {
  const {isDarkTheme, toggleTheme} = useTheme();
  console.log('home', isDarkTheme);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isDarkTheme ? 'black' : 'white',
      }}>
      <Text style={{color: isDarkTheme ? 'white' : 'black'}}>
        {isDarkTheme ? 'Dark Theme' : 'Light Theme'}
      </Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
};

export default HomeScreen;
