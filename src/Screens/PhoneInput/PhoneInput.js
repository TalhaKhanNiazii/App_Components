import React, {useState, useRef} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import PhoneInput, {isValidNumber} from 'react-native-phone-number-input';

const App = () => {
  const [formatNumber, setFormatNumber] = useState('');
  const phone = useRef(null);

  //   console.log('formatted: ', formatNumber);

  const myFunc = () => {
    const valid = isValidNumber(formatNumber);
    console.log(valid);
    if (valid) {
      //when we use '?.' together it means when the value is empty or null it will not through an error or crash Application.
      const num = phone.current?.getNumberAfterPossiblyEliminatingZero();
      console.log('num', num);
    }
  };

  return (
    <View style={Styles.mainContainer}>
      <PhoneInput
        ref={phone}
        defaultCode="PK"
        autoFocus
        layout="first"
        withDarkTheme
        withShadow
        defaultValue={formatNumber}
        value={formatNumber}
        onChangeFormattedText={text => setFormatNumber(text)}
        textInputProps={{
          placeholder: 'Enter Phone Number',
        }}
        containerStyle={Styles.inputFlagContainer}
        textContainerStyle={Styles.inputContainer}
        codeTextStyle={Styles.inputContainerContent}
        textInputStyle={Styles.inputContainer2}
      />
      <TouchableOpacity style={Styles.buttonStyle} onPress={() => myFunc()}>
        <Text>Click to add Number</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const Styles = StyleSheet.create({
  mainContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  inputFlagContainer: {
    width: '90%',
    height: 50,
    borderRadius: 10,
  },
  inputContainer: {
    // backgroundColor: 'teal',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    height: 50,
  },
  inputContainerContent: {
    fontStyle: 'italic',
    height: 50,
    paddingTop: 12,
    // backgroundColor: 'red',
  },
  inputContainer2: {
    // backgroundColor: 'red',
    height: 50,
    paddingTop: 10,
  },
  buttonStyle: {
    marginTop: 40,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
