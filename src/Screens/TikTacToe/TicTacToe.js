// import React, {useState} from 'react';
// import {
//   FlatList,
//   Pressable,
//   SafeAreaView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// // import Snackbar from 'react-native-snackbar';
// import Icons from './Icons';

// const App = () => {
//   const [isCross, setIsCross] = useState(false);
//   const [gameWinner, setGameWinner] = useState('');
//   const [gameState, setGameState] = useState(new Array(9).fill('empty', 0, 9));

//   const reloadGame = () => {
//     setIsCross(false);
//     setGameWinner('');
//     setGameState(new Array(9).fill('empty', 0, 9));
//   };

//   const checkIsWinner = () => {
//     //  checking  winner of the game
//     if (
//       gameState[0] === gameState[1] &&
//       gameState[0] === gameState[2] &&
//       gameState[0] !== 'empty'
//     ) {
//       setGameWinner(`${gameState[0]} won the game! 🥳`);
//     } else if (
//       gameState[3] !== 'empty' &&
//       gameState[3] === gameState[4] &&
//       gameState[4] === gameState[5]
//     ) {
//       setGameWinner(`${gameState[3]} won the game! 🥳`);
//     } else if (
//       gameState[6] !== 'empty' &&
//       gameState[6] === gameState[7] &&
//       gameState[7] === gameState[8]
//     ) {
//       setGameWinner(`${gameState[6]} won the game! 🥳`);
//     } else if (
//       gameState[0] !== 'empty' &&
//       gameState[0] === gameState[3] &&
//       gameState[3] === gameState[6]
//     ) {
//       setGameWinner(`${gameState[0]} won the game! 🥳`);
//     } else if (
//       gameState[1] !== 'empty' &&
//       gameState[1] === gameState[4] &&
//       gameState[4] === gameState[7]
//     ) {
//       setGameWinner(`${gameState[1]} won the game! 🥳`);
//     } else if (
//       gameState[2] !== 'empty' &&
//       gameState[2] === gameState[5] &&
//       gameState[5] === gameState[8]
//     ) {
//       setGameWinner(`${gameState[2]} won the game! 🥳`);
//     } else if (
//       gameState[0] !== 'empty' &&
//       gameState[0] === gameState[4] &&
//       gameState[4] === gameState[8]
//     ) {
//       setGameWinner(`${gameState[0]} won the game! 🥳`);
//     } else if (
//       gameState[2] !== 'empty' &&
//       gameState[2] === gameState[4] &&
//       gameState[4] === gameState[6]
//     ) {
//       setGameWinner(`${gameState[2]} won the game! 🥳`);
//     } else if (!gameState.includes('empty', 0)) {
//       setGameWinner('Draw game... ⌛️');
//     }
//   };
//   const onChangeItem = itemNumber => {
//     if (gameWinner) {
//       return alert(gameWinner);
//       // return Snackbar.show({
//       //   text: gameWinner,
//       //   backgroundColor: '#000000',
//       //   textColor: '#FFFFFF',
//       // });
//     }

//     if (gameState[itemNumber] === 'empty') {
//       gameState[itemNumber] = isCross ? 'cross' : 'circle';
//       setIsCross(!isCross);
//     } else {
//       return alert('Position is already filled');
//       // return Snackbar.show({
//       //   text: 'Position is already filled',
//       //   backgroundColor: 'red',
//       //   textColor: '#FFF',
//       // });
//     }

//     checkIsWinner();
//   };

//   return (
//     <SafeAreaView>
//       <StatusBar />
//       {gameWinner ? (
//         <View style={[styles.playerInfo, styles.winnerInfo]}>
//           <Text style={styles.winnerTxt}>{gameWinner}</Text>
//         </View>
//       ) : (
//         <View
//           style={[
//             styles.playerInfo,
//             isCross ? styles.playerX : styles.playerO,
//           ]}>
//           <Text style={styles.gameTurnTxt}>
//             Player {isCross ? 'X' : 'O'}'s Turn
//           </Text>
//         </View>
//       )}
//       {/* Game Grid */}
//       <FlatList
//         numColumns={3}
//         data={gameState}
//         style={styles.grid}
//         renderItem={({item, index}) => (
//           <Pressable
//             key={index}
//             style={styles.card}
//             onPress={() => onChangeItem(index)}>
//             <Icons name={item} />
//           </Pressable>
//         )}
//       />
//       {/* game action */}
//       <Pressable style={styles.gameBtn} onPress={reloadGame}>
//         <Text style={styles.gameBtnText}>
//           {gameWinner ? 'Start new game' : 'Reload the game'}
//         </Text>
//       </Pressable>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   playerInfo: {
//     height: 56,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 4,
//     paddingVertical: 8,
//     marginVertical: 12,
//     marginHorizontal: 14,
//   },
//   gameTurnTxt: {
//     fontSize: 20,
//     color: '#FFFFFF',
//     fontWeight: '600',
//   },
//   playerX: {
//     backgroundColor: '#38CC77',
//   },
//   playerO: {
//     backgroundColor: '#F7CD2E',
//   },
//   grid: {
//     margin: 12,
//   },
//   card: {
//     height: 100,
//     width: '33.33%',

