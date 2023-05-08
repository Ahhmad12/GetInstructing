import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from '../screens/Auth/WelcomeScreen';
import UserTypeScreen from '../screens/Auth/UserTypeScreen';
const Stack = createStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="UserType" component={UserTypeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Index;
