// import {View, Text, StyleSheet, ScrollView} from 'react-native';
// import React, {useState} from 'react';
// import {RadioButton} from 'react-native-paper';
// // import {useState} from 'react';
// const RadioButtonPS = () => {
//   const [checked, setChecked] = useState('');
//   const data = [
//     {key: 1, subject: 'Maths'},
//     {key: 2, subject: 'Chemistry'},
//     {key: 3, subject: 'Computer'},
//     {key: 4, subject: 'Physics'},
//   ];
//   const options = [
//     {key: 1, option: 'Agree'},
//     {key: 2, option: 'Neutral'},
//     {key: 3, option: 'Disagree'},
//   ];
//   console.log(checked);
//   return (
//     <View>
//       <Text style={Styles.mainText}>Radio Button Practice Set</Text>
//       <ScrollView>
//         {data.map(item => (
//           <View style={{margin: 50}} key={item.key}>
//             <Text style={{fontSize: 28}}>{item.subject}</Text>
//             {options.map(item => (
//               <View
//                 style={{alignItems: 'center', flexDirection: 'row'}}
//                 key={item.key}>
//                 <RadioButton
//                   value={item.option}
//                   status={checked == item.option ? 'checked' : 'unchecked'}
//                   onPress={() => setChecked(item.option)}
//                 />
//                 <Text>{item.option}</Text>
//               </View>
//             ))}
//           </View>
//         ))}
//         {/* <RadioButton
//         value="first"
//         status={checked == 'first' ? 'checked' : 'unchecked'}
//         onPress={() => setChecked('first')}
//       />
//       <RadioButton
//         value="second"
//         status={checked == 'second' ? 'checked' : 'unchecked'}
//         onPress={() => setChecked('second')}
//       /> */}
//       </ScrollView>
//     </View>
//   );
// };

// export default RadioButtonPS;

// const Styles = StyleSheet.create({
//   mainText: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     alignSelf: 'center',
//     marginTop: 10,
//     color: 'green',
//   },
// });
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {RadioButton} from 'react-native-paper';

const RadioButtonPS = () => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const data = [
    {key: 1, subject: 'Maths'},
    {key: 2, subject: 'Chemistry'},
    {key: 3, subject: 'Computer'},
    {key: 4, subject: 'Physics'},
  ];

  const options = [
    {key: 1, option: 'Agree'},
    {key: 2, option: 'Neutral'},
    {key: 3, option: 'Disagree'},
  ];

  const handleOptionChange = (subject, option) => {
    setSelectedOptions(prevSelectedOptions => ({
      ...prevSelectedOptions,
      [subject]: option,
    }));
  };

  console.log(selectedOptions);

  return (
    <View>
      <Text style={Styles.mainText}>Radio Button Practice Set</Text>
      <ScrollView>
        {data.map(item => (
          <View style={{margin: 50}} key={item.key}>
            <Text style={{fontSize: 28}}>{item.subject}</Text>
            {options.map(option => (
              <View
                style={{alignItems: 'center', flexDirection: 'row'}}
                key={option.key}>
                <RadioButton
                  value={option.option}
                  status={
                    selectedOptions[item.subject] === option.option
                      ? 'checked'
                      : 'unchecked'
                  }
                  onPress={() =>
                    handleOptionChange(item.subject, option.option)
                  }
                />
                <Text>{option.option}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default RadioButtonPS;

const Styles = StyleSheet.create({
  mainText: {
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
    color: 'green',
  },
});
