import React, {Component} from 'react';
import {Text, View} from 'react-native';
import senStyle from '../styles/Sensors.Style';
import FirebaseService from '../services/firebaseService';

export default class telSen extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    FirebaseService.getDataList(
      'valores',
      (dataIn) => this.setState({dataList: dataIn}),
      1,
    );
  }

  render() {
    const {dataList} = this.state;
    return (
      <View styles={senStyle.container}>
        {dataList &&
          dataList.map((item, index) => {
            return (
              <View key={index}>
                <View style={{padding: 10}}>
                  <Text style={{margin: 5}}>
                    Temperatura = {item.Temperatura}
                  </Text>
                  <Text style={{margin: 5}}>Pressao = {item.Pressao}</Text>
                  <Text style={{margin: 5}}>Altitude = {item.Altitude}</Text>
                </View>
              </View>
            );
          })}
      </View>
    );
  }
}
