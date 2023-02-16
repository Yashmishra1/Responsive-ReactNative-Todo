import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/dashboard/home';
import MyTabs from './BottomTabBarNavigator';
import AddToDo from '../screens/dashboard/addTodo';
import EditTodo from '../screens/dashboard/edit';
import Search from '../screens/dashboard/search';
import Profile from '../screens/dashboard/profile';
import DrawerNavigation from './DrawerNavigation';
import Chat from '../screens/dashboard/chat';
import Images from '@themes/images';
const DashboardStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="mytabs"
        component={MyTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="dashboard"
        component={Home}
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
      <Stack.Screen
        name="edit"
        component={EditTodo}
        options={({navigation}) => ({
          title: 'Edit To- do',
          headerLeft: props => (
            <View style={{marginHorizontal: 10}}>
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
      <Stack.Screen name="search" component={Search} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen
        name="drawernavigation"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="chat"
        component={Chat}
        options={({navigation}) => ({
          title: 'Chat',
          headerLeft: props => (
            <View style={{marginHorizontal: 10}}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={Images.cancelIcon}
                  resizeMode="contain"
                  style={{width: 10, height: 20}}
                />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default DashboardStack;
