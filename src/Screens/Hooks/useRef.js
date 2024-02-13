import React, {useState, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Keyboard, StyleSheet } from 'react-native';

const MyComponent = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);

  const handleFocus = (inputRef) => {
    // Change props when the input gains focus
    if (inputRef.current) {
      inputRef.current.setNativeProps({
        placeholderTextColor:'blue',
        style: { borderColor: 'blue', color:'blue', 
        fontWeight:'bold', height:50, fontSize:22 },
      });
    }
  };

  const handleBlur = (inputRef) => {
    // Change props when the input loses focus
    if (inputRef.current) {
      inputRef.current.setNativeProps({
        placeholderTextColor:'black',
        style: { borderColor: 'black', color:'black', 
        fontWeight:'500', height:45, fontSize:18  },
      });
    }
  };

  const handleScreenPress = () => {
    // Hide the keyboard when clicking randomly on the screen
    Keyboard.dismiss();
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleScreenPress}
      activeOpacity={1} // To prevent the TouchableOpacity's default opacity effect
    >
      <TextInput
        ref={input1Ref}
        onFocus={() => handleFocus(input1Ref)}
        onBlur={() => handleBlur(input1Ref)}
        style={styles.input}
        value={input1}
        onChangeText={(txt)=> setInput1(txt)}
        placeholder="Type here..."
        placeholderTextColor={'black'}
      />
      <TextInput
        ref={input2Ref}
        onFocus={() => handleFocus(input2Ref)}
        onBlur={() => handleBlur(input2Ref)}
        style={styles.input}
        value={input2}
        onChangeText={(txt)=> setInput2(txt)}
        placeholder="Another input..."
        placeholderTextColor={'black'}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tan'
  },
  input: {
    height: 45,
    fontSize:18,
    width:'90%',
    borderColor: 'black',
    color:'black',
    borderWidth: 2,
    marginVertical: 5,
    paddingHorizontal: 15,
  },
});

export default MyComponent;
