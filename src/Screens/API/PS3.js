import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {
  axiosGetMethod,
  axiosPostMethod,
  axiosPutMethod,
  axiosPatchMethod,
  axiosDeleteMethod,
} from './PS3Apis';

const PS3 = () => {
  useEffect(() => {
    myApiResponse();
  }, []);

  const data = {
    title: 'Ali',
    userId: 101,
    title: 'Talha Khan',
    body: 'He is a mobile app developer..',
  };

  const myApiResponse = async () => {
    // const response = await axiosGetMethod();
    // const response = await axiosPostMethod(data);
    // const response = await axiosPutMethod(10, data);
    // const response = await axiosPatchMethod(11, data);
    const response = await axiosDeleteMethod(12);
    console.log('API Response', response);
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 28, fontWeight: 'bold'}}>
        Axios API's Testing
      </Text>
    </View>
  );
};

export default PS3;
