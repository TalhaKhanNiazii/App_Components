import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';

const AppMain = () => {
  const [switchValue, setSwitchValue] = useState('bright');

  console.log('state variable switch: ', switchValue);
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: switchValue === 'bright' ? 'white' : 'black',
      }}>
      <SwitchSelector
        initial={0}
        fontSize={20}
        buttonColor={'skyblue'}
        selectedColor={'brown'}
        backgroundColor={'lightgray'}
        imageStyle={{marginRight: 10}}
        height={50}
        borderColor={'blue'}
        hasPadding
        onPress={x => setSwitchValue(x)}
        options={[
          {
            label: 'Bright',
            imageIcon: require('../../Assets/icons/sun.png'),
            value: 'bright',
          },
          {
            label: 'Dark',
            imageIcon: require('../../Assets/icons/moon.png'),
            value: 'dark',
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 100,
  },
});

export default AppMain;
