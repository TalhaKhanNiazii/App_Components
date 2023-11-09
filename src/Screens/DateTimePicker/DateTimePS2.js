import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Example = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateValue, setDateValue] = useState('Select Date');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    let formatedDate = new Date(date);
    formatedDate = formatedDate.toISOString().split('T');
    formatedDate = formatedDate[0].split('-');
    formatedDate =
      formatedDate[2] + '/' + formatedDate[1] + '/' + formatedDate[0];
    console.log('A date has been picked: ', formatedDate);
    setDateValue(formatedDate);
    hideDatePicker();
  };
  return (
    <View style={Styles.mainContainer}>
      <DateTimePickerModal
        mode="date"
        isVisible={isDatePickerVisible}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <TouchableOpacity
        onPress={showDatePicker}
        activeOpacity={0.7}
        style={Styles.btn}>
        <Text style={Styles.btnText}>{dateValue}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Example;

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'aqua',
  },
  btn: {
    backgroundColor: 'white',
    width: '60%',
    height: 50,
    marginVertical: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {fontSize: 22, color: 'teal'},
});
