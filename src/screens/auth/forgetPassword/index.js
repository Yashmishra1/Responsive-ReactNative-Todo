import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {
  Box,
  CustomText,
  CustomButton,
  ColorText,
} from '@components';
import CustomInput from '../forgetPassword/widgets/CustomInput'
import Images from '@themes/images';

const ForgotPassword = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Box source={Images.Forgotlogo} style={styles.logo} />
      <Text style={styles.primarytext}>Forgot Password?</Text>
      <CustomText label="Please enter your email address to reset your password" />
      <View style={styles.inputBox}>
        <CustomInput placeholder="Email" keyboardType="email-address" style={{justifyContent:"center",alignItems:"center"}} />
      </View>
      <View style={styles.colorInput}>
        <CustomButton onPress={() => navigation.navigate('verificationCode')} text="Send " />
      </View>
      <View style={styles.cancelButton}>
        <ColorText onPress={() => navigation.navigate('login')} text="Cancel" />
      </View>
    </View>
  );
};
export default ForgotPassword;
