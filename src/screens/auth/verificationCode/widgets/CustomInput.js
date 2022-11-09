import React from 'react';
import {View, TextInput, Image, Text,} from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import {ScaledSheet} from 'react-native-size-matters';

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
            autoFocus={true}
            value={value}
          />
      </View>
  );
};
const styles = ScaledSheet.create({
  box: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: '50@vs',
    width: '54@s',
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
  },
});
export default CustomInput;
