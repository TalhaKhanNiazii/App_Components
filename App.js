import React from 'react';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        backgroundColor: 'teal',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 22,
          backgroundColor: 'black',
          width: '50%',
          textAlign: 'center',
          borderRadius: 10,
        }}>
        Hello Sajjad!
      </Text>
      <Text
        style={{
          fontSize: 22,
          backgroundColor: 'black',
          width: '90%',
          textAlign: 'center',
          borderRadius: 10,
          marginTop: 20,
        }}>
        Welcome to programming!
      </Text>
    </View>
  );
};
export default App;
