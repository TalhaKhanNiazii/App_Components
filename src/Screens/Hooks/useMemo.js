import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import React, {useMemo} from 'react';
import {useState} from 'react';

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const addNumber = x => {
    console.log('Function Called ..');
    return x + 2;
  };
  const num = useMemo(() => addNumber(count1), [count1]);
  //Here we used useMemo just to ignore calling the function again and again and at the end we passed dependency [count1], which means that when the state variable changes then call or render the function other wise don't call it.
  return (
    <View style={Styles.mainContainer}>
      <Text
        style={{
          ...Styles.mainText,
          color: 'black',
          backgroundColor: 'orange',
          padding: 10,
          borderRadius: 10,
        }}>
        Use Memo
      </Text>
      <Text style={{...Styles.mainText, fontSize: 60, color: 'green'}}>
        {num}
      </Text>
      <Text style={Styles.mainText} onPress={() => setCount1(count1 + 1)}>
        Count 1 : {count1}
      </Text>
      <Text style={Styles.mainText} onPress={() => setCount2(count2 + 1)}>
        Count 2 : {count2}
      </Text>
    </View>
  );
};

export default App;

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
