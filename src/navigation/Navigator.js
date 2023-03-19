import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigation from './DrawerNavigation';
import {s} from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {firebase} from '@react-native-firebase/auth';
import AuthStack from './AuthStack';
import DashboardStack from './DashboardStack';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [isReady, setIsReady] = useState(true);
  useEffect(() => {
    // getData();
    userAuthenticated();
  }, []);

  const getData = async () => {
    let localdata = await AsyncStorage.getItem('@user_input');
    localdata = JSON.parse(localdata);
    setIsLoggedIn(localdata);
    setIsReady(false);
  };
  const userAuthenticated = () => {
    let user = firebase.auth()?.currentUser?.email;
    setIsLoggedIn(user);
    setIsReady(false);
  };
  if (isReady) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLoggedIn ? 'dashboardStack' : 'authStack'}
        screenOptions={{headerShown: true}}>
        <Stack.Screen
          name="authStack"
          component={AuthStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="dashboardStack"
          component={DashboardStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="drawernavigation"
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
