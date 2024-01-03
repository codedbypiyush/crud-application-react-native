import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import React from 'react';
import CreateUpdateScreen from '../screens/createupdate_screen';
const Stack = createStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="CreateUpdateScreen"
          component={CreateUpdateScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
