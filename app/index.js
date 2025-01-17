import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../src/screens/SearchScreen';
import ResultsShowScreen from '../src/screens/ResultsShowScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Search" options={{ headerShown: false }} component={SearchScreen} />
        <Stack.Screen name="ResultsShow" options={{ headerShown: false }} component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
