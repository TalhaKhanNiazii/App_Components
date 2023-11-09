import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
function SwipperPS() {
  return (
    <View style={{flex: 0.3}}>
      <Swiper
        style={styles.wrapper}
        showsButtons={true} // Show navigation buttons
        loop={true} // Enable looping
        autoplay={true} // Enable autoplay
        autoplayTimeout={3} // Set autoplay interval to 3 seconds
        paginationStyle={styles.pagination} // Customize pagination style
        dotStyle={styles.dot} // Style for the pagination dots
        activeDotStyle={styles.activeDot} // Style for the active pagination dot
      >
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={{...styles.slide1, backgroundColor: 'green'}}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={{...styles.slide1, backgroundColor: 'aqua'}}>
          <Text style={{...styles.text, color: 'black'}}>And simple</Text>
        </View>
      </Swiper>
    </View>
  );
}
export default SwipperPS;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  pagination: {
    bottom: 10,
  },
  dot: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 3,
  },
  activeDot: {
    backgroundColor: 'white',
    width: 20,
    height: 20,
    borderRadius: 10,
    margin: 3,
  },
});
