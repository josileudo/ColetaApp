import React, {Component} from 'react';
import {Text, View} from 'react-native';
import senStyle from '../styles/Sensors.Style';
import database from '@react-native-firebase/database';
import FirebaseService from '../services/firebaseService';
import {db} from '../utils/firebase';
import itemComponent from '../components/itemComponent';

let itemsRef = db.ref('/valores');

export default class telSen extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    itemsRef.on('value', (snapshot) => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState(items);
    });
  }

  render() {
    return (
      <View styles={senStyle.container}>
        {this.state.items.length > 0 ? (
          <itemComponent items={this.state.items} />
        ) : (
          <Text> Não tem nada</Text>
        )}
      </View>
    );
  }
}
