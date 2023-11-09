import React from 'react';
import {View, Image, StatusBar, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';

const {width, height} = Dimensions.get('window');

const FunctionalSwiper = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image
        source={require('../../Assets/images/profile.png')}
        style={styles.imgBackground}
      />
      <Swiper
        style={styles.wrapper}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        paginationStyle={{
          bottom: 15,
        }}
        loop={false}>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require('../../Assets/images/strawberry.jpg')}
            resizeMode="cover"
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require('../../Assets/images/oranges.jpg')}
            resizeMode="cover"
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require('../../Assets/images/apple.jpg')}
          />
        </View>
      </Swiper>
    </View>
  );
};

export default FunctionalSwiper;

const styles = {
  wrapper: {
    // backgroundColor: '#f00'
  },
  slide: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
  },
  dot: {
    backgroundColor: 'rgba(255,255,255,.3)',
    width: 13,
    height: 13,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 13,
    height: 13,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7,
  },
  imgBackground: {
    width,
    height,
    backgroundColor: 'transparent',
    position: 'absolute',
    opacity: 0.5,
  },
  image: {
    // marginTop: 200,
    width,
    height: height / 1.1,
  },
};
