import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
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
import { vs } from 'react-native-size-matters';
import OpenChat from '../screens/dashboard/openChat.js';

const DashboardStack = ({navigation}) => {
  const Stack = createNativeStackNavigator();
  const Back = () => {
    const onHandle = () => {
      navigation.goBack()
    }
    return (
      <View style={{marginHorizontal: 10}}>
        <TouchableOpacity onPress={onHandle}>
          <Image
            source={Images.cancelIcon}
            resizeMode="contain"
            style={{width: 15, height: 15}}
          />
        </TouchableOpacity>
      </View>
    );
  };
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
         <Back />
          ),
        })}
      />
      <Stack.Screen
        name="edit"
        component={EditTodo}
        options={({navigation}) => ({
          title: 'Edit To- do',
          headerLeft: props => (
            <Back />
          ),
        })}
      />
      <Stack.Screen name="search" component={Search} />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          title: 'Profile',
          headerLeft: props => (
            <Back />
          ),
        })}
      />
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
            <Back />
          ),
        })}
      />
      <Stack.Screen name='openChat' component={OpenChat} />
    </Stack.Navigator>
  );
};

export default DashboardStack;
