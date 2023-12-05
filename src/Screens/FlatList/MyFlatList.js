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
} from 'react-native';
import React, {useState} from 'react';
import {fruitsData} from '../../Constants/FruitesData';
import Icon from 'react-native-vector-icons/Entypo';

const MyFlatList = () => {
  const [data, setData] = useState(fruitsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

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

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainText}>My Fruites FlatList</Text>
      <View style={styles.searchView}>
        <TextInput
          value={search}
          onChangeText={txt => setSearch(txt)}
          style={styles.searchInput}
          placeholder="Search food here .."
        />
        {search && (
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.searchIcon}
            onPress={() => {
              setSearch('');
              setData(fruitsData);
            }}>
            <Icon color={'black'} name="cross" size={32} />
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        data={
          search === ''
            ? data.slice(0, endIndex)
            : data.filter(item =>
                item.title.toLowerCase().includes(search.toLowerCase()),
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
            onPress={() => Alert.alert(item.title, item.details)}
            key={index}
            activeOpacity={0.7}
            style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Image
              style={styles.cardImage}
              resizeMode="center"
              source={item.image}
            />
          </TouchableOpacity>
        )}
      />
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
    height: 120,
    width: '90%',
    margin: 10,
    elevation: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  cardTitle: {
    fontSize: 30,
    fontFamily: 'PlaypenSans-Regular',
    color: 'black',
  },
  cardImage: {height: 100, width: 100},
  searchView: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    // alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    margin: 10,
    elevation: 10,
    // position: 'relative',
  },
  searchInput: {
    // backgroundColor: 'red',
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 50,
  },
  searchIcon: {position: 'absolute', right: 10},
});
