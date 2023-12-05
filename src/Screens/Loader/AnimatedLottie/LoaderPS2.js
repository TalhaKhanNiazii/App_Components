import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {isPlaying ? (
        <>
          <AnimatedLottieView
            source={require('../../../Assets/Loader/Animation - 1699464281054.json')}
            autoPlay={true}
            loop={true}
            speed={1.5}
            style={styles.animation}
          />
          <View style={styles.btnStyle}>
            <Button
              title={isPlaying ? 'Pause Animation' : 'Play Animation'}
              onPress={toggleAnimation}
            />
          </View>
        </>
      ) : (
        <View style={styles.container}>
          <Text style={styles.text}>Lottie Animation Example</Text>

          <Button
            title={isPlaying ? 'Pause Animation' : 'Play Animation'}
            onPress={toggleAnimation}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  btnStyle: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    bottom: 20,
    width: '60%',
    alignSelf: 'center',
  },
  animation: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    // width: 200,
    // height: 200,
  },
});

export default App;
