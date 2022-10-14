import React from 'react';
import {View, TextInput,Image,Text} from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import {ScaledSheet} from 'react-native-size-matters';

const Input = ({
  placeholder,
  secureTextEntry,
  keyboardType,
  onChangeText,
  source,
  editable,
  value,
}) => {
  return (
    <View style={styles.box}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        placeholderTextColor="#7D7D7D"
        editable={editable}
        value={value}
      />
      <Image style={styles.inputimage} source={source} resizeMode="contain" />
    </View>
  );
};
const styles = ScaledSheet.create({
  box: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: '#e6e6e6',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 0.2,
    height: '50@vs',
    width: '310@s',
  },
  input: {
    fontSize: 16,
    width: '200@vs',
  },
  inputimage: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '21@s',
    height: '15@vs',
  },
});
export default Input;
