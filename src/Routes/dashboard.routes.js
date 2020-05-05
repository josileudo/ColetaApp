import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function WildCard({title}) {
  return <Text>WildCard {title}</Text>;
}

export default function DashboardRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Sensores"
        component={() => <WildCard title="Tela sensores" />}
      />
      <Tab.Screen
        name="Mapa"
        component={() => <WildCard title="Tela mapa" />}
      />
    </Tab.Navigator>
  );
}
