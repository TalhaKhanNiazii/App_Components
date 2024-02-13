import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './Styles';

const Login = ({navigation}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(null);
  return (
    <View style={{...styles.mainContainer, backgroundColor: 'skyblue'}}>
      <Text style={styles.mainText}>Login Screen</Text>
      <View style={styles.textInputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your name.."
          value={name}
          onChangeText={txt => setName(txt)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your phone number.."
          keyboardType="phone-pad"
          value={phone}
          onChangeText={txt => setPhone(txt)}
        />
      </View>
      <Text
        onPress={() => navigation.navigate('Home', {name, phone})}
        style={styles.btnText}>
        Go To Home Screen
      </Text>
    </View>
  );
};
export default Login;
