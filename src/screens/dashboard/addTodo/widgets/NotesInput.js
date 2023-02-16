import {title} from 'process';
import React from 'react';
import {View, TextInput, Image, Text, TouchableOpacity} from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import {ScaledSheet} from 'react-native-size-matters';

const NotesInput = ({
  placeholder,
  secureTextEntry,
  keyboardType,
  onChangeText,
  icon,
  autoCorrect,
  title,
  leftImage,
  placeholderColor,
  multiline,
  maxLength,
  style
}) => {
  return (
    <View style={styles.box}>
      <Image style={style} source={icon} resizeMode="contain" />
      <View style={{right:35,}}>
        <Text style={{lineHeight: 30,color:"grey",fontSize:14}}>{title}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          placeholderTextColor={placeholderColor}
          autoCorrect={autoCorrect}
          maxLength={maxLength}
          multiline={multiline}
        />
    <Image style={styles.inputimage} source={leftImage} resizeMode="contain" />
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
    borderRadius: '15@vs',
    height: '95@vs',
    width: '310@s',
  },
  input: {
    fontSize: 16,
    width: '210@s',
  },
  inputimage: {
    right:10,
    marginTop:10,
    width: '21@s',
    height: '15@vs',
  },
});
export default NotesInput;
