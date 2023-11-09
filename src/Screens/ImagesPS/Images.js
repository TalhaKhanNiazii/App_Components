import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import React from 'react';
import {fruitsData} from '../../Components/FlatListData';

const ImagesData = () => {
  return (
    <View style={Styles.mainContainer}>
      <Text style={Styles.mainText}>Fruits</Text>
      <ScrollView>
        <View style={Styles.imagesView}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              Alert.alert(fruitsData[0].title, fruitsData[0].details)
            }>
            <Image style={Styles.image} source={fruitsData[0].image} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              Alert.alert(fruitsData[1].title, fruitsData[1].details)
            }>
            <Image
              resizeMode="center"
              style={Styles.image}
              source={fruitsData[1].image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              Alert.alert(fruitsData[2].title, fruitsData[2].details)
            }>
            <Image style={Styles.image} source={fruitsData[2].image} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              Alert.alert(fruitsData[3].title, fruitsData[3].details)
            }>
            <Image style={Styles.image} source={fruitsData[3].image} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              Alert.alert(fruitsData[4].title, fruitsData[4].details)
            }>
            <Image style={Styles.image} source={fruitsData[4].image} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              Alert.alert(fruitsData[5].title, fruitsData[5].details)
            }>
            <Image style={Styles.image} source={fruitsData[5].image} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              Alert.alert(fruitsData[0].title, fruitsData[0].details)
            }>
            <Image style={Styles.image} source={fruitsData[0].image} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              Alert.alert(fruitsData[3].title, fruitsData[3].details)
            }>
            <Image style={Styles.image} source={fruitsData[3].image} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              Alert.alert(fruitsData[1].title, fruitsData[1].details)
            }>
            <Image
              resizeMode="center"
              style={Styles.image}
              source={fruitsData[1].image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              Alert.alert(fruitsData[2].title, fruitsData[2].details)
            }>
            <Image style={Styles.image} source={fruitsData[2].image} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              Alert.alert(fruitsData[3].title, fruitsData[3].details)
            }>
            <Image style={Styles.image} source={fruitsData[3].image} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              Alert.alert(fruitsData[4].title, fruitsData[4].details)
            }>
            <Image style={Styles.image} source={fruitsData[4].image} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              Alert.alert(fruitsData[5].title, fruitsData[5].details)
            }></TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ImagesData;

const Styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: '#e3e3ff', padding: 10},
  mainText: {
    fontSize: 30,
    color: 'purple',
    backgroundColor: 'white',
    width: '50%',
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 15,
  },
  imagesView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  image: {
    height: 170,
    width: 170,
    borderRadius: 15,
    marginTop: 25,
  },
});
