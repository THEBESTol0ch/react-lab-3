import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AboutScreen from '../../screens/AboutScreen';
import LanguagesScreen from '../../screens/LanguagesScreen';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="О Себе" component={AboutScreen} />
      <Tab.Screen name="Мои Языки" component={LanguagesScreen} />
    </Tab.Navigator>
  );
}
