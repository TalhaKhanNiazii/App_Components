import React, { useReducer, useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';

//useReducer with API ..

// Define action types
const FETCH_START = 'FETCH_START';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';

// Reducer function to handle state transitions
const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, loading: true, error: null };
    case FETCH_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const MyComponent = () => {
  const [refresh, setRefresh] = useState(false)
  // Initial state and the dispatch function from useReducer
  const initialState = {data: null, loading: false, error: null };
  const [state, dispatch] = useReducer(reducer, initialState);

  // Effect to fetch data from an API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: FETCH_START });
      try {
        // Replace this URL with your API endpoint
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log('DATA', data);
        dispatch({ type: FETCH_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: FETCH_ERROR, payload: 'An error occured while fetching data ⚠️' });
      }  
    };

    fetchData();
  }, [refresh]);

  return (
    <View style={styles.container}>
      {state.loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : state.error ? (
        <Text style={styles.errorText}>{state.error}</Text>
      ) : (
        <>
          <Text style={styles.heading}>Data from API:</Text>
          <Text style={styles.successText}>{JSON.stringify(state.data, null, 2)}</Text>
        </>
      )}
      <View style={styles.buttonContainer}>
        {/* Refresh button to fetch data again */}
        <Button title="Refresh" onPress={() => setRefresh(!refresh)} />
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
  buttonContainer: {
    marginTop: 20,
  },
  successText:{fontSize:22},
  errorText: {
    color: 'red',
    marginBottom: 10,
    fontSize:28,
    textAlign:'center',
    margin:20,
  },
  heading:{fontSize:22, backgroundColor:'tan', color:'black', padding:10, fontWeight:'bold', borderRadius:10, marginBottom:20 },
});

export default MyComponent;

