import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from './src/components/screens/Dashboard'
import Project from './src/components/screens/Project';
import TaskDetails from './src/components/screens/TaskDetails';
export default function App() {
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="Home" component={Dashboard} />
      <Stack.Screen options={{headerShown:false}} name="Project" component={Project} />
      <Stack.Screen options={{headerShown:false}} name="Task" component={TaskDetails} />
    </Stack.Navigator>
  </NavigationContainer>
);
}