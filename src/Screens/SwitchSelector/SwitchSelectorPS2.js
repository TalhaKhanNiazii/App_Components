import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('Apple');

  const options = [
    {
      label: 'Option 1',
      value: 'Apple',
      imageIcon: require('../../Assets/icons/sun.png'),
      customImage: require('../../Assets/images/apple.jpg'),
      customImageStyle: {width: 200, height: 200, marginTop: 30},
    },
    {
      label: 'Option 2',
      value: 'Banana',
      imageIcon: require('../../Assets/icons/moon.png'),
      customImage: require('../../Assets/images/banana.jpg'),
      customImageStyle: {width: 200, height: 200, marginTop: 30},
    },
    {
      label: 'Option 3',
      value: 'Grapes',
      imageIcon: require('../../Assets/icons/sun.png'),
      customImage: require('../../Assets/images/grapes.jpg'),
      customImageStyle: {width: 200, height: 200, marginTop: 30},
    },
  ];

  const onChange = value => {
    setSelectedOption(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select an Option:</Text>
      <SwitchSelector
        options={options}
        selectedText={selectedOption}
        onPress={onChange}
        initial={0} // Index of the initial selected option
        textColor={'#333'} // Text color for non-selected options
        selectedColor={'#fff'} // Text color for the selected option
        buttonColor={'#007AFF'} // Color of the selection button
        borderColor={'#007AFF'} // Border color for all options
        borderRadius={10} // Border radius for all options
        hasPadding={true} // Add padding to the options
        imageStyle={{marginRight: 10}}
        style={styles.switchSelector}
      />
      <Image
        source={
          options.find(option => option.value === selectedOption).customImage
        }
        resizeMode="center"
        style={
          options.find(option => option.value === selectedOption)
            .customImageStyle
        }
        // style={styles.selectedImage}
      />
      <Text style={styles.selectedOption}>
        Selected Option:{' '}
        <Text style={{fontSize: 20, color: 'skyblue'}}> {selectedOption} </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  switchSelector: {
    margin: 20,
    width: '90%',
  },
  selectedOption: {
    marginTop: 20,
    fontSize: 16,
  },
  selectedImage: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default App;
