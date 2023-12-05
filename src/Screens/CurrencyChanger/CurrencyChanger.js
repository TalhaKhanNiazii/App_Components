// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   FlatList,
//   TouchableOpacity,
// } from 'react-native';
// import React, {useState} from 'react';
// import {currencyByRupee} from '../../Constants/CurrencyData';

// const CurrencyChanger = () => {
//   const [currency, setCurrency] = useState(0);
//   const [convertedCurrency, setConvertedCurrency] = useState(null);
//   const handleCalculate = item => {
//     if (currency === 0) {
//       alert('Please enter value in PKR!');
//     } else {
//       let x = currency * Number(item.value);
//       setConvertedCurrency([item.symbol, '  ', x.toFixed(2)]);
//     }
//   };
//   return (
//     <View style={styles.mainContainer}>
//       <Text style={styles.mainHeading}>Currency Changer App</Text>
//       <TextInput
//         value={currency}
//         onChangeText={txt => setCurrency(txt)}
//         style={styles.txtInput}
//         maxLength={12}
//         keyboardType="phone-pad"
//         placeholder="Enter value in PKR"
//       />
//       <View style={styles.resultsView}>
//         <Text style={styles.resultsTxt}>{convertedCurrency}</Text>
//       </View>
//       <FlatList
//         showsVerticalScrollIndicator={false}
//         numColumns={2}
//         data={currencyByRupee}
//         renderItem={({item}) => (
//           <TouchableOpacity
//             onPress={() => handleCalculate(item)}
//             // activeOpacity={0.7}
//             style={styles.card}>
//             <Text style={styles.cardText}>{item.name}</Text>
//             <Text style={styles.cardFlag}>{item.flag}</Text>
//           </TouchableOpacity>
//         )}
//         keyExtractor={item => item.name}
//       />
//     </View>
//   );
// };

// export default CurrencyChanger;

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: 'white',
//     padding: 10,
//   },
//   mainHeading: {
//     alignSelf: 'center',
//     textAlign: 'center',
//     fontSize: 36,
//     fontFamily: 'OpenSans_Condensed-BoldItalic',
//     color: 'black',
//     marginVertical: 20,
//   },
//   txtInput: {
//     width: '90%',
//     height: 50,
//     marginVertical: 10,
//     borderRadius: 12,
//     alignSelf: 'center',
//     paddingHorizontal: 10,
//     backgroundColor: '#ffffff',
//     elevation: 10,
//   },
//   card: {
//     alignItems: 'center',
//     width: 150,
//     height: 100,
//     backgroundColor: '#edfffc',
//     borderRadius: 10,
//     margin: 10,
//     padding: 10,
//     elevation: 5,
//   },
//   cardText: {
//     fontSize: 20,
//     fontFamily: 'OpenSans_Condensed-Bold',
//     color: 'black',
//   },
//   cardFlag: {fontSize: 25, marginTop: 5},
//   resultsView: {
//     height: 100,
//     width: '90%',
//     backgroundColor: '#c7f8ff',
//     marginVertical: 20,
//     borderRadius: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   resultsTxt: {
//     color: 'black',
//     fontSize: 40,
//     fontFamily: 'OpenSans_Condensed-Bold',
//   },
// });

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {currencyByRupee} from '../../Constants/CurrencyData';

const CurrencyChanger = () => {
  const [currency, setCurrency] = useState(0);
  const [convertedCurrency, setConvertedCurrency] = useState(undefined);
  const handleClick = item => {
    if (currency === 0) {
      alert('Please Enter Value in PKR!');
    } else {
      let x = currency * Number(item.value);
      setConvertedCurrency(item.symbol + ' ' + x.toFixed(2));
    }
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Currency Converter</Text>
      <TextInput
        maxLength={12}
        value={currency}
        onChangeText={txt => setCurrency(txt)}
        keyboardType="phone-pad"
        style={styles.txtInput}
        placeholder="Enter Value in PKR .."
      />
      <Text style={styles.convertedCurrencyStyle}>{convertedCurrency}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={currencyByRupee}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => handleClick(item)}
            style={styles.card}
            activeOpacity={0.7}
            key={index}>
            <Text style={styles.cardText}>{item.name}</Text>
            <Text style={styles.cardFlag}>{item.flag}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default CurrencyChanger;

const styles = StyleSheet.create({
  mainContainer: {flex: 1, alignItems: 'center'},
  mainHeader: {
    fontSize: 26,
    margin: 10,
    fontFamily: 'OpenSans-SemiBoldItalic',
  },
  txtInput: {
    backgroundColor: 'white',
    width: '80%',
    margin: 10,
    elevation: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  convertedCurrencyStyle: {
    height: 100,
    width: '80%',
    backgroundColor: 'skyblue',
    borderRadius: 10,
    margin: 10,
    textAlign: 'center',
    fontSize: 30,
    lineHeight: 100,
    fontFamily: 'OpenSans-SemiBoldItalic',
    color: 'black',
  },
  card: {
    height: 120,
    width: 120,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 10,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'OpenSans-SemiBoldItalic',
  },
  cardFlag: {fontSize: 28},
});
