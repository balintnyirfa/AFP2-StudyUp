import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import QuizzesScreen from './screens/QuizzesScreen';
import AccountScreen from './screens/AccountScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function Tabs() {
  return(
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen}/>
      <Tab.Screen name='Curriculum' component={HomeScreen}/>
      <Tab.Screen name='Quizzes' component={QuizzesScreen}/>
      <Tab.Screen name='Profile' component={AccountScreen}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Welcome" component={WelcomeScreen} />
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
        <Stack.Screen name="Home" component={HomeScreen} />
        {/*<Stack.Screen 
          name="Account" 
          component={AccountScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#fff'
            },
            headerTintColor: '#8562AC'
          }} />*/}
        {/*<Stack.Screen name="Quizzes" component={QuizzesScreen} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}