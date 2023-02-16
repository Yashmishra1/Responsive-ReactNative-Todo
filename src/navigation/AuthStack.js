import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/auth/login';
import SignUp from '../screens/auth/signUp';
import ForgotPassword from '../screens/auth/forgetPassword';
import VerificationCode from '../screens/auth/verificationCode';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
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
    </Stack.Navigator>
  );
};

export default AuthStack;
