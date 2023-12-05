import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const App = () => {
  const [loading, setLoading] = useState(false);

  const showLoader = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000); // Hide the loader after 4 seconds
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
        overlayColor={'rgba(48, 48, 48, 0.3)'} // Color of the overlay background
        color={'black'} // Color of the spinner
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
    backgroundColor: 'white',
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
