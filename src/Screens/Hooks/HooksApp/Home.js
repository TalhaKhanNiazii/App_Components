import {View, Text, Image, StyleSheet, Alert} from 'react-native';
import React, {useReducer, createContext, useContext} from 'react';
import Component from './Component';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      if (state < 10) {
        return state + 1;
      } else {
         Alert.alert('Alert', 'Maximum Limit Reached');
         return state;
      }
    case 'DECREMENT':
      if (state != 0) {
        return state - 1;
      } else {
         Alert.alert('Alert', 'Minimum Limit Reached');
         return state;
      }
    default:
      return state;
  }
};
export const myContext = createContext() //Creating Context
export const useMyContext = () => useContext(myContext) //Custom Hook
const Home = () => {
  const initialState = 0;
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <myContext.Provider value={state}>
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>useReducer & useContext</Text>
      <View style={styles.container}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={require('./Images/T-Shirt-Blue.png')}
        />
        <View style={styles.view}>
          <Text
            onPress={() => dispatch({type: 'INCREMENT'})}
            style={styles.btn}>
            +
          </Text>
          <Component/>
          <Text
            onPress={() => dispatch({type: 'DECREMENT'})}
            style={styles.btn}>
            −
          </Text>
        </View>
      </View>
    </View>
    </myContext.Provider>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  heading: {fontSize: 22, color: 'blue', marginBottom: 50},
  container: {
    padding: 10,
    flex: 0.5,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
  },
  image: {height: 250, width: 250},
  view: {
    height: 50,
    width: '100%',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  btn: {
    fontSize: 28,
    width: '15%',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 10,
    color: 'black',
    height: 40,
    lineHeight: 40,
  },
});
