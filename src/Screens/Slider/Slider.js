import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Slider from '@react-native-community/slider';

const SliderPractice = () => {
  const [stepGoal, setStepGoal] = useState(5000);

  const onValueChange = value => {
    let validValue = Math.round(value);
    setStepGoal(validValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Set Your Daily Step Goal:</Text>
      <Text style={styles.value}>{stepGoal} steps</Text>
      <Slider
        style={{
          width: '90%',
          height: 40,
        }}
        minimumValue={1000}
        maximumValue={10000}
        value={stepGoal}
        onValueChange={onValueChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SliderPractice;
