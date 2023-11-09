import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={Styles.mainContainer}>
      <Text style={Styles.mainText}>My Counter App</Text>
      <Text style={Styles.count}>{count}</Text>
      <View style={Styles.buttonView}>
        <TouchableOpacity
          onPress={() => setCount(count - 1)}
          activeOpacity={0.7}
          style={Styles.button}>
          <Text style={Styles.buttonTitle}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCount(count + 1)}
          activeOpacity={0.7}
          style={Styles.button}>
          <Text style={Styles.buttonTitle}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Counter;

const Styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: '#e3e3ff', padding: 10},
  mainText: {
    alignSelf: 'center',
    fontSize: 30,
    color: 'purple',
    backgroundColor: 'white',
    textAlign: 'center',
    width: '80%',
    borderRadius: 15,
  },
  count: {
    fontSize: 150,
    color: 'purple',
    alignSelf: 'center',
    marginVertical: 100,
  },
  buttonView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  button: {
    height: 80,
    width: 80,
    borderRadius: 20,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 80,
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
    height: '100%',
    width: '100%',
    marginBottom: 40,
  },
});
