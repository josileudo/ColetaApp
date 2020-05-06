import React, {Component} from 'react';
import {Text, View} from 'react-native';
import senStyle from '../styles/Sensors.Style';
import {db} from '../utils/firebase';

class Sensors extends Component {
  componentDidMount() {
    db.ref('/valores').on('value', (querySnapshot) => {
      let data = querySnapshot.val() ? querySnapshot() : {};
      let items = {...data};
      this.setState({
        valores: items,
      });
    });
  }
}

export default function telSen() {
  return (
    <View style={senStyle.container}>
      <Text>Tela dos sensores</Text>
    </View>
  );
}
