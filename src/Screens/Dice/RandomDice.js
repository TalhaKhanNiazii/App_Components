import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Dice1 from '../../Assets/Dice/inverted-dice-1.png';
import Dice2 from '../../Assets/Dice/inverted-dice-2.png';
import Dice3 from '../../Assets/Dice/inverted-dice-3.png';
import Dice4 from '../../Assets/Dice/inverted-dice-4.png';
import Dice5 from '../../Assets/Dice/inverted-dice-5.png';
import Dice6 from '../../Assets/Dice/inverted-dice-6.png';

const RandomDice = () => {
  const [randomImage, setRandomImage] = useState(Dice1);
  const rollDiceOnTap = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setRandomImage(Dice1);
        break;
      case 2:
        setRandomImage(Dice2);
        break;
      case 3:
        setRandomImage(Dice3);
        break;
      case 4:
        setRandomImage(Dice4);
        break;
      case 5:
        setRandomImage(Dice5);
        break;
      case 6:
        setRandomImage(Dice6);
        break;
      default:
        setRandomImage(Dice1);
    }
  };
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={randomImage} />
      <TouchableOpacity onPress={rollDiceOnTap} style={styles.button}>
        <Text style={styles.btnText}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RandomDice;

const styles = StyleSheet.create({
  mainContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  image: {width: 200, height: 200, borderRadius: 15},
  button: {
    height: 45,
    width: '50%',
    borderWidth: 2,
    borderStyle: 'dashed',
    //   backgroundColor: 'aqua',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 22,
    fontFamily: 'OpenSans_Condensed-ExtraBold',
    color: 'black',
  },
});
