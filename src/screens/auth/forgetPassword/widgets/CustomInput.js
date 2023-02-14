import React, { useState } from 'react';
import { View, TextInput, Image, Text, TouchableOpacity, } from 'react-native';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { ScaledSheet } from 'react-native-size-matters';
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
  const toggleBtn = () => {
    setIsEnabled(!isEnabled)
  }
  return (
    <View style={styles.box}>
        <TextInput
          style={{marginLeft:25}}
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
  );
};
const styles = ScaledSheet.create({
  box: {
    flexDirection: 'row',
    borderColor: '#e6e6e6',
    backgroundColor:"#fff",
    alignItems: 'center',
    borderRadius: '25@vs',
    height: '40@vs',
    width: '310@s',
  },
});
export default EditInputBox;
