import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TestPage from './Screens/Test';
import Mypage from './Screens/Mypage';
import Root from './Screens/Root';
import {AppStackParamList, RootTabParamList} from './type/navigation';

export const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator<AppStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false,
          headerTitleStyle: {fontSize: 20, fontWeight: 'bold'},
          headerStyle: {backgroundColor: '#FAF5ED'},
          headerTitleAlign: 'center',
        }}>
        <Stack.Group>
          <Stack.Screen
            name="Root"
            component={Root}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Test" component={TestPage} />
          <Stack.Screen name="MyPage" component={Mypage} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
