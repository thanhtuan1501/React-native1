import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TodoScreen from './screens/TodoScreen'
import OnboardingScreen from './screens/OnboardingScreen';
import VoteRateScreen from './screens/VoteRateScreen'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown : false,
      }}>
        <Stack.Screen name="Home" component={OnboardingScreen} />
        <Stack.Screen name="TodoScreen" component={TodoScreen} />
        <Stack.Screen name= 'VoteScreen' component={VoteRateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
