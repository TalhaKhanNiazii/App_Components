import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const BackgroundChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const handleChangeBackground = () => {
    let colorValues = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += colorValues[Math.floor(Math.random() * 16)];
    }
    console.log('Random Color : ', color);
    setBackgroundColor(color);
  };

  return (
    <View style={[styles.mainContainer, {backgroundColor: backgroundColor}]}>
      <TouchableOpacity
        onPress={() => handleChangeBackground()}
        activeOpacity={0.7}
        style={styles.btn}>
        <Text style={styles.btnTitle}>Change Color</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BackgroundChanger;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    height: 40,
    width: 150,
    backgroundColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'OpenSans_Condensed-Bold',
  },
});
