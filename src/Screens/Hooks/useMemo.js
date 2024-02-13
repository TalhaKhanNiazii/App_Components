import React, {useState, useMemo} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  // Example of using useMemo to memoize the result of a computation
  const squaredValue = useMemo(() => {
    console.log('Computing squared value...');
    return count * count;
  }, [count]);
  // The dependency array: recompute if 'count' changes

  const sum = (x) => {
    console.log('The Sum of num + x is : ', num + x);
  };
  useMemo(()=> {sum(10)},[num])

  return (
    <View style={Styles.mainContainer}>
      <Text style={{fontSize:28, margin:10}}>Count: {count}</Text>
      <Text style={{fontSize:28, margin:10}}>Squared Value: {squaredValue}</Text>
      <Button
        title="Increment Count"
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <View style={{height:20}}></View>
       <Button
        title="Increment Num"
        onPress={() => {
          setNum(num + 1);
        }}
      />
    </View>
  );
};

export default MyComponent;

const Styles = StyleSheet.create({
  mainContainer: {flex: 1, padding: 10, justifyContent: 'center'},
  mainText: {
    alignSelf: 'center',
    fontSize: 26,
    textAlign: 'center',
    marginTop: 30,
  },
  txtInput: {
    borderWidth: 1,
    borderColor: 'white',
    paddingLeft: 10,
    marginTop: 20,
  },
  btn: {width: '60%', alignSelf: 'center', marginTop: 30},
});
