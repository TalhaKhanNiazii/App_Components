// HomeScreen.js

import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useTheme} from './useContext';

const HomeScreen = () => {
  const {isDarkTheme, toggleTheme} = useTheme();
  console.log('home', isDarkTheme);
  return (
    <View
      style={{
        ...styles.mainContainer,
        backgroundColor: isDarkTheme ? 'black' : 'white',
      }}>
      <Text style={{...styles.text, color: isDarkTheme ? 'white' : 'black'}}>
        {isDarkTheme ? 'Dark Theme' : 'Light Theme'}
      </Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer:{flex: 1,
  justifyContent: 'center',
  alignItems: 'center'},
  text:{marginBottom:20, fontSize:22},
})
