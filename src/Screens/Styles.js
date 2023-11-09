import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  mainTxt: {
    alignSelf: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#4287f5',
    marginVertical: 20,
  },
  itemsView: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 10,
  },
  itemsTitle: {alignSelf: 'center', fontSize: 30, color: 'orange'},
  separator: {
    height: 1,
    backgroundColor: 'gray',
  },
  header: {
    color: '#4287f5',
    fontSize: 28,
    fontWeight: 'bold',
    padding: 15,
  },
  loader: {
    marginVertical: 20,
  },
});
export default Styles;
