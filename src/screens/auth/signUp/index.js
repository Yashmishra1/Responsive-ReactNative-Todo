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

  const data = {
    userName: state.userName,
    email: state.email,
    password: state.password,
    confirmPassword: state.confirmPassword,
  };
  const createAccount = async () => {
    const value = await AsyncStorage.getItem('@user_input');
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
          alert('Signup Successfully')
        }
    } else {
      emptyArr.push(data);
      alert('Signup Successfully')
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(emptyArr));
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
          <Text style={styles.bottomText}>Sign in</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default SignUp;