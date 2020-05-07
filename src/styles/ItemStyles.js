import React from 'react';
import {StyleSheet} from 'react-native';

const itemStyle = StyleSheet.create({
  itemList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default itemStyle;
