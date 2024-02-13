import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  Modal,
  Button,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const height = Dimensions.get('window').height;
const PS5 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setLoading(true);
    callingApi();
  }, []);

  const callingApi = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:3000/users');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const addUpdatedData = async () => {
    try {
      const res = await axios.put(
        `http://10.0.2.2:3000/users/${selectedItem.id}`,
        {
          name,
          email,
          password,
        },
      );
      console.log('Data updated:', res.data);
      callingApi(); // Refresh the data after updating
    } catch (error) {
      console.error('Error updating data:', error);
    }
    setShowModal(false);
  };

  const deleteData = async id => {
    try {
      await axios.delete(`http://10.0.2.2:3000/users/${id}`);
      console.log('Data deleted:', id);
      callingApi(); // Refresh the data after deleting
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleEdit = item => {
    setSelectedItem(item);
    setName(item.name);
    setEmail(item.email);
    setPassword(item.password);
    setShowModal(true);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainHeader}>
        <Text style={styles.headerText}>List</Text>
        <Text style={styles.headerText}>Operation</Text>
      </View>
      {loading ? (
        <ActivityIndicator style={{marginTop: 100}} size={70} color={'white'} />
      ) : (
        <FlatList
          style={{marginBottom: 10}}
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.listContainer}>
              <View style={styles.listInsideConainer1}>
                <Text style={styles.listItem}>{item.name}</Text>
              </View>
              <View style={styles.listInsideConainer2}>
                <TouchableOpacity
                  style={styles.listButton}
                  onPress={() => handleEdit(item)}>
                  <Icon size={30} color={'green'} name="account-edit" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.listButton}
                  onPress={() => deleteData(item.id)}>
                  <Icon size={30} color={'red'} name="delete-alert" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
      <Modal animationType="slide" visible={showModal} transparent={true}>
        <View style={styles.modalView}>
          <TextInput
            onChangeText={txt => setName(txt)}
            value={name}
            style={styles.input}
            placeholder="Enter Your Name"
          />
          <TextInput
            onChangeText={txt => setEmail(txt)}
            value={email}
            style={styles.input}
            placeholder="Enter Your Email"
          />
          <TextInput
            onChangeText={txt => setPassword(txt)}
            value={password}
            style={styles.input}
            placeholder="Enter Your Password"
          />
          <View style={styles.button}>
            <Button
              color={'tan'}
              title="Update Data"
              onPress={addUpdatedData}
            />
            <Button
              color={'tan'}
              title="Cancel"
              onPress={() => setShowModal(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PS5;

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: 'skyblue', alignItems: 'center'},
  mainHeader: {
    flexDirection: 'row',
    height: 40,
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    elevation: 10,
  },
  headerText: {fontSize: 20, color: 'black', fontFamily: 'PlaypenSans-Medium'},
  listContainer: {
    backgroundColor: 'white',
    height: 50,
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 7,
    justifyContent: 'space-between',
  },
  listInsideConainer1: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '60%',
  },
  listItem: {fontSize: 18, color: 'black'},
  listInsideConainer2: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: '40%',
  },
  listButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 35,
  },
  modalView: {
    height: height / 2,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 10,
    backgroundColor: 'white',
    elevation: 10,
    marginTop: height / 4,
  },
  input: {
    width: '90%',
    height: 45,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginTop: 30,
    marginBottom: 10,
  },
  button: {
    marginTop: 40,
    height: 150,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: 'black',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 1,
    shadowRadius: 20,
    borderColor: 'black',
  },
});
