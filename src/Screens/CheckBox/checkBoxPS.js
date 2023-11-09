import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Checkbox} from 'react-native-paper';

const CheckboxExample = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const items = [
    {id: 1, label: 'Item 1'},
    {id: 2, label: 'Item 2'},
    {id: 3, label: 'Item 3'},
    {id: 4, label: 'Item 4'},
  ];

  const handleItemToggle = itemId => {
    if (checkedItems.includes(itemId)) {
      setCheckedItems(checkedItems.filter(item => item !== itemId));
    } else {
      setCheckedItems([...checkedItems, itemId]);
    }
  };

  console.log(checkedItems);

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Checkbox Example</Text>
      <ScrollView>
        {items.map(item => (
          <View style={styles.checkboxContainer} key={item.id}>
            <Checkbox
              status={checkedItems.includes(item.id) ? 'checked' : 'unchecked'}
              color="blue"
              onPress={() => handleItemToggle(item.id)}
              disabled={item.id === 3} // Example: Disable the third item
            />
            <Text style={styles.label}>{item.label}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CheckboxExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
    color: 'green',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    marginLeft: 10,
  },
});
