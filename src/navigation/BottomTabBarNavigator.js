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
import SearchIcon from '../components/Search';
import Notification from '../components/Notification';
import Images from '@themes/images';

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
      }}>
      <Tab.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          tabBarShowLabel: false,
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#f5f6fa',
          },
          headerRight: props => (
            <View style={{flexDirection: 'row', right: '15%'}}>
              <SearchIcon {...props} />
              <Notification {...props} />
            </View>
          ),
          headerLeft: props => (
            <View style={{left: '13%'}}>
              <Image source={Images.drawerIcon} />
            </View>
          ),
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
          tabBarShowLabel: false,
          headerShown: false,
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
          headerLeft: props => (
            <View style={{left: '15%'}}>
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
              style={{height: vs(47), width: ms(55)}}
              image={Images.addIcon}
            />
          ),
        })}
      />
      <Tab.Screen
        name="wishlist"
        component={WishList}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({color}) => (
            <TabBarIcon
              style={{height: vs(23), tintColor: color}}
              image={Images.wishlistIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="setting"
        component={Setting}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({color}) => (
            <TabBarIcon
              style={{height: vs(23), tintColor: color}}
              image={Images.setting}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MyTabs;
