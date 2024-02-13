import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {
  fetchGetMethod,
  fetchPostMethod,
  fetchPutMethod,
  fetchPatchMethod,
  fetchDeleteMethod,
} from './PS2Apis';

const PS2 = () => {
  useEffect(() => {
    myApiResponse();
  }, []);
  const data = {
    title: 'Ali',
    userId: 10,
  };
  const myApiResponse = async () => {
    // const response = await fetchGetMethod();
    // const response = await fetchPostMethod(data);
    // const response = await fetchPutMethod(1, data);
    // const response = await fetchPatchMethod(1, data);
    const response = await fetchDeleteMethod(1);
    console.log('API Response', response);
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 28, fontWeight: 'bold'}}>
        Fetch API's Testing
      </Text>
    </View>
  );
};

export default PS2;
