import React, {Component} from 'react';
import {View, Text} from 'react-native';
import itemStyle from '../styles/ItemStyles';
import PropTypes from 'prop-types';

export default class itemComponent extends Component {
  static PropTypes = {
    items: PropTypes.array.isRequired,
  };

  render() {
    return (
      <View style={itemStyle.itemList}>
        {this.props.items.map((item, index) => {
          return (
            <View key={index}>
              <Text style={itemStyle.itemText}>{item.name}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}
