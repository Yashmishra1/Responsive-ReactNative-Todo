import {View,Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {Box, CustomButton} from '@components';
import Images from '@themes/images';

const VerificationCode = () => {
  return (
    <View style={styles.container}>
      <Box source={Images.verificationlogo} />
      <Text style={styles.primarytext}>Verification Code</Text>
      <Text>{"Use the one time password To reset your password"}</Text>

        <CustomButton style={styles.cancelButton} text="Verify Now " />
    </View>
  );
};
export default VerificationCode;
