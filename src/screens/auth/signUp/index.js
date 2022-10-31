import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Image, View, Pressable, Text, SafeAreaView, Alert} from 'react-native';
import styles from './styles';
import {Input, CustomButton, ColorText} from '@components';
import Images from '@themes/images';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({navigation}) => {
  let STORAGE_KEY = '@user_input';
  const [state, setState] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    result: '',
    store:'',
  });
  // useEffect(async () => {
  //   const value = await AsyncStorage.getItem('@user_input');
  //   console.log('value', value);
  //   }, []);
  
  const data = {
    userName: state.userName,
    email: state.email,
    password: state.password,
    confirmPassword: state.confirmPassword,
  };
  const createAccount = async () => {
    const value = await AsyncStorage.getItem('@user_input');
    console.log('value', value);
    let emptyArr = [];
    if (value) {
      let newProduct = JSON.parse(value);
      emptyArr = [...newProduct];
      const existUser = emptyArr.filter(element => { 
        return element.email === state.email })
        if (existUser.length > 0) {
          alert('Already Registered Please Sign in');
        } else {
          emptyArr.push(data);
          await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(emptyArr));
        }
    } else {
      emptyArr.push(data);
      console.log("emptyArr",emptyArr);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(emptyArr));
      console.log('successfully saved');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.connectLogo}>
        <Image source={Images.logo} style={styles.todologo} />
      </View>
      <View style={styles.inputbox}>
        <View style={styles.topRadius}>
          <Input
            placeholder="Username"
            onChangeText={text => setState(prev => ({...prev, userName: text}))}
            value={state.userName}
          />
        </View>
        <Input
          placeholder="Email"
          keyboardType={'email-address'}
          onChangeText={text => setState(prev => ({...prev, email: text}))}
          value={state.email}
        />
        <Input
          placeholder="Password"
          style={styles.BottomRadius}
          onChangeText={text => setState(prev => ({...prev, password: text}))}
          value={state.password}
        />
      </View>

      <Input
        placeholder={'Confirm Password'}
        source={require('@images/eye.png')}
        onChangeText={text =>
          setState(prev => ({...prev, confirmPassword: text}))
        }
        value={state.confirmPassword}
      />
      <CustomButton text={'Sign Up '} onPress={createAccount} />

      <View style={styles.signup}>
        <Text style={styles.secondarytext}>Already have an account? </Text>
        <Pressable onPress={() => navigation.navigate('login')}>
          <Text style={styles.bottomText}> Sign in</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default SignUp;
//  if(!state.userName)
// {
//   alert("Enter an Username")
// }
// else if(!state.email)
// {
//   alert("Enter an Email")
// }
// else if(!state.password)
// {
//   alert("Enter an Password")
// }
// else if(!state.confirmPassword)
// {
//   alert("Enter an Confirmpassword ")
// }
// else{
//   alert("Successfully Signup","Do Login")
//   // navigation.navigate('login');
//  }
