import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';

const RangeSlider = () => {
  const [lowValue, setLowValue] = useState(25);
  const [highValue, setHighValue] = useState(75);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select a Range:</Text>
      <Text style={styles.value}>
        {lowValue} - {highValue}
      </Text>
      <Slider
        style={{width: '80%', height: 40}}
        minimumValue={0}
        maximumValue={100}
        step={5}
        disabled={false}
        lowerLimit={5}
        upperLimit={95}
        minimumTrackTintColor="#3498db"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#3498db"
        value={lowValue}
        onValueChange={value => setLowValue(value)}
      />
      <Slider
        style={{width: '80%', height: 40}}
        minimumValue={0}
        maximumValue={100}
        step={5}
        disabled={false}
        lowerLimit={10}
        upperLimit={100}
        minimumTrackTintColor="#3498db"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#3498db"
        value={highValue}
        onValueChange={value => setHighValue(value)}
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
    fontSize: 28,
    marginBottom: 10,
    fontFamily: 'PlaypenSans-Regular',
  },
  value: {
    fontSize: 58,
    fontFamily: 'OpenSans_Condensed-Bold',
  },
});

export default RangeSlider;
