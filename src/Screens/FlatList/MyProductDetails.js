import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {useCart} from './ProductContext';

const MyProductDetails = ({route}) => {
  const navigation = useNavigation();
  const {product} = route.params;
  const {cart, setCart} = useCart();
  // console.log(cart);
  const handleAddToCart = item => {
    // for beginner
    // cart.push(item)
    // for intermediate
    // setCart([...cart,item]);
    // Advance Method
     item.qty += 1;
    setCart(prev => [...prev, item]);
    console.log('New Product Added', cart)
  };
  const handleAddCount = product => {
    const x = cart.find(item => item.id == product.id);
    if (x) {
      x.qty += 1;
    }
    console.log('Add Product Quantity', cart)
  };
  const handleMinusCount = product => {
    const x = cart.find(item => item.id == product.id);
    if (x) {
      x.qty -= 1;
    }
    console.log('Minus Product Quantity', cart)
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainText}>{product.title}</Text>
      <View style={styles.detailsMainView}>
        <View style={styles.productViewUpper}>
          <Image
            resizeMode="stretch"
            style={styles.productImage}
            source={{uri: product.imageUri}}
          />
        </View>
        <View style={styles.productViewBottom}>
          <View style={styles.productRatingsView}>
            <Text style={styles.productRatings}>
              Ratings: {product.ratings}
            </Text>
            <Icon name="fire-flame-curved" color={'orange'} size={28} />
          </View>

          <Text style={styles.productDetails}>
            Details: {product.description}
          </Text>
          <View style={styles.productPriceBtnView}>
            <Text style={styles.productPrice}>Price: {product.price}</Text>
            {cart.find(item => item.id == product.id) ? (
              <>
                <TouchableOpacity
                  onPress={() => handleAddCount(product)}
                  activeOpacity={0.6}
                  style={styles.productCountBtn}>
                  <Text style={styles.productCountSign}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleMinusCount(product)}
                  activeOpacity={0.6}
                  style={styles.productCountBtn}>
                  <Text style={styles.productCountSign}>-</Text>
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => handleAddToCart(product)}
                style={styles.productButton}>
                <Text style={styles.productButtonTitle}>Add To Cart</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.backBtnView}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
            style={styles.backBtn}>
            <Icon2 name="back" color={'black'} size={24} />
            <Text style={styles.backBtnTitle}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MyProductDetails;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#e0ecff',
    alignItems: 'center',
    padding: 10,
  },
  mainText: {
    fontSize: 22,
    fontFamily: 'PlaypenSans-Regular',
    margin: 10,
    color: 'black',
  },
  detailsMainView: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 20,
    elevation: 10,
    borderRadius: 15,
    //   borderBottomLeftRadius:50,
    borderBottomRightRadius: 100,
  },
  productViewUpper: {
    width: '100%',
    // backgroundColor: 'red',
    flex: 0.5,
    borderRadius: 15,
    elevation: 20,
  },
  productImage: {width: '100%', height: '100%'},
  productViewBottom: {
    alignItems: 'center',
    padding: 10,
    // backgroundColor: 'pink',
    flex: 0.4,
    width: '100%',
  },
  productPriceBtnView: {
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // backgroundColor: 'red',
    width: '100%',
  },
  productPrice: {
    alignSelf: 'flex-start',
    color: '#0062ff',
    fontSize: 28,
    fontFamily: 'PlaypenSans-Regular',
    width: '60%',
    // backgroundColor: 'green',
  },
  productCountBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: '10%',
    backgroundColor: '#0062ff',
    borderRadius: 10,
  },
  productCountSign: {fontSize: 25, lineHeight: 25, fontWeight: 'bold'},
  productButton: {
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    height: 30,
    width: 90,
    backgroundColor: '#0062ff',
  },
  productButtonTitle: {color: 'white', fontWeight: '600'},
  productDetails: {
    alignSelf: 'flex-start',
    color: 'black',
    fontSize: 16,
    fontFamily: 'PlaypenSans-Regular',
    // backgroundColor:'green',
    marginTop: 10,
  },
  productRatings: {
    alignSelf: 'flex-start',
    color: 'black',
    fontSize: 28,
    fontFamily: 'PlaypenSans-Regular',
  },
  productRatingsView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 20,
    // backgroundColor:'red',
    width: '60%',
    height: 50,
  },
  productRatings: {
    fontSize: 26,
    color: 'black',
    fontFamily: 'PlaypenSans-Medium',
    marginRight: 10,
  },
  backBtnView: {
    alignSelf: 'flex-start',
    flex: 0.1,
    width: '70%',
    // backgroundColor: 'red',
    justifyContent: 'center',
    marginLeft: 20,
  },
  backBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: '42%',
    backgroundColor: 'skyblue',
    elevation: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  backBtnTitle: {marginLeft: 10, fontSize: 22, color: 'black'},
});
