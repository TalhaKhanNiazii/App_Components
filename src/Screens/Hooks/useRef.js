import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import React, {useRef} from 'react';

const App = () => {
  const input = useRef();
  const handleClick = () => {
    input.current.focus();
    input.current.setNativeProps({
      fontSize: 22,
      color: 'yellow',
    });
  };
  return (
    <View style={Styles.mainContainer}>
      <Text style={Styles.mainText}>Use Ref Practice</Text>
      <TextInput
        ref={input}
        style={Styles.txtInput}
        placeholder="Enter your name"
      />
      <TextInput
        style={Styles.txtInput}
        placeholder="Enter your phone number"
      />
      <View style={Styles.btn}>
        <Button onPress={handleClick} title="Click" />
      </View>
    </View>
  );
};

export default App;

const Styles = StyleSheet.create({
  mainContainer: {flex: 1, padding: 10},
  mainText: {alignSelf: 'center', fontSize: 26, textAlign: 'center'},
  txtInput: {
    borderWidth: 1,
    borderColor: 'white',
    paddingLeft: 10,
    marginTop: 20,
  },
  btn: {width: '60%', alignSelf: 'center', marginTop: 30},
});
