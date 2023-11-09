import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const PrimaryButton = ({
  btnText = 'Default Value',
  btnStyle = {},
  onPress = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{...Styles.btnStyle, ...btnStyle}}>
      <Text style={Styles.btnText}>{btnText}</Text>
    </TouchableOpacity>
  );
};
export default PrimaryButton;

const Styles = StyleSheet.create({
  btnStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    height: 40,
    backgroundColor: 'teal',
    marginTop: 30,
    borderRadius: 15,
  },
  btnText: {color: 'white', fontSize: 22},
});
