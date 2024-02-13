import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {useMyContext} from './Home';

const Component = () => {
  const value = useMyContext();
  console.log('My Context Value : ', value  )
  return (
    <>
      <Text style={styles.text}>{value}</Text>
    </>
  );
};

export default Component;

const styles = StyleSheet.create({
  text: {fontSize: 32, fontWeight: '400', color: 'blue'},
});
