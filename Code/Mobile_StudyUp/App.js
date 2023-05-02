import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import QuizzesScreen from './screens/QuizzesScreen';
import AccountScreen from './screens/AccountScreen';
import SubjectsScreen from './screens/SubjectsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
      {/*<Tab.Screen name='Subjects' component={SubjectsScreen} options={{ headerShown: false }} />*/}
      <Tab.Screen name='Quizzes' component={QuizzesScreen} options={{ headerShown: false }} />
      <Tab.Screen name='Profile' component={AccountScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Tabs}
          options={{
            headerShown: false
          }} />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Add meg az adataid',
            headerStyle: {
              backgroundColor: '#fff'
            },
            headerTintColor: '#8562AC'
          }} />

        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            title: 'Add meg az adataid',
            headerStyle: {
              backgroundColor: '#fff'
            },
            headerTintColor: '#8562AC'
          }} />

        <Stack.Screen
          name="Home"
          component={Tabs} />
        <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#fff'
            },
            headerTintColor: '#8562AC'
          }} />
        <Stack.Screen
          name="Quizzes"
          component={QuizzesScreen} />
        <Stack.Screen
          name="Subjects"
          component={SubjectsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}