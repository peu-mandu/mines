import React from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import Mine from './Mine';
import Flag from './Flag';
import params from '.././params';

export default props => {
  const {mined, opened, nearMines, exploded, flagged} = props;

  const styleField = [styles.field];
  if (opened) styleField.push(styles.opened);
  if (exploded) styleField.push(styles.exploded);
  if (flagged && !opened) styleField.push(styles.flagged, styles.regular);
  if (!opened && !exploded) styleField.push(styles.regular);

  let color = null;
  if (nearMines > 0) {
    if (nearMines == 1) color = '#2a28d7';
    if (nearMines == 2) color = '#2b520f';
    if (nearMines > 2 && nearMines < 6) color = '#f221a9';
    if (nearMines >= 6) color = '#f9060a';
  }

  return (
    <TouchableWithoutFeedback onPress={props.onOpen}>
      <View style={styleField}>
        {!mined && opened && nearMines > 0 ? (
          <Text style={[styles.label, {color: color}]}>
            {nearMines}{console.log(nearMines + '----------teste para saber o numero de nearMines--------------')}</Text>) 
            : ( false )}
        {mined && opened ? <Mine /> : false }
        {flagged && !opened ? <Flag /> : false }
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#bbb',
    borderTopColor: '#ccc',
    borderRightColor: '#333',
    borderBottomColor: '#333',
  },
  opened: {
    backgroundColor: '#999',
    borderColor: '#777',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize,
  },
  exploded: {
    backgroundColor: 'red',
    borderColor: 'red',
  },
  flagged: {},
});
