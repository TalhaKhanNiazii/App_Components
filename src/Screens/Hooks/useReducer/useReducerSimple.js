import React, { useReducer } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

//Simple useReducer example ..

// Reducer function to handle state transitions
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      if(state.count != 10){
      return { count: state.count + 1 }}
    case 'DECREMENT':
      if(state.count != -10){
      return { count: state.count - 1 }}
    default:
      return state;
  }
};

const MyComponent = () => {
  // Initial state and the dispatch function from useReducer
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {state.count}</Text>
      <View style={styles.buttonContainer}>
        {/* Dispatching actions to update state */}
        <Button title="Increment" 
        onPress={() => dispatch({ type: 'INCREMENT' })} />
        <Button title="Decrement" 
        onPress={() => dispatch({ type: 'DECREMENT' })} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{fontSize:38, marginBottom:20},
  buttonContainer: {
    flexDirection: 'row',
    width:'100%',
    marginTop: 20,
    justifyContent:'space-around'
  },
});

export default MyComponent;