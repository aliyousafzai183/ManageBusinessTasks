import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState, useEffect } from 'react';
import { Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// redux
import { Provider } from 'react-redux';
import store from './assets/store';

// Screens
import HomeScreen from './assets/Screens/HomeScreen';
import ListTask from './assets/Screens/ListTasks';
import AddTaskScreen from './assets/Screens/AddTaskScreen';
import SettingScreen from './assets/Screens/SettingScreen';

// Icons
import Ionicons from '@expo/vector-icons/Ionicons';

// onboarding
import Onboarding from 'react-native-onboarding-swiper';

const Tab = createBottomTabNavigator();
export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(true);

  const handleOnboardingFinish = () => {
    setShowOnboarding(false);
  };

  useEffect(() => {
    async function checkOnboardingStatus() {
      const onboardingStatus = await AsyncStorage.getItem('onboardingShown');
      if (!onboardingStatus) {
        setShowOnboarding(true);
        AsyncStorage.setItem('onboardingShown', 'true');
      }
    }
    checkOnboardingStatus();
  }, []);

  if (showOnboarding) {
    return (
        <Onboarding
          onDone={handleOnboardingFinish}
          onSkip={handleOnboardingFinish}
          pages={[
            {
              backgroundColor: '#fff',
              image: <Image style={styles.onboardingImage} source={require('./assets/Instruction1.png')} />,
              title: 'Welcome to Your App',
              subtitle: 'Manage Your Tasks in One Place',
            },
            {
              backgroundColor: '#fff',
              image: <Image style={styles.onboardingImage} source={require('./assets/Instruction2.png')} />,
              title: 'Add Your Tasks',
              subtitle: 'Easily Add and Organize Your Tasks',
            },
            {
              backgroundColor: '#fff',
              image: <Image style={styles.onboardingImage} source={require('./assets/Instruction3.png')} />,
              title: 'Stay on Top of Your Tasks',
              subtitle: 'Set Reminders and Get Notified When Tasks are Due',
            },
          ]}
        />
    );
  }

  return (
    <Provider store={store}>
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
              return <Ionicons name={iconName} size={size + 5} color={color} />;
            },
            tabBarActiveTintColor: '#3466AA',
            tabBarInactiveTintColor: '#000000',
            tabBarShowLabel: false
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
              headerShown: false
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
              headerShown: false,
            }}
          />

        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}