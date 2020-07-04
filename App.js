import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CalanderScreen from './screens/Calander'
import EventScreen from './screens/Event'
import MarketScreen from './screens/Market'
import HeartScreen from './screens/Heart'
import MyScreen from './screens/My'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Calander" component={CalanderScreen} />
        <Tab.Screen name="Event" component={EventScreen} />
        <Tab.Screen name="Market" component={MarketScreen} />
        <Tab.Screen name="Heart" component={HeartScreen} />
        <Tab.Screen name="My" component={MyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}