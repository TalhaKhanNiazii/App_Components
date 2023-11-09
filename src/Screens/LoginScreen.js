// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   Alert,
//   TouchableOpacity,
//   SafeAreaView,
//   KeyboardAvoidingView,
//   Keyboard,
//   ScrollView,
// } from 'react-native';
// import PrimaryButton from '../Components/PrimaryButton';
// import TextInputComponent from '../Components/TextInputComponent';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import Colors from '../Themes/Colors';

// const Login = () => {
//   const [show, setShow] = useState(false);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [address, setAddress] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <SafeAreaView style={Styles.container}>
//       <ScrollView style={{flex: 1}}>
//         <KeyboardAvoidingView>
//           <View style={{flex: 1}}>
//             <TouchableOpacity activeOpacity={1} onPress={Keyboard.dismiss}>
//               <View style={{alignItems: 'center'}}>
//                 <Text style={Styles.mainText}>My Profile</Text>
//                 <Image
//                   style={Styles.image}
//                   resizeMode="center"
//                   source={require('../Assets/images/profile.png')}
//                 />
//                 <View style={Styles.txtInputView}>
//                   <TextInputComponent
//                     value={name}
//                     onChangeText={txt => setName(txt)}
//                     placeholder={'Enter Your Name'}
//                   />
//                 </View>
//                 <View style={Styles.txtInputView}>
//                   <TextInputComponent
//                     value={email}
//                     onChangeText={txt => setEmail(txt)}
//                     placeholder={'Enter Your Email'}
//                     keyboardType="email-address"
//                   />
//                 </View>
//                 <View style={Styles.txtInputView}>
//                   <TextInputComponent
//                     value={phone}
//                     onChangeText={txt => setPhone(txt)}
//                     placeholder={'Enter Your Phone'}
//                     keyboardType="phone-pad"
//                   />
//                 </View>
//                 <View style={Styles.txtInputView}>
//                   <TextInputComponent
//                     value={address}
//                     onChangeText={txt => setAddress(txt)}
//                     placeholder={'Enter Your Address'}
//                   />
//                 </View>
//                 <View style={Styles.txtInputView}>
//                   <TextInputComponent
//                     value={password}
//                     onChangeText={txt => setPassword(txt)}
//                     secureTextEntry={show ? false : true}
//                     placeholder={'Enter Your Password'}
//                   />
//                   <TouchableOpacity
//                     style={Styles.iconTouchable}
//                     onPress={() => setShow(!show)}>
//                     {show ? (
//                       <Icon name={'eye'} size={28} color={Colors.secondary} />
//                     ) : (
//                       <Icon
//                         name={'eye-slash'}
//                         size={28}
//                         color={Colors.secondary}
//                       />
//                     )}
//                   </TouchableOpacity>
//                 </View>
//               </View>
//               <PrimaryButton
//                 btnText={'Password'}
//                 btnStyle={{
//                   alignSelf: 'center',
//                   backgroundColor: Colors.secondary,
//                 }}
//                 onPress={() =>
//                   Alert.alert(
//                     'Your Details :',
//                     `Name : ${name} \n Email : ${email} \n Phone : ${phone} \n Address : ${address} \n Password : ${password}`,
//                   )
//                 }
//               />
//             </TouchableOpacity>
//           </View>
//         </KeyboardAvoidingView>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };
// export default Login;

// const Styles = StyleSheet.create({
//   container: {flex: 1},
//   image: {height: 200, width: 200, borderRadius: 100},
//   iconTouchable: {position: 'absolute', right: 5, top: 10},
//   mainText: {
//     color: 'teal',
//     fontWeight: 'bold',
//     fontSize: 32,
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   txtData: {
//     color: '#978efa',
//     fontSize: 26,
//     fontStyle: 'italic',
//     marginTop: 10,
//   },
//   txtInputView: {width: '90%', marginTop: 20},
// });

import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
} from 'react-native';
import PrimaryButton from '../Components/PrimaryButton';
import TextInputComponent from '../Components/TextInputComponent';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../Themes/Colors';

const Login = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
  });

  const handleInputChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };
  console.log('TESTING : ', formData);
  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView style={{flex: 1}}>
        <KeyboardAvoidingView>
          <View style={{flex: 1}}>
            <TouchableOpacity activeOpacity={1} onPress={Keyboard.dismiss}>
              <View style={{alignItems: 'center'}}>
                <Text style={Styles.mainText}>My Profile</Text>
                <Image
                  style={Styles.image}
                  resizeMode="center"
                  source={require('../Assets/images/profile.png')}
                />
                <View style={Styles.txtInputView}>
                  <TextInputComponent
                    value={formData.name}
                    onChangeText={txt => handleInputChange('name', txt)}
                    placeholder={'Enter Your Name'}
                  />
                </View>
                <View style={Styles.txtInputView}>
                  <TextInputComponent
                    value={formData.email}
                    onChangeText={txt => handleInputChange('email', txt)}
                    placeholder={'Enter Your Email'}
                    keyboardType="email-address"
                  />
                </View>
                <View style={Styles.txtInputView}>
                  <TextInputComponent
                    value={formData.phone}
                    onChangeText={txt => handleInputChange('phone', txt)}
                    placeholder={'Enter Your Phone'}
                    keyboardType="phone-pad"
                  />
                </View>
                <View style={Styles.txtInputView}>
                  <TextInputComponent
                    value={formData.address}
                    onChangeText={txt => handleInputChange('address', txt)}
                    placeholder={'Enter Your Address'}
                  />
                </View>
                <View style={Styles.txtInputView}>
                  <TextInputComponent
                    value={formData.password}
                    onChangeText={txt => handleInputChange('password', txt)}
                    secureTextEntry={show ? false : true}
                    placeholder={'Enter Your Password'}
                  />
                  <TouchableOpacity
                    style={Styles.iconTouchable}
                    onPress={() => setShow(!show)}>
                    {show ? (
                      <Icon name={'eye'} size={28} color={Colors.secondary} />
                    ) : (
                      <Icon
                        name={'eye-slash'}
                        size={28}
                        color={Colors.secondary}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
              <PrimaryButton
                btnText={'Password'}
                btnStyle={{
                  alignSelf: 'center',
                  backgroundColor: Colors.secondary,
                }}
                onPress={() =>
                  Alert.alert(
                    'Your Details :',
                    `Name: ${formData.name} \nEmail: ${formData.email} \nPhone: ${formData.phone} \nAddress: ${formData.address} \nPassword: ${formData.password}`,
                  )
                }
              />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {flex: 1},
  image: {height: 200, width: 200, borderRadius: 100},
  iconTouchable: {position: 'absolute', right: 5, top: 10},
  mainText: {
    color: 'teal',
    fontWeight: 'bold',
    fontSize: 32,
    marginTop: 20,
    marginBottom: 10,
  },
  txtData: {
    color: '#978efa',
    fontSize: 26,
    fontStyle: 'italic',
    marginTop: 10,
  },
  txtInputView: {width: '90%', marginTop: 20},
});

export default Login;
