import React, {useState,useEffect} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import Images from '@themes/images';
import Login from '../screens/auth/login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '@screens/auth/signUp';
import ForgotPassword from '@screens/auth/forgetPassword';
import VerificationCode from '@screens/auth/verificationCode';
import History from '../screens/auth/history';
import Task from '@screens/auth/task';
import GoBack from '../components/goBack';
import DisplayAnImages from '../screens/auth/image';
import SearchIcon from '../components/Search';
import Search from '../screens/auth/search';
import Dashboard from '../screens/auth/dashboard';
import MyTabs from './BottomTabBarNavigator';
import AddToDo from '../screens/auth/addTodo';
import Item from '../screens/auth/dashboard/widgets/item';
import EditTodo from '../screens/auth/edit';
import Services from '../screens/auth/axiosApi';
import Profile from '../screens/auth/profile';
import DrawerNavigation from './DrawerNavigation';
import {s} from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const[isLoggedIn, setIsLoggedIn] = useState();
  const[isReady, setIsReady] = useState(true);
  console.log("logng",isLoggedIn)
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let localdata = await AsyncStorage.getItem("@user_input");
    localdata = JSON.parse(localdata);
    setIsLoggedIn(localdata);
    setIsReady(false);
  }
  
  if (isReady) {
    return null
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={(isLoggedIn) ? "mytabs" : "login"} 
        screenOptions={{headerShown: true}}>
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="signup"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="forgetpassword"
          component={ForgotPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="verificationCode" component={VerificationCode} />
        <Stack.Screen name="task" component={Task} />
        <Stack.Screen name="image" component={DisplayAnImages} />
        <Stack.Screen name="services" component={Services} />
        <Stack.Screen name="dashboard" component={Dashboard} />
        <Stack.Screen
          name="mytabs"
          component={MyTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Add To-do"
          component={AddToDo}
          options={({navigation}) => ({
            headerShown: false,
            title: 'Dashboard',
            headerLeft: props => (
              <View style={{left: '55%'}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    source={Images.cancelIcon}
                    resizeMode="contain"
                    style={{width: 10, height: 10}}
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Stack.Screen name="item" component={Item} />
        <Stack.Screen
          name="edit"
          component={EditTodo}
          options={({navigation}) => ({
            title: 'Edit To- do',
            headerLeft: props => (
              <View style={{marginHorizontal: 10,}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    source={Images.cancelIcon}
                    resizeMode="contain"
                    style={{width: 10, height: 10}}
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="history"
          component={History}
          options={({navigation}) => ({
            title: 'History',
            headerRight: props => <SearchIcon {...props} />,
            headerLeft: props => (
              <GoBack {...props} onPress={() => navigation.goBack()} />
            ),
          })}
        />
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="profile" component={Profile} />
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
