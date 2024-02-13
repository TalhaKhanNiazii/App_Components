import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'tan',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 30,
    marginBottom: 20,
    color: 'black',
    fontFamily: 'PlaypenSans-Medium',
  },
  btnText: {
    fontSize: 18,
    color: 'blue',
    borderBottomColor: 'blue',
    borderBottomWidth: 2,
    fontFamily: 'PlaypenSans-Medium',
  },
  dataView: {marginVertical: 30},
  dataText: {
    fontSize: 22,
    color: 'black',
    fontFamily: 'PlaypenSans-Medium',
    margin: 5,
  },
  textInputView: {width: '100%', alignItems: 'center', marginVertical: 30},
  textInput: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 10,
    paddingHorizontal: 20,
    elevation: 10,
    margin: 10,
  },
});
