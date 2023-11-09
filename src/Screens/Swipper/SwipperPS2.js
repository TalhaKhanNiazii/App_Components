import React from 'react';
import {Text, View, Image} from 'react-native';
import Swiper from 'react-native-swiper';

const FunctionalSwiper = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 0.3}}>
        <Swiper style={styles.wrapper} horizontal={false}>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
      </View>
      <View style={{flex: 0.7}}>
        <Swiper
          style={styles.wrapper}
          onMomentumScrollEnd={(e, state, context) =>
            console.log('index:', state.index)
          }
          //   the onMomentumScrollEnd event handler is called when the swiper finishes transitioning to a new slide. It logs the index of the new slide to the console. This can be useful for tracking which slide the user is currently viewing or for triggering specific actions based on the active slide.
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}>
          <View style={styles.slide}>
            <Text style={styles.text2}>Aussie tourist dies at Bali hotel</Text>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../../Assets/images/apple.jpg')}
            />
          </View>
          <View style={styles.slide}>
            <Text style={styles.text2}>Big lie behind Nine’s new show</Text>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../../Assets/images/banana.jpg')}
            />
          </View>
          <View style={styles.slide}>
            <Text style={styles.text2}>Why Stone split from Garfield</Text>

            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../../Assets/images/grapes.jpg')}
            />
          </View>
          <View style={styles.slide}>
            <Text style={styles.text2}>Learn from Kim K to land that job</Text>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../../Assets/images/mango.jpg')}
            />
          </View>
        </Swiper>
      </View>
    </View>
  );
};

export default FunctionalSwiper;

const styles = {
  container: {
    flex: 1,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text2: {
    color: 'black',
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },

  image: {
    // flex: 1,
    height: '60%',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 20,
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 12,
    height: 12,
    borderRadius: 6,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: 'orange',
    width: 20,
    height: 20,
    borderRadius: 10,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
};
