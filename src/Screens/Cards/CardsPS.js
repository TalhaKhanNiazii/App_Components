import {View, StatusBar, StyleSheet} from 'react-native';
import {Avatar, Button, Card, Text} from 'react-native-paper';
import React from 'react';

const CardsPS = props => {
  const data = props.data;
  const id = props.id;
  //   console.log('DATA', data);
  //   console.log('Key', id);
  const LeftContent = props => (
    <Avatar.Image
      {...props}
      source={data.icon}
      style={data.style}
      //   source={require('../../Assets/icons/sun.png')}
    />
  );
  const details =
    'Norway is rugged and wild, with dramatic mountain peaks and deep glacial fjords. The defining feature of Norway is its mountains, which cover much of the landscape. ';
  return (
    <View key={id} style={Styles.mainContainer}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#efd9b4'} />
      <Card style={Styles.card} mode="outlined">
        <Card.Title
          style={Styles.cardTitle}
          titleStyle={Styles.cardInnerTiltle}
          title={data.title}
          subtitle={data.subtitle}
          left={LeftContent}
        />
        <Card.Content>
          <Text style={Styles.cardContentText} variant="headlineLarge">
            {data.country}
          </Text>
          <Text variant="bodyMedium">{data.details}</Text>
        </Card.Content>
        <Card.Cover
          style={{margin: 10}}
          source={data.image}
          //   source={{uri: 'https://picsum.photos/700'}}
        />
        <Card.Actions style={Styles.cardAction}>
          <Button style={{backgroundColor: 'white'}}>Cancel</Button>
          <Button>Done</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default CardsPS;
const Styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: 'lightgray', padding: 10},
  card: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    backgroundColor: 'white',
  },
  cardTitle: {
    backgroundColor: 'tan',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardInnerTiltle: {fontSize: 26},
  cardContentText: {fontWeight: 'bold'},
  cardAction: {
    backgroundColor: 'tan',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
