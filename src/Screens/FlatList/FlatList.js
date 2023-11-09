import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import Styles from '../Styles';
import {fruitsData} from '../../Components/FlatListData';

const ITEMS_PER_PAGE = 5;
const MyFlatList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const handleLoadMore = () => {
    if (endIndex < fruitsData.length) {
      setIsLoadingMore(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsLoadingMore(false);
      }, 1000); // Simulate loading time
    }
  };
  //   const fruitsData = [
  //     {
  //       title: 'Apple',
  //       image: require('../Assets/images/apple.jpg'),
  //       details: `Type: Pomaceous fruit \n
  // Color: Varies (red, green, yellow) \n
  // Taste: Sweet or tart, depending on variety \n
  // Texture: Firm and crisp \n
  // Usage: Eaten fresh, used in baking and cooking`,
  //     },
  //     {
  //       title: 'Banana',
  //       image: require('../Assets/images/banana.jpg'),
  //       details: `Type: Berry \n
  // Color: Yellow when ripe \n
  // Taste: Sweet and slightly tangy \n
  // Texture: Soft and creamy \n
  // Usage: Eaten fresh, added to breakfast dishes, baked into goods`,
  //     },
  //     {
  //       title: 'Grapes',
  //       image: require('../Assets/images/grapes.jpg'),
  //       details: `Type: Berry \n
  // Color: Varies (green, red, black) \n
  // Taste: Sweet or tart, depending on variety \n
  // Texture: Smooth skin, juicy interior \n
  // Usage: Eaten as a snack, used in wine-making`,
  //     },
  //     {
  //       title: 'Mango',
  //       image: require('../Assets/images/mango.jpg'),
  //       details: `Type: Stone fruit \n
  // Color: Various shades of yellow, orange, and red \n
  // Taste: Sweet and juicy \n
  // Texture: Smooth, sometimes fibrous near the pit \n
  // Usage: Eaten fresh, blended into smoothies, used in desserts`,
  //     },
  //     {
  //       title: 'Orange',
  //       image: require('../Assets/images/oranges.jpg'),
  //       details: `Type: Citrus fruit \n
  // Color: Orange \n
  // Taste: Sweet and tangy \n
  // Texture: Juicy segments enclosed by a peel \n
  // Usage: Eaten fresh, juiced, used in cooking and beverages`,
  //     },
  //     {
  //       title: 'Strawberry',
  //       image: require('../Assets/images/strawberry.jpg'),
  //       details: `Type: Aggregate fruit \n
  // Color: Bright red \n
  // Taste: Sweet and slightly tangy \n
  // Texture: Soft, with small seeds on the surface \n
  // Usage: Eaten fresh, used in desserts, jams, and salads`,
  //     },
  //   ];
  const handleRenderItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() => Alert.alert(`${item.title} Details :`, item.details)}>
      <View style={Styles.itemsView}>
        <Text style={Styles.itemsTitle}>{item.title}</Text>
        <Image
          resizeMode="contain"
          style={{width: 100, height: 100}}
          source={item.image}
        />
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={Styles.mainContainer}>
      <Text style={Styles.mainTxt}>My FlatList</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={fruitsData.slice(0, endIndex)}
        renderItem={handleRenderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={1}
        ListFooterComponent={
          isLoadingMore && (
            <ActivityIndicator
              color={'#4287f5'}
              size={50}
              style={Styles.loader}
            />
          )
        }
      />
    </View>
  );
};

export default MyFlatList;
