import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';

const ApiReponse = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    fetch(apiUrl)
      .then(response => response.json())
      .then(responseData => {
        console.log('$$$', responseData);
        setData(responseData);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });

    console.log('$$$', data);
  }, []);

  const renderListItem = ({item}) => (
    <View style={{padding: 16}}>
      <Text>{item.title}</Text>
    </View>
  );

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderListItem}
      />
    </View>
  );
};

export default ApiReponse;
