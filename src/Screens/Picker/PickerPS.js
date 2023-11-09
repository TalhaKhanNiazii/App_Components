import React, {useState, useRef} from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Button} from 'react-native-paper';

function MyPicker() {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const values = ['java', 'JS', 'C++'];
  const pickerRef = useRef();
  function open() {
    pickerRef.current.focus();
  }
  function close() {
    pickerRef.current.blur();
  }
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          // backgroundColor: 'red',
          margin: 20,
        }}>
        <Button
          labelStyle={{fontSize: 22, paddingTop: 5}}
          onPress={() => open()}>
          Open
        </Button>
        <Button
          labelStyle={{fontSize: 22, paddingTop: 5}}
          onPress={() => close()}>
          Close
        </Button>
      </View>
      <Text style={{color: 'black', fontSize: 22}}>Select an option:</Text>
      <View
        style={{
          width: '90%',
          backgroundColor: 'gray',
          borderRadius: 10,
        }}>
        <Picker
          ref={pickerRef}
          mode="dropdown"
          enabled={true}
          selectedValue={selectedLanguage}
          onValueChange={itemValue => setSelectedLanguage(itemValue)}>
          <Picker.Item color="black" label="Select a Value" />
          {values.map((item, index) => (
            <Picker.Item color="blue" key={index} label={item} value={item} />
          ))}
        </Picker>
      </View>
      <Text style={{marginTop: 20, fontSize: 22}}>
        Selected Value:
        <Text style={{color: 'teal', fontWeight: 'bold', fontSize: 28}}>
          {selectedLanguage}
        </Text>
      </Text>
    </View>
  );
}

export default MyPicker;
