import {View, Text, Button, StyleSheet} from 'react-native';
import React, {useState, useCallback} from 'react';

import Component1 from './Coponent1';
import Component2 from './Coponent2';

const CallBackScreen = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCount1 = useCallback( () => {
    setCount(count + 1)}, [count])
  
  const incrementCount2 = useCallback( () => {
    setCount2(count2 + 1)}, [count2])
  return (
    <View
      style={styles.mainContainer}>

      <Component1 count={count} myFunc={incrementCount1}  />
      <Component2 count2={count2} myFunc={incrementCount2} />

      <Button title="Increment 1" onPress={() => incrementCount1()} />
      <View style={{height: 20}}></View>
      <Button title="Increment 2" onPress={() => incrementCount2()} />
    </View>
  );
};

export default CallBackScreen;

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor: 'tan',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
