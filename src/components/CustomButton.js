import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import {ScaledSheet} from 'react-native-size-matters';

const CustomButton = ({text,onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text} >{text}</Text>
    </TouchableOpacity>
  );
};
const styles = ScaledSheet.create({
  container: {
    marginTop:'30@vs',
    backgroundColor: '#12E3B3',
    width: '300@s',
    padding: '15@msr',
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: '22@s',
  },
  text: {
    color: 'white',
    fontSize:16,
  },
});
export default CustomButton;
