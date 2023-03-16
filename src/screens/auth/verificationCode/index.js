import {View,Text, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Box, CustomButton} from '@components';
import Images from '@themes/images';
import CustomInput from './widgets/CustomInput';
import { TouchableOpacity } from 'react-native-gesture-handler';

const VerificationCode = () => {
  const [state,setState] = useState({
    input1 : "",
    input2 : "",
    input3 : "",
    input4 : "",
  })
  const verify = () => {
    if(!state.input1)
    {
      Alert.alert("Please Enter OTP")
    }
    else if(!state.input2)
    {
      Alert.alert("Please Enter OTP")
    }
    else if(!state.input3)
    {
      Alert.alert("Please Enter OTP")
    }
    else if(!state.input4)
    {
      Alert.alert("Please Enter OTP")
    }
    else {
      Alert.alert("Successfully")
    }
  }
  return (
    <View style={styles.container}>
      <Box source={Images.verificationlogo} />
      <Text style={styles.primarytext}>Verification Code</Text>
      <Text style={styles.subTitle}>{"Use the one time password To reset your password"}</Text>
      <View style={styles.verificationBox}>
        <CustomInput placeholder="0" onChangeText={text => setState({...state, input1 : text})}/>
        <CustomInput placeholder="0" onChangeText={text => setState({...state, input2 : text})}/>
        <CustomInput placeholder="0" onChangeText={text => setState({...state, input3 : text})}/>
        <CustomInput placeholder="0" onChangeText={text => setState({...state, input4 : text})}/>
      </View>
      <View style={styles.Resendotp}>
        <Text style={styles.secondarytext}>Didn't received code? </Text>
        <TouchableOpacity>
        <Text style={styles.bottomText}>Resend OTP</Text>
        </TouchableOpacity>
      </View>
        <CustomButton style={styles.cancelButton} text="Verify Now " onPress={verify} />
    </View>
  );
};
export default VerificationCode;
