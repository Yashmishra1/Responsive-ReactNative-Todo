import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import {ScaledSheet} from 'react-native-size-matters';
import Images from '@themes/images';

const CustomButton = ({text,onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      <Image style={styles.arrowImage} source={Images.buttonArrow} />
    </TouchableOpacity>
  );
};
const styles = ScaledSheet.create({
  container: {
    flexDirection:"row",
    justifyContent:"center",
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
    fontSize:"16@s",
  },
  arrowImage:
  {
    width:"6@s",
    height:"10@vs",
  }
});
export default CustomButton;
