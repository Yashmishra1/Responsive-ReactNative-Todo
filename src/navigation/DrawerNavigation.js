import * as React from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import Images from '@themes/images';
import SearchIcon from '../components/Search';
import Notification from '../components/Notification';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../screens/auth/dashboard';
import Profile from '../screens/auth/profile';
import Setting from '../screens/auth/setting';
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
        component={Dashboard}
        options={({navigation}) => ({
          drawerLabel: 'Dashboard',
          headerTitle: '',
          headerRight: props => (
            <View style={{flexDirection: 'row', right: '15%'}}>
              <SearchIcon {...props} />
              <Notification {...props} />
            </View>
          ),
          headerLeft: props => (
            <TouchableOpacity onPress={navigation.toggleDrawer}>
              <View style={{left: '13%'}}>
                <Image source={Images.drawerIcon} />
              </View>
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen
        name="profile"
        component={Profile}
        options={{
          drawerLabel: 'Profile',
          headerStyle: {
            backgroundColor: '#f5f6fa',
          },
        }}
      />
      <Drawer.Screen
        name="setting"
        component={Setting}
        options={{drawerLabel: 'Setting'}}
      />
    </Drawer.Navigator>
  );
}

const DrawerNavigation = () => {
  return <MyDrawer />;
};
export default DrawerNavigation;
