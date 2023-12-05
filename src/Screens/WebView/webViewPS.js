import {
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';
import {useRef} from 'react';

const webViewPS = () => {
  const webView = useRef();
  return (
    <View style={Styles.mainContainer}>
      <StatusBar backgroundColor={'orange'} barStyle={'dark-content'} />
      <WebView
        style={Styles.webView}
        // ref={webView}
        source={{uri: 'https://reactnative.dev/'}}
      />
      <View style={Styles.footer}>
        <TouchableOpacity
          onPress={() => webView.current?.goBack()}
          activeOpacity={0.8}
          style={Styles.btnStyle}>
          <Text style={Styles.btnText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => webView.current?.reload()}
          activeOpacity={0.8}
          style={Styles.btnStyle}>
          <Text style={Styles.btnText}>Reload</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => webView.current?.goForward()}
          activeOpacity={0.8}
          style={Styles.btnStyle}>
          <Text style={Styles.btnText}>Forward</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default webViewPS;

const Styles = StyleSheet.create({
  mainContainer: {flex: 1},
  webView: {flex: 1},
  footer: {
    flex: 0.1,
    flexDirection: 'row',
    backgroundColor: 'orange',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btnStyle: {
    height: 40,
    width: '25%',
    borderRadius: 12,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'PlaypenSans-SemiBold',
  },
});