//     alignItems: 'center',
//     justifyContent: 'center',

//     borderWidth: 1,
//     borderColor: '#333',
//   },
//   winnerInfo: {
//     borderRadius: 8,
//     backgroundColor: '#38CC77',

//     shadowOpacity: 0.1,
//   },
//   winnerTxt: {
//     fontSize: 20,
//     color: '#FFFFFF',
//     fontWeight: '600',
//     textTransform: 'capitalize',
//   },
//   gameBtn: {
//     alignItems: 'center',

//     padding: 10,
//     borderRadius: 8,
//     marginHorizontal: 36,
//     backgroundColor: '#8D3DAF',
//   },
//   gameBtnText: {
//     fontSize: 18,
//     color: '#FFFFFF',
//     fontWeight: '500',
//   },
// });

// export default App;
import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import React, {useState} from 'react';
import AnimatedLottieView from 'lottie-react-native';
import Icons from './Icons';

const TicTacToe = () => {
  const [cross, setCross] = useState(false);
  const [gameWinner, setGameWinner] = useState('');
  const [gameState, setGameState] = useState(new Array(9).fill('empty', 0, 9));
  const [showLoader, setShowLoader] = useState(false);

  const reloadGame = () => {
    setCross(false);
    setGameWinner('');
    setGameState(new Array(9).fill('empty', 0, 9));
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
    }, 2000);
    // alert('Game reloaded!');
  };

  const checkIsWinner = () => {
    if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[3] !== 'empty' &&
      gameState[3] === gameState[4] &&
      gameState[4] === gameState[5]
    ) {
      setGameWinner(`${gameState[3]} won the game! 🥳`);
    } else if (
      gameState[6] !== 'empty' &&
      gameState[6] === gameState[7] &&
      gameState[7] === gameState[8]
    ) {
      setGameWinner(`${gameState[6]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[3] &&
      gameState[3] === gameState[6]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[1] !== 'empty' &&
      gameState[1] === gameState[4] &&
      gameState[4] === gameState[7]
    ) {
      setGameWinner(`${gameState[1]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[5] &&
      gameState[5] === gameState[8]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[4] &&
      gameState[4] === gameState[8]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[4] &&
      gameState[4] === gameState[6]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (!gameState.includes('empty', 0)) {
      setGameWinner('Draw game... ⌛️');
    }
  };

  const onChangeItem = itemNumber => {
    if (gameWinner) {
      return alert(gameWinner);
    }
    if (gameState[itemNumber] === 'empty') {
      gameState[itemNumber] = cross ? 'cross' : 'circle';
      setCross(!cross);
    } else {
      alert('Position is already filled!');
    }
    checkIsWinner();
  };

  return (
    <View style={styles.mainContainer}>
      {gameWinner ? (
        <Text style={styles.mainHeader}>{gameWinner}</Text>
      ) : (
        <Text
          style={{
            ...styles.mainHeader,
            backgroundColor: cross ? 'lightblue' : 'lightgreen',
          }}>
          Player {cross ? 'X' : 'O'}'s turn
        </Text>
      )}
      <FlatList
        style={styles.grid}
        numColumns={3}
        data={gameState}
        renderItem={({item, index}) => (
          <Pressable
            onPress={() => onChangeItem(index)}
            key={index}
            style={styles.gridBox}>
            <Icons name={item} />
          </Pressable>
        )}
      />
      {gameState.includes('circle') ? (
        <Pressable onPress={() => reloadGame()} style={styles.btn}>
          {gameWinner ? (
            <Text style={styles.btnTitle}>Start new game</Text>
          ) : (
            <Text style={styles.btnTitle}>Reload the game</Text>
          )}
        </Pressable>
      ) : null}
      {showLoader ? (
        <AnimatedLottieView
          style={{flex: 1, backgroundColor: 'rgba(0, 0, 0,0.5)'}}
          autoPlay={showLoader}
          loop
          source={require('../../Assets/Loader/Animation - 1699616461319.json')}
        />
      ) : null}
    </View>
  );
};

export default TicTacToe;

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: 'tan', flex: 1, alignItems: 'center'},
  mainHeader: {
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    fontSize: 28,
    fontFamily: 'PlaypenSans-Regular',
    width: '90%',
    paddingVertical: 10,
    borderRadius: 15,
    margin: 15,
    color: 'black',
    elevation: 10,
  },
  grid: {
    marginVertical: 20,
  },
  gridBox: {
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: 'lightyellow',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    height: 45,
    width: '80%',
    backgroundColor: 'lightpink',
    borderRadius: 10,
    bottom: 200,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTitle: {fontSize: 26},
});
