import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
//Fully Functional TextInput and Images (Assets and Uri)
const TextInputPractice = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  return (
    <View style={{flex: 1, backgroundColor: 'gray', padding: 10}}>
      <ScrollView>
        <Text
          style={{
            backgroundColor: 'white',
            fontSize: 28,
            textAlign: 'center',
            borderRadius: 10,
            marginBottom: 20,
          }}>
          {/* {name} */}
          My Application Form
        </Text>
        <View
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            height: 200,
            width: 200,
            borderRadius: 100,
            backgroundColor: 'aqua',
            padding: 20,
          }}>
          <Image
            style={{height: 190, width: 190, borderRadius: 100}}
            // source={require('./src/Assets/images/undraw_Certificate_re_yadi-removebg-preview.png')}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRngINtdeoWA1b8z4jeA8ihxKEKp3pMW1sa2Q&usqp=CAU',
            }}
            resizeMode="cover"
          />
        </View>
        <Text style={{color: 'black', fontSize: 20, marginTop: 20}}>Name</Text>
        <TextInput
          value={name}
          onChangeText={x => setName(x)}
          placeholder="Enter Your Name"
          style={{
            marginTop: 5,
            paddingHorizontal: 10,
            backgroundColor: 'white',
            borderRadius: 10,
            elevation: 10,
          }}
        />
        <Text style={{color: 'black', fontSize: 20, marginTop: 20}}>Email</Text>
        <TextInput
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Enter Your Email"
          keyboardType="email-address"
          style={{
            marginTop: 5,
            paddingHorizontal: 10,
            backgroundColor: 'white',
            borderRadius: 10,
            elevation: 10,
          }}
        />
        {console.log('email value', email)}
        <Text style={{color: 'black', fontSize: 20, marginTop: 20}}>
          Password
        </Text>
        <TextInput
          value={password}
          onChangeText={x => setPassword(x)}
          placeholder="Enter Your Password"
          secureTextEntry={true}
          style={{
            marginTop: 5,
            paddingHorizontal: 10,
            backgroundColor: 'white',
            borderRadius: 10,
            elevation: 10,
          }}
        />
        <Text style={{color: 'black', fontSize: 20, marginTop: 20}}>Phone</Text>
        <TextInput
          value={number}
          onChangeText={x => setNumber(x)}
          placeholder="Enter Your Number"
          keyboardType="phone-pad"
          style={{
            marginTop: 5,
            paddingHorizontal: 10,
            backgroundColor: 'white',
            borderRadius: 10,
            elevation: 10,
          }}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            height: 55,
            width: '60%',
            backgroundColor: 'aqua',
            borderRadius: 10,
            marginVertical: 30,
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'black', fontSize: 20, textAlign: 'center'}}>
            Submit Data
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default TextInputPractice;
