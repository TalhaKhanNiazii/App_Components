import {ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import CardsPS from './CardsPS';

const MainScreen = () => {
  const data = [
    {
      title: 'Landscape',
      subtitle: 'Landscape images align with the horizon line.',
      country: 'Norway',
      details:
        'Norway is rugged and wild, with dramatic mountain peaks and deep glacial fjords. The defining feature of Norway is its mountains, which cover much of the landscape.',
      image: require('../../Assets/LandScapeImages/1.jpg'),
      icon: require('../../Assets/icons/moon.png'),
      style: {backgroundColor: 'white'},
    },
    {
      title: 'Landscape',
      subtitle: 'Landscape images align with the horizon line.',
      country: 'Pakistan',
      details:
        'Pakistan is rugged and wild, with dramatic mountain peaks and deep glacial fjords. The defining feature of Norway is its mountains, which cover much of the landscape.',
      image: require('../../Assets/LandScapeImages/2.jpg'),
      icon: require('../../Assets/icons/sun.png'),
      style: {backgroundColor: 'black'},
    },
    {
      title: 'Landscape',
      subtitle: 'Landscape images align with the horizon line.',
      country: 'USA',
      details:
        'USA is rugged and wild, with dramatic mountain peaks and deep glacial fjords. The defining feature of Norway is its mountains, which cover much of the landscape.',
      image: require('../../Assets/LandScapeImages/3.jpg'),
      icon: require('../../Assets/icons/moon.png'),
      style: {backgroundColor: 'white'},
    },
    {
      title: 'Landscape',
      subtitle: 'Landscape images align with the horizon line.',
      country: 'Switzerland',
      details:
        'Switzerland is rugged and wild, with dramatic mountain peaks and deep glacial fjords. The defining feature of Norway is its mountains, which cover much of the landscape.',
      image: require('../../Assets/LandScapeImages/4.png'),
      icon: require('../../Assets/icons/sun.png'),
      style: {backgroundColor: 'black'},
    },
  ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((item, index) => (
          <CardsPS data={item} id={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;
