import {TextInput, StyleSheet} from 'react-native';
import React from 'react';

const TextInputComponent = ({
  value = {},
  onChangeText = {},
  placeholder = {},
  ...props
}) => {
  return (
    <TextInput
      style={Styles.txtInput}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default TextInputComponent;

const Styles = StyleSheet.create({
  txtInput: {
    borderRadius: 10,
    backgroundColor: 'rgba(136, 179, 147, 0.7)',
    paddingLeft: 10,
    paddingRight: 45,
  },
});
