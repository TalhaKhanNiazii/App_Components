import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import PrimaryButton from '../Components/PrimaryButton';
import TextInputComponent from '../Components/TextInputComponent';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../Themes/Colors';

const Home = () => {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState('');
  const data = [
    'John Hamedan',
    'Programmer',
    'Facebook Meta',
    'john098@gamil.com',
    '+1 023 43523 112',
    ' London, United Kigndom',
  ];
  return (
    <View style={Styles.container}>
      <Text style={Styles.mainText}>My Profile</Text>
      <Image
        style={Styles.image}
        resizeMode="center"
        // source={{
        //   uri: 'https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg',
        // }}
        source={require('../Assets/images/profile.png')}
      />
      {/* {data.map((items, index) => {
        return (
          <Text key={index} style={Styles.txtData}>
            {items}
          </Text>
        );
      })} */}
      <PrimaryButton
        btnText={'Password'}
        btnStyle={{backgroundColor: Colors.secondary, marginBottom: 10}}
        onPress={() => Alert.alert('Your Password :', password)}
      />
      <View style={Styles.txtInputView}>
        <TextInputComponent
          value={password}
          onChangeText={txt => setPassword(txt)}
          secureTextEntry={show ? false : true}
          placeholder={'Enter Your Password'}
        />
        <TouchableOpacity
          style={Styles.iconTouchable}
          onPress={() => setShow(!show)}>
          {show ? (
            <Icon name={'eye'} size={28} color={Colors.secondary} />
          ) : (
            <Icon name={'eye-slash'} size={28} color={Colors.secondary} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;

const Styles = StyleSheet.create({
  container: {alignItems: 'center', backgroundColor: 'white', flex: 1},
  image: {height: 200, width: 200, borderRadius: 100},
  iconTouchable: {position: 'absolute', right: 5, top: 10},
  mainText: {
    color: 'teal',
    fontWeight: 'bold',
    fontSize: 32,
    marginTop: 30,
  },
  txtData: {
    color: '#978efa',
    fontSize: 26,
    fontStyle: 'italic',
    marginTop: 10,
  },
  txtInputView: {width: '90%'},
});
