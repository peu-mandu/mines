import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Field from './Field';

import params from './params';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines</Text>
        <Text styles={styles.instructions}>
          Tamanhbo da grade:
          {params.getRowsAmount()}X {params.getColumnsAmount()}
        </Text>
        <Field />
        <Field mined />
        <Field flagged />
        <Field flagged opened />
        <Field opened mined exploded />
        <Field opened nearMines={1} />
        <Field opened nearMines={2} />
        <Field opened nearMines={3} />
        <Field opened nearMines={6} />
        <View></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
