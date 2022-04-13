import React, {Component} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import Field from './components/Field';
import Flag from './components/Flag';
import params from './params';
import MineField from './components/MineField';
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines 
} from './functions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.createState();
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  };

  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      loat: false
    };
  };

  onOpenField = (row, column) =>{
    const board = cloneBoard (this.state.board);
    openField(board, row, column);
    const lost = hadExplosion(board);
    const won = wonGame(board);

    if (lost){
      showMines(board)
      Alert.alert('Perdeu playboy!')
    }

    if(won){
      Alert.alert('Parabéns, você venceu!')
    }

    this.setState({ board, lost, won })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Iniciando o Mines {params.getColumnsAmount()}x{params.getRowsAmount()}
        </Text>
        <View>
          <MineField board={this.state.board} 
          onOpenField={this.onOpenField}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#aff',
  },
});

export default App;
