import {View,Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {Box, CustomButton} from '@components';
import Images from '@themes/images';
import CustomInput from './widgets/CustomInput';

const VerificationCode = () => {
  return (
    <View style={styles.container}>
      <Box source={Images.verificationlogo} />
      <Text style={styles.primarytext}>Verification Code</Text>
      <Text style={styles.subTitle}>{"Use the one time password To reset your password"}</Text>
      <View style={styles.verificationBox}>
        <CustomInput placeholder="0"/>
        <CustomInput placeholder="0"/>
        <CustomInput placeholder="0"/>
        <CustomInput placeholder="0"/>
      </View>
        <CustomButton style={styles.cancelButton} text="Verify Now " />
    </View>
  );
};
export default VerificationCode;
