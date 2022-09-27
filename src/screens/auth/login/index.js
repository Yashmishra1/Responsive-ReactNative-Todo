import React from 'react';
import {Image, View, Text} from 'react-native';
import styles from './styles';
import {Input, CustomButton, ColorText} from '@components';
import Images from '@themes/images';

const Login = ({navigation}) => {
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
        />

        <Input placeholder="Password" source={Images.eye} />
      </View>

      <ColorText
        onPress={() => navigation.navigate('forgetpassword')}
        text="Forgot?"
        style={styles.primarytext}
      />
      {/* <CustomButton text="Sign In >" onPress={() => navigation.navigate('dashboard')} /> */}
      {/* <CustomButton text="Sign In >" onPress={() => navigation.navigate('mytabs')} /> */}
      <CustomButton text="Sign In >" onPress={() => navigation.navigate('Add To-do')}
      />
      {/* <CustomButton text="Sign In >" onPress={() => navigation.navigate('services')} />  */}

      {/* <CustomButton text="Task" onPress={() => navigation.navigate('Task') } /> */}
      {/* <CustomButton  text='FlatList' onPress={() => navigation.navigate('history')} />
      <CustomButton  text='Image' onPress={() => navigation.navigate('image')}  />
      <CustomButton  text='Search' onPress={() => navigation.navigate('search')}  /> */}

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
