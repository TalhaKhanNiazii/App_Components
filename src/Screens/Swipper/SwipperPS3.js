import React from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';

const {width, height} = Dimensions.get('window');

const renderPagination = (index, total) => {
  console.log('Details : ', index, total);
  return (
    <View style={styles.paginationStyle}>
      <Text style={{color: 'grey'}}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  );
};

const FunctionalSwiper = () => {
  return (
    <Swiper
      style={styles.wrapper}
      renderPagination={renderPagination}
      loop={true}>
      <View style={styles.slide}>
        <Text style={{alignSelf: 'center', fontSize: 20, margin: 10}}>
          Aussie tourist dies at Bali hotel
        </Text>
        <Image
          style={styles.image}
          source={require('../../Assets/images/apple.jpg')}
        />
      </View>
      <View style={styles.slide}>
        <Text style={{alignSelf: 'center', fontSize: 20, margin: 10}}>
          Aussie tourist dies at Bali hotel
        </Text>
        <Image
          style={styles.image}
          source={require('../../Assets/images/banana.jpg')}
        />
      </View>
      <View style={styles.slide}>
        <Text style={{alignSelf: 'center', fontSize: 20, margin: 10}}>
          Aussie tourist dies at Bali hotel
        </Text>
        <Image
          style={styles.image}
          source={require('../../Assets/images/grapes.jpg')}
        />
      </View>
      <View style={styles.slide}>
        <Text style={{alignSelf: 'center', fontSize: 20, margin: 10}}>
          Aussie tourist dies at Bali hotel
        </Text>
        <Image
          style={styles.image}
          source={require('../../Assets/images/mango.jpg')}
        />
      </View>
    </Swiper>
  );
};

const styles = {
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  image: {
    width: width,
    height: height / 2,
    // flex: 1,
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  paginationText: {
    color: 'black',
    fontSize: 20,
  },
};

export default FunctionalSwiper;
