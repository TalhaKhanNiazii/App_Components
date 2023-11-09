import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

const Practice = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    Alert.alert(
      'User Details :',
      `Name: ${name} \n Email: ${email} \n Number: ${number} \n Password: ${password}`,
    );
  };
  return (
    <View style={styles.maincontainer}>
      <TouchableOpacity onPress={() => Alert.alert('Profile', 'Ridwan Khan')}>
        <View style={styles.logo}>
          <Text style={styles.logotxt}>R</Text>
        </View>
      </TouchableOpacity>
      <ScrollView>
        <Text style={styles.text}>{name}</Text>
        <TextInput
          placeholder="Enter Your Name"
          value={name}
          onChangeText={txt => setName(txt)}
          style={styles.textinput}
        />

        <Text style={styles.text}>{email}</Text>

        <TextInput
          placeholder="Enter Your Email"
          keyboardType="email-address"
          value={email}
          onChangeText={letter => setEmail(letter)}
          style={styles.textinput2}
        />

        <Text style={styles.text}>{number}</Text>

        <TextInput
          placeholder="Enter Your Number"
          keyboardType="number-pad"
          value={number}
          onChangeText={letter => setNumber(letter)}
          style={styles.textinput2}
        />

        <Text style={styles.text}>{password}</Text>

        <TextInput
          secureTextEntry={true}
          keyboardType="visible-password"
          placeholder="Enter Your Password"
          value={password}
          onChangeText={letter => setPassword(letter)}
          style={styles.textinput2}
        />
      </ScrollView>
      <TouchableOpacity
        onPress={handleClick}
        activeOpacity={0.5}
        style={styles.btnStyle}>
        <Text style={styles.btnText}>Sumbit Data</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Practice;

const styles = StyleSheet.create({
  maincontainer: {flex: 1, backgroundColor: 'teal'},
  text: {fontSize: 30, color: 'white', marginTop: 10, marginHorizontal: 20},
  textinput: {
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
    elevation: 30,
    marginTop: 5,
  },
  textinput2: {
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
    elevation: 30,
    marginTop: 10,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'white',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    justifyContent: 'center',
  },
  logotxt: {
    color: 'black',
    alignContent: 'center',
    alignSelf: 'center',
    fontSize: 100,
  },
  btnStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: '60%',
    backgroundColor: '#4287f5',
    margin: 20,
    borderRadius: 15,
  },
  btnText: {fontSize: 24, color: 'white'},
});
