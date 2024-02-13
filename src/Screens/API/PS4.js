import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Button,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const PS4 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let data = {
    name,
    email,
    password,
  };
  const addData = async data => {
    const res = await axios.post('http://10.0.2.2:3000/users', data);
    const userData = await res.json();
    console.log('DATA : ', userData);
    // try{
    //   const res = await fetch('http://10.0.2.2:3000/users', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   });
    //   const userData = await res.json();
    //   console.log('DATA : ', userData);
    // } catch(error){
    //   console.log('An Error Occured !', error);
    // }
  };

  const updateData = async (id, data) => {
    const res = await axios.patch('http://10.0.2.2:3000/users/' + id, data);
    const userData = await res.json();
    console.log('DATA : ', userData);
  };
  const deleteData = async id => {
    const res = await axios.delete('http://10.0.2.2:3000/users/' + id);
    const userData = await res.json();
    console.log('DATA : ', userData);
  };

  useEffect(() => {
    // callApi()
  }, []);

  const callApi = async () => {
    // const res = await fetch('http://192.168.19.152:3000/users');
    // const user = await res.json();
    // console.log('Fetch Method : ', user);
    // const res = await axios.get('http://10.0.2.2:3000/products');
    // const products = await res.data;
    // console.log('Axios Method : ',products);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.text}>Local DataBase Server</Text>
      <TextInput
        onChangeText={txt => setName(txt)}
        value={name}
        style={styles.input}
        placeholder="Enter Your Name"
      />
      <TextInput
        onChangeText={txt => setEmail(txt)}
        value={email}
        style={styles.input}
        placeholder="Enter Your Email"
      />
      <TextInput
        onChangeText={txt => setPassword(txt)}
        value={password}
        style={styles.input}
        placeholder="Enter Your Password"
      />
      <View style={styles.button}>
        <Button color={'tan'} title="Add  Data" onPress={() => addData(data)} />
        <Button
          color={'tan'}
          title="Update  Data"
          onPress={() => updateData('0e60', data)}
        />
        <Button
          color={'tan'}
          title="Delete  Data"
          onPress={() => deleteData('0e60')}
        />
      </View>
    </SafeAreaView>
  );
};

export default PS4;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'tan',
  },
  text: {color: 'black', fontSize: 28, fontWeight: 'bold'},
  input: {
    width: '90%',
    height: 45,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginTop: 30,
    marginBottom: 10,
  },
  button: {
    marginTop: 40,
    // width: '40%',
    height: 150,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    // elevation: 10,
    shadowColor: 'black',
    shadowOffset: 0.5,
    shadowOpacity: 1,
    shadowRadius: 20,
    borderColor: 'black',
  },
});
