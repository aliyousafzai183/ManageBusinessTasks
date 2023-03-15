import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import HomeScreen from './Screens/HomeScreen';
import ListTask from './Screens/ListTasks';
import AddTaskScreen from './Screens/AddTaskScreen';
import SettingScreen from './Screens/SettingScreen';

// Icons
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'List') {
              iconName = focused
                ? 'md-list-circle-sharp'
                : 'md-list-circle-outline';
            } else if (route.name === 'Add') {
              iconName = focused
                ? 'ios-add-circle-sharp'
                : 'ios-add-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused
                ? 'ios-settings-sharp'
                : 'ios-settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size+5} color={color} />;
          },
          tabBarActiveTintColor: '#3466AA',
          tabBarInactiveTintColor: '#000000',
          tabBarShowLabel:false
        })}
      >

        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="Add"
          component={AddTaskScreen}
          options={{
            tabBarHideOnKeyboard:true
          }}
        />
        
        <Tab.Screen
          name="List"
          component={ListTask}
          options={{
            headerShown: false
          }}
        />

        <Tab.Screen
          name="Settings"
          component={SettingScreen}
          options={{
            headerShown: false
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}