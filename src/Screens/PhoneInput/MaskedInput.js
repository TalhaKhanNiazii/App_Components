import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {MaskedTextInput} from 'react-native-mask-text';

const MaskedInput = () => {
  const [val, setVal] = useState('');
  console.log(val);
  return (
    <View>
      <Text style={{fontSize: 28, color: 'white', alignSelf: 'center'}}>
        MaskedInput
      </Text>
      <MaskedTextInput
        mask="9999-9999999-9"
        value={val}
        onChangeText={(text, rawText) => {
          //   console.log(text);
          //   console.log(rawText);
          setVal(text);
        }}
        keyboardType="number-pad"
        placeholder="9999-9999999-9"
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          borderColor: 'white',
          //   backgroundColor: 'white',
          marginTop: 40,
        }}
      />
    </View>
  );
};

export default MaskedInput;
