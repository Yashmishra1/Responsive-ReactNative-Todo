import {View, Text} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {s, vs, ms, mvs} from 'react-native-size-matters';
const CustomText = ({label}) => {
  return (
    <View>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};
const styles = ScaledSheet.create({
  text: {
    fontSize: '14@s',
    marginTop: '10@vs',
    color: '#7D7D7D',
    textAlign: 'center',
  },
});
export default CustomText;
