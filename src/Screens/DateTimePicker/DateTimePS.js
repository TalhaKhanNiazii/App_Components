import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Example = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [date, setDate] = useState('Show Date Picker');
  const [time, setTime] = useState('Show Time Picker');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmDate = date => {
    let formatedDate = new Date(date);
    formatedDate = formatedDate.toISOString().split('T');
    formatedDate = formatedDate[0].split('-');
    formatedDate =
      formatedDate[2] + '/' + formatedDate[1] + '/' + formatedDate[0];
    console.log('Date Checking: ', formatedDate);
    setDate(formatedDate);
    hideDatePicker();
  };

  const handleConfirmTime = time => {
    let formatedTime = new Date(time);
    formatedTime = formatedTime.toLocaleTimeString().split('00');
    let formatedTime2 = formatedTime[0].split(':');
    formatedTime =
      formatedTime2[0] + ':' + formatedTime2[1] + ' ' + formatedTime[1];
    // console.log('Time Checking: ', formatedTime);
    setTime(formatedTime);
    hideTimePicker();
  };

  return (
    <View style={Styles.mainContainer}>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        display="calendar"
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        display="clock"
        onConfirm={handleConfirmTime}
        onCancel={hideTimePicker}
      />
      <TouchableOpacity
        onPress={showDatePicker}
        activeOpacity={0.7}
        style={Styles.btn}>
        <Text style={Styles.btnText}>{date}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={showTimePicker}
        activeOpacity={0.7}
        style={Styles.btn}>
        <Text style={Styles.btnText}>{time}</Text>
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
