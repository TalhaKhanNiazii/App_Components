import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import AnimatedLottieView from 'lottie-react-native';

const App = () => {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 3000);
  }, []);
  return (
    <>
      {showLoader ? (
        <AnimatedLottieView
          style={Styles.lottieView}
          autoPlay={showLoader}
          loop
          source={require('../../../Assets/Loader/Animation - 1699464281054.json')}
        />
      ) : (
        <View style={Styles.mainContainer}>
          <Text style={Styles.text}>Welcome!</Text>
        </View>
      )}
    </>
  );
};

export default App;

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  lottieView: {flex: 1, backgroundColor: 'rgba(0, 0, 0,0.1)', zIndex: 1},
  text: {
    fontSize: 36,
    color: 'black',
    fontFamily: 'OpenSans_SemiCondensed-Medium',
  },
});
