import React, { useState } from 'react';
import {View, TextInput, Image, Text, TouchableOpacity,} from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '@themes/colors';
import Fonts from '@themes/fonts';
const EditInputBox = ({
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
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleBtn = () =>{
    setIsEnabled(!isEnabled)
  }
  return (
    <View style={[styles.box]}>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: '#fff',
          borderRadius: 25,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image style={Inputstyle} source={icon} resizeMode="contain" />
      </View>
      <View>
        <Text
          style={styles.heading}>
          {title}
        </Text>
        <TextInput
          style={style}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          placeholderTextColor="black"
          autoCorrect={autoCorrect}
          multiline={multiline}
          lineHeight={lineHeight}
          value={value}
          editable={isEnabled}
        />
      </View>
      <TouchableOpacity onPress={toggleBtn}>
        <Image
          style={styles.rightImage}
          source={leftImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = ScaledSheet.create({
  box: {
    marginVertical: "12@vs",
    flexDirection: 'row',
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
export default EditInputBox;
