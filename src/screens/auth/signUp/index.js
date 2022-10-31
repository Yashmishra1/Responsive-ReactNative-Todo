import React from 'react';
import {Image, View, Pressable, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import {Input, CustomButton, ColorText} from '@components';
import Images from '@themes/images';

const SignUp = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
         <View style={styles.connectLogo}>
      <Image source={Images.logo} style={styles.todologo} />

      </View>
      <View style={styles.inputbox}>
        <View style={styles.topRadius}>
          <Input placeholder="Username" />
        </View>
        <Input placeholder="Email" keyboardType={'email-address'} />
        <Input
          placeholder="Password"
          style={styles.BottomRadius}
        />
      </View>

      <Input
        placeholder={'Confirm Password'}
        source={require('@images/eye.png')}
      />
      <CustomButton text={'Sign Up '} />

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
