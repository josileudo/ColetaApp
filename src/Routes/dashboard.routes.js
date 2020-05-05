import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import telSen from '../screens/Sensors';
import telMap from '../screens/Map';

const Tab = createBottomTabNavigator();

function WildCard({title}) {
  return <Text>WildCard {title}</Text>;
}

export default function DashboardRoutes() {
  return (
    <Tab.Navigator
      tabBarOptions={{activeTintColor: '#', inactiveTintColor, colo}}>
      <Tab.Screen name="Sensores" component={telSen} />
      <Tab.Screen name="Mapa" component={telMap} />
    </Tab.Navigator>
  );
}
