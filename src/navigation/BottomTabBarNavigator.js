import * as React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/auth/dashboard';
import Statistics from '../screens/auth/statistics';
import AddToDo from '../screens/auth/addTodo';
import WishList from '../screens/auth/wishlist';
import Setting from '../screens/auth/setting';
import {vs, ms, s, ScaledSheet} from 'react-native-size-matters';
import Images from '@themes/images';
import Profile from '../screens/auth/profile';
import DrawerNavigation from './DrawerNavigation';
const Tab = createBottomTabNavigator();
const TabBarIcon = ({image, style, tintColor}) => {
  return (
    <View style={{flexDirection: 'column', alignItems: 'center'}}>
      <Image source={image} resizeMode="contain" style={[style, tintColor]} />
    </View>
  );
};
const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#d9d9d9',
        tabBarStyle:{height:82,}
      }}
    >
      <Tab.Screen
        name="drawernavigation"
        component={DrawerNavigation}
        options={{
          headerShown:false,
          tabBarShowLabel: false,
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#f5f6fa',
          },
          tabBarIcon: ({focused, color}) => (
            <TabBarIcon
              style={{height: vs(23), tintColor: color}}
              image={Images.homeIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="statistics"
        component={Statistics}
        options={{
          title:"Statistics",
          headerStyle: {
            backgroundColor: '#f5f6fa',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign:"center",
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <TabBarIcon
              style={{height: vs(23), tintColor: color}}
              image={Images.statisticsIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add To-do"
        component={AddToDo}
        options={({navigation}) => ({
          tabBarShowLabel: false,
          headerStyle: {
            backgroundColor: '#f5f6fa',
          },
          tabBarStyle: {
            display: 'none',
          },
          headerTitleAlign:"center",
          headerLeft: props => (
            <View style={{marginHorizontal:25,}}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={Images.cancelIcon}
                  resizeMode="contain"
                  style={{width: 10, height: 10}}
                />
              </TouchableOpacity>
            </View>
          ),
          tabBarIcon: ({color}) => (
            <TabBarIcon
              style={{height: vs(62), width: ms(62)}}
              image={Images.addIcon}
            />
          ),
        })}
      />
      <Tab.Screen
        name="wishlist"
        component={WishList}
        options={{
          title:"WishList",
          headerStyle: {
            backgroundColor: '#f5f6fa',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign:"center",
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <TabBarIcon
              style={{height: vs(23), tintColor: color}}
              image={Images.wishlistIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          title:"Setting",
          headerStyle: {
            backgroundColor: '#f5f6fa',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign:"center",
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <TabBarIcon
              style={{height: vs(23), tintColor: color}}
              image={Images.setting}
            />
          ),
          headerRight: props => (
            <TouchableOpacity onPress={Profile}>
              <View style={{flexDirection: 'row',marginHorizontal:15,}}>
                <Image
                  source={Images.profile}
                  style={{height: 50, width: 50}}
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MyTabs;
