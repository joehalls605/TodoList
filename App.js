import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AddTaskScreen from './src/screens/AddTaskScreen';
import HomeScreen from './src/screens/HomeScreen';
import TaskDetailsScreen from './src/screens/TaskDetailsScreen';
import { TaskProvider } from './src/context/TaskContext';

const Stack = createStackNavigator();

export default function App(){
  return (
      <TaskProvider>
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "Home" }}
            />
            <Stack.Screen
                name="TaskDetail"
                component={TaskDetailsScreen}
                options={{ title: "Task Detail"}}
            />
            <Stack.Screen
                name="AddTask"
                component={AddTaskScreen}
                options={{ title: "Add Task Detail" }}
            />
          </Stack.Navigator>
      </NavigationContainer>
      </TaskProvider>
  )
}