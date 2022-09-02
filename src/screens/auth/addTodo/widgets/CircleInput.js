import {title} from 'process';
import React from 'react';
import {View, TextInput, Image, Text} from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import {ScaledSheet} from 'react-native-size-matters';
import Fonts from '@themes/fonts';
import Colors from '../../../../theme/colors';

const CircleInput = ({
  placeholder,
  secureTextEntry,
  keyboardType,
  onChangeText,
  icon,
  autoCorrect,
  title,
  leftImage,
  placeholderColor,
}) => {
  return (
    <View style={styles.box}>
      <Image style={styles.inputimage} source={icon} resizeMode="contain" />
      <View style={{right: 25}}>
        <Text style={[styles.heading, {fontFamily: Fonts.PoppinsLight}]}>
          {title}
        </Text>
        <TextInput
          style={[styles.input,{fontFamily: Fonts.PoppinsLight, color: Colors.black}]}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          autoCorrect={autoCorrect}
          placeholderTextColor={placeholderColor}
        />
        {/* <Image style={styles.inputimage} source={leftImage} resizeMode="contain" /> */}
      </View>
    </View>
  );
};
const styles = ScaledSheet.create({
  box: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: '#e6e6e6',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: '15@vs',
    height: '40@vs',
    width: '135@s',
  },
  input: {
    fontSize: 16,
    width: '50@vs',
  },
  inputimage: {
    right:7,
    flexDirection: 'row',
    width: '20@s',
    height: '20@vs',
  },
  heading: {
    marginTop: 5,
    fontSize: 14,
    color: '#7d7d7d',
  },
});
export default CircleInput;
