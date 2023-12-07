import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {fruitsData} from '../../Constants/FruitesData';
import productsData from '../../json/Products.json';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/FontAwesome6';

const MyFlatList = () => {
  const [data, setData] = useState(productsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);

  const ITEMS_PER_PAGE = 6;
  let startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  let endIndex = startIndex + ITEMS_PER_PAGE;

  const handleLoadMore = () => {
    if (endIndex < fruitsData.length) {
      setLoading(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setLoading(false);
      }, 1000);
    }
  };
  const flatListRef = useRef();
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainText}>My Products FlatList</Text>
      <View style={styles.searchMainView}>
        <View style={styles.searchView}>
          <View style={styles.searchIcon}>
            <Icon2 name="search" color={'black'} size={30} />
          </View>
          <TextInput
            value={search}
            onChangeText={txt => setSearch(txt)}
            style={styles.searchInput}
            placeholder="Search food here .."
          />
          {search && (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.crossIcon}
              onPress={() => {
                setSearch('');
                setData(fruitsData);
              }}>
              <Icon color={'black'} name="cross" size={32} />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          onPress={() => setShowModal(true)}
          activeOpacity={0.7}>
          <Icon3 name="sliders" color={'black'} size={30} />
        </TouchableOpacity>
      </View>
      <FlatList
        ref={flatListRef}
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        data={
          search === ''
            ? data.slice(0, endIndex)
            : data.filter(
                item =>
                  item.title.toLowerCase().includes(search.toLowerCase()) ||
                  item.description.toLowerCase().includes(search.toLowerCase()),
              )
        }
        onEndReachedThreshold={1}
        onEndReached={handleLoadMore}
        ListFooterComponent={
          loading && (
            <ActivityIndicator
              style={{marginVertical: 20}}
              color={'#4287f5'}
              size={50}
            />
          )
        }
        renderItem={({item, index}) => (
          <TouchableOpacity
            disabled={true}
            onPress={() => Alert.alert(item.title, item.details)}
            key={index}
            activeOpacity={0.7}
            style={styles.card}>
            <View style={styles.cardInsideView1}>
              <Text numberOfLines={1} style={styles.cardTitle}>
                {item.title}
              </Text>
              <Text style={styles.cardPrice}>$ {item.price}</Text>
              <View style={styles.cardRatingsView}>
                <Text style={styles.cardRatings}>Ratings: {item.ratings}</Text>
                <Icon3 name="fire-flame-curved" color={'orange'} size={24} />
              </View>
            </View>
            <View style={styles.cardImageView}>
              <Image
                style={styles.cardImage}
                resizeMode="center"
                source={{uri: item.imageUri}}
              />
            </View>
          </TouchableOpacity>
        )}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        hardwareAccelerated={true}
        onRequestClose={() => setShowModal(!showModal)}>
        <View style={styles.modalMainView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => {
                setShowModal(!showModal);
                let tempList = data.sort((a, b) =>
                  a.title.localeCompare(b.title),
                );
                setData(tempList);
              }}
              activeOpacity={0.7}
              style={styles.modalBtn}>
              <Text style={styles.modalBtnText}>Alphabetical Order</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setShowModal(!showModal);
                let tempList = data.sort((a, b) => a.price - b.price);
                setData(tempList);
              }}
              activeOpacity={0.7}
              style={styles.modalBtn}>
              <Text style={styles.modalBtnText}>Low To High</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setShowModal(!showModal);
                let tempList = data.sort((a, b) => b.price - a.price);
                setData(tempList);
              }}
              activeOpacity={0.7}
              style={styles.modalBtn}>
              <Text style={styles.modalBtnText}>High To Low</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setShowModal(!showModal);
                let tempList = data.sort((a, b) => b.ratings - a.ratings);
                setData(tempList);
              }}
              activeOpacity={0.7}
              style={styles.modalBtn}>
              <Text style={styles.modalBtnText}>Sort By Rating</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MyFlatList;

const styles = StyleSheet.create({
  mainContainer: {flex: 1, alignItems: 'center'},
  mainText: {
    fontSize: 22,
    fontFamily: 'PlaypenSans-Regular',
    margin: 10,
    color: 'black',
  },
  flatList: {
    width: '100%',
  },
  card: {
    alignSelf: 'center',
    backgroundColor: 'white',
    height: 150,
    width: '90%',
    margin: 10,
    elevation: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  cardInsideView1: {
    width: '60%',
    height: 100,
    overflow: 'scroll',
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: 'PlaypenSans-Regular',
    color: 'black',
    height: 25,
    lineHeight: 25,
  },
  cardPrice: {
    fontFamily: 'PlaypenSans-Medium',
    fontSize: 28,
    color: '#21aaff',
    height: 50,
    lineHeight: 50,
  },
  cardRatingsView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cardRatings: {
    fontSize: 20,
    color: 'black',
    height: 25,
    lineHeight: 25,
    fontFamily: 'PlaypenSans-Medium',
    marginRight: 10,
  },
  cardImageView: {
    width: '30%',
    height: 100,
    borderRadius: 10,
    alignItems: 'center',
  },
  cardImage: {height: 100, width: 100, borderRadius: 10},
  searchMainView: {
    // backgroundColor: 'pink',
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  searchView: {
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    // alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    marginVertical: 10,
    elevation: 10,
    // position: 'relative',
  },
  searchInput: {
    // backgroundColor: 'red',
    borderRadius: 10,
    paddingLeft: 50,
    paddingRight: 50,
  },
  crossIcon: {position: 'absolute', right: 10},
  searchIcon: {position: 'absolute', left: 10},
  modalMainView: {flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)'},
  modalView: {
    flex: 0.5,
    width: '80%',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 15,
    elevation: 15,
    top: '25%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  modalBtn: {
    flex: 0.15,
    width: '90%',
    backgroundColor: '#def2ff',
    borderRadius: 10,
    borderStyle: 'dashed',
    borderWidth: 1.5,
    borderColor: '#009dff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 1,
  },
  modalBtnText: {
    color: '#009dff',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
