import React from 'react';
import {View, TextInput, Image, Text,} from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import {ScaledSheet} from 'react-native-size-matters';
import Fonts from '../theme/fonts';
import Colors from '../theme/colors';

const CustomInput = ({
  placeholder,
  secureTextEntry,
  keyboardType,
  onChangeText,
  icon,
  autoCorrect,
  title,
  leftImage,
  placeholderColor,
  lineHeight,
  multiline,
  style,
  Inputstyle,
  value,
}) => {
  return (
      <View style={styles.box}>
        <Image style={Inputstyle} source={icon} resizeMode="contain" />
        <View>
          <Text
            style={[
              styles.heading,
              {fontFamily: Fonts.PoppinsLight, color: Colors.grey},
            ]}>
            {title}
          </Text>
          <TextInput
            style={style}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            onChangeText={onChangeText}
            placeholderTextColor={placeholderColor}
            autoCorrect={autoCorrect}
            multiline={multiline}
            lineHeight={lineHeight}
            value={value}
          />
        </View>
        <Image
          style={[styles.rightImage, {fontFamily: Fonts.PoppinsRegular}]}
          source={leftImage}
          resizeMode="contain"
        />
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
    width: '310@s',
  },
  inputimage: {
    width: '21@s',
    height: '15@vs',
  },
  rightImage: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row',
    width: '24@s',
    height: '24@vs',
  },
  heading: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'grey',
    fontSize: 14,
  },
});
export default CustomInput;
