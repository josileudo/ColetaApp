import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
//import telSen from './screens/Sensors';
import telMap from './screens/Map';

import DashboardRoutes from './Routes/dashboard.routes';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#58ACFA'},
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="Dados dos Sensores"
        component={DashboardRoutes}
        options={{title: 'Tela sensores'}}
      />
      <Stack.Screen name="Mapa de coordenas" component={telMap} />
    </Stack.Navigator>
  );
}
