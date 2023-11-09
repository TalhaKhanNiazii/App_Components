import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const App = () => {
  const [loading, setLoading] = useState(false);

  const showLoader = () => {
    setLoading(true);

    // Simulate a network request with a delay
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Hide the loader after 3 seconds
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>React Native Loader Example</Text>
      <Button title="Show Loader" onPress={showLoader} />
      <Spinner
        visible={loading}
        textContent={'Loading...'} // Custom text to display
        textStyle={styles.spinnerText} // Style for the text
        animation={'fade'} // Type of animation: 'none', 'slide', or 'fade'
        // overlayColor={'rgba(0, 0, 0, 0.7'} // Color of the overlay background
        color={'#fff'} // Color of the spinner
        size={50} // Size of the spinner: 'small', 'large', or a number
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  spinnerText: {
    color: '#fff',
    fontFamily: 'OpenSans-ExtraBoldItalic',
    fontSize: 16,
  },
});

export default App;
