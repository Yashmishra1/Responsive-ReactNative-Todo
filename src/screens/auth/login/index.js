import React, {useState,useEffect} from 'react';
import {Image, View, Text,Alert} from 'react-native';
import styles from './styles';
import {Input, CustomButton, ColorText} from '@components';
import Images from '@themes/images';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({navigation}) => {
const [state, setState] = useState({
  email: '',
  password: '',
});

const data  = {
  email : state.password,
  password : state.email,
}
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
      const result  = JSON.parse(value);
      if(result)
      {
        result.filter(element => {
        if(element.email == state.email)
        {
          navigation.navigate("mytabs")
        }
      })
    }
    else{
      Alert.alert("Account not found", "Please signup")
    }
  }
    }
  return (
    <View style={styles.container}>
      <View style={styles.connectLogo}>
        <Image source={Images.logo} style={styles.todologo} />
      </View>
      <View style={styles.inputbox}>
        <Input
          style={styles.top}
          placeholder="Email or username"
          keyboardType="email-address"
          onChangeText={text => setState(prev => ({...prev, email: text}))}
          value={state.email}
        />
        <Input placeholder="Password" source={Images.eye}
          onChangeText={text => setState(prev => ({...prev, password: text}))}
          value={state.password} />
      </View>

      <ColorText
        onPress={() => navigation.navigate('forgetpassword')}
        text="Forgot?"
        style={styles.primarytext}
      />
      <CustomButton
        text="Sign In "
        // onPress={() => navigation.navigate('mytabs')}
        onPress={handleSubmit}
         />
      <View style={styles.signup}>
        <Text style={styles.secondarytext}>Don't have account </Text>
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
