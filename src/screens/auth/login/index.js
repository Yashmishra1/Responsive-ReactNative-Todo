import React, {useState, useEffect} from 'react';
import {Image, View, Text, Alert, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Input, CustomButton, ColorText} from '@components';
import Images from '@themes/images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    showPassword : true,
  });

  const data = {
    email: state.password,
    password: state.email,
  };
  // useEffect(() => {
  //   getData();
  // });
  const handleSubmit = async () => {
    if (!state.email) {
      alert('Email is Requied!!');
    } else if (!state.password) {
      alert('password is Requied!!');
    } else {
      const value = await AsyncStorage.getItem('@user_input');
      const result = JSON.parse(value);
      if (result) {
        result.filter(element => {
          if (
            element.email === state.email &&
            element.password === state.password
          ) {
            navigation.navigate('mytabs');
            Alert.alert('Successfully Login');
          }
        });
      } else {
        Alert.alert('Account not found', 'Please signup');
      }
    }
  };
  const userLogin = async(email, password) => {
    try { 
      let response = await auth().signInWithEmailAndPassword(state.email,state.password)
      if(response && response.user)
      {
        Alert.alert("Success ✅", "Authenticated successfully")
      }
    }catch(e) {
      console.error(e.message)
    }

  }
  return (
    <View style={styles.container}>
      <View style={styles.connectLogo}>
        <Image source={Images.logo} style={styles.todologo} />
      </View>
      <View style={styles.inputbox}>
        <Input
          placeholder="Email or username"
          keyboardType="email-address"
          onChangeText={text => setState(prev => ({...prev, email: text}))}
          value={state.email}
        />
        <View style={{justifyContent: 'space-between', flexDirection: 'row', paddingLeft:20}}>
          <Input
            placeholder="Password"
            onChangeText={text => setState(prev => ({...prev, password: text}))}
            value={state.password}
            secureTextEntry={state.showPassword}
          />
          {state.showPassword ? ( 
          <TouchableOpacity onPress={() => setState(prev => ({...prev, showPassword : !state.showPassword}))}>
          <Image
            style={styles.inputImage}
            source={Images.eye}
            resizeMode="contain"
          />
          </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setState(prev => ({...prev, showPassword : !state.showPassword}))}>
            <Image
            style={styles.inputImage}
            source={Images.lockEyeView}
            resizeMode="contain" />
          </TouchableOpacity>
          )}
        </View>
      </View>

      <ColorText
        onPress={() => navigation.navigate('forgetpassword')}
        text="Forgot?"
        style={styles.primarytext}
      />
      <CustomButton text="Sign In " onPress={userLogin} />
      <View style={styles.signup}>
        <Text style={styles.secondarytext}>{"Don't have account "}</Text>
        <Text
          onPress={() => navigation.navigate('signup')}
          style={styles.bottomText}>
          Sign Up
        </Text>
      </View>
    </View>
  );
};
export default Login;
