import React, {Component} from 'react';
import {Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'
import mapStyle from '../styles/Map.Styles';

export default class Map extends Component {
  render() {
    return (
      <View style = {mapStyle.container}>
        <MapView style = {mapStyle.map}
          provider={PROVIDER_GOOGLE}
          loadingEnabled={true}
          region = {{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
        </MapView>
      </View>
    )
  }
}
