import * as React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import Images from '@themes/images';
import SearchIcon from '../components/Search';
import Notification from '../components/Notification';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/dashboard/home';
import Profile from '../screens/dashboard/profile';
import Setting from '../screens/dashboard/setting';
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="dashboard"
      screenOptions={{
        drawerType: 'front',
        overlayColor: 'rgba(0,0,0,0.5)',
        drawerStyle: {
          width: '84%',
        },
        headerShown: true,
      }}>
      <Drawer.Screen
        name="dashboard"
        component={Home}
        options={({navigation}) => ({
          drawerLabel: 'Dashboard',
          headerTitle: '',
          headerRight: props => (
            <View style={{flexDirection: 'row', right: '15%'}}>
              <SearchIcon {...props} onPress={() => navigation.navigate('search')} />
              <Notification {...props} />
            </View>
          ),
          headerLeft: props => (
            <TouchableOpacity onPress={navigation.toggleDrawer}>
              <View style={{marginHorizontal: 25,}}>
                <Image source={Images.drawerIcon} />
              </View>
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen
        name="profile"
        component={Profile}
        options={({navigation}) => ({
          drawerLabel: 'Profile',
          headerStyle: {
            backgroundColor: '#f5f6fa',
          },
          headerLeft: props => (
            <TouchableOpacity onPress={navigation.toggleDrawer}>
              <View style={{marginHorizontal: 15,}}>
                <Image source={Images.drawerIcon} />
              </View>
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen
        name="setting"
        component={Setting}
        options={({navigation}) => ({
          drawerLabel: 'Setting',
        headerLeft: props => (
          <TouchableOpacity onPress={navigation.toggleDrawer}>
            <View style={{marginHorizontal: 25,}}>
              <Image source={Images.drawerIcon} />
            </View>
          </TouchableOpacity>
        ),
      })}
      />
    </Drawer.Navigator>
  );
}

const DrawerNavigation = () => {
  return <MyDrawer />;
};
export default DrawerNavigation;
