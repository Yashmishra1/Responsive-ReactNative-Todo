import React from 'react';
import {View,TouchableOpacity,Image} from 'react-native';
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
import Item from '../screens/auth/dashboard/widgets/Item';
import EditTodo from '../screens/auth/edit';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: true}}>
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="forgetpassword" component={ForgotPassword} />
        <Stack.Screen name="verificationCode" component={VerificationCode} />
        <Stack.Screen name="task" component={Task} />
        <Stack.Screen name="image" component={DisplayAnImages} />
        <Stack.Screen name="dashboard" component={Dashboard}  options={({navigation}) => ({
          title:"Dashboard",
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
          })}  />
        <Stack.Screen name='mytabs' component={MyTabs} options={{headerShown: false,}} />
        <Stack.Screen name='Add To-do' component={AddToDo} options={({navigation}) => ({
          title:"Dashboard",
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
          })} />
        <Stack.Screen name='item' component={Item} />
        <Stack.Screen name='edit' component={EditTodo}  options={({navigation}) => ({
          title:"Edit To- do",
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
          })} />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
