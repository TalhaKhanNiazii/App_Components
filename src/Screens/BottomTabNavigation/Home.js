import { View, Text } from 'react-native'
import React from 'react'
import styles from './Styles'
import Products from '../../json/Products.json'

const Home = () => {
//  Products.map((item)=> console.log(item))
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainText}>Products</Text>
    </View>
  )
}

export default Home