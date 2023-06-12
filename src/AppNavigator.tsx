import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './normal/Splash';
import Parent from './normal/Parent';
import DrawerNavigator from './drawer/DrawerNavigator';
import Screen1 from './bottom/Screen1';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Parent"
          component={Parent}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Screen"
          component={Parent}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
