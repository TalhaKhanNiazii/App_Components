import {View, Text} from 'react-native';
import React from 'react';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';

const Home = (props) => {
console.log(props.route.params);
const navigation = useNavigation();
const {name , phone} = props.route.params;
  return (
    <View style={styles.mainContainer}>
        <Text style={styles.mainText}>Home Screen</Text>
        <View style={styles.dataView}>
        <Text style={styles.dataText}>Name :{name}</Text>
        <Text style={styles.dataText}>Phone : {phone}</Text>
        </View>
      <Text onPress={()=>navigation.goBack()} style={styles.btnText}>Go Back To Login Screen</Text>
    </View>
  );
};
export default Home;
