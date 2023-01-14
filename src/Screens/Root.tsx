import React from 'react';
import {Tab} from '../App';
import HomeScreen from '../HomeScreen';
import SettingsScreen from '../SettingsScreen';

const Root = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Setting" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default Root;
