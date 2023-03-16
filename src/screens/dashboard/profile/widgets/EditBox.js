import React, {useState} from 'react';
import {View, TextInput, Image, Text, TouchableOpacity} from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '@themes/colors';
import Fonts from '@themes/fonts';
const EditBox = ({
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
    setIsEnabled(!isEnabled);
  };
  return (
    <View style={styles.box}>
      <View style={{flexDirection : "row", justifyContent:"space-between", flex : 1}}>
        <Text style={styles.heading}>{title}</Text>
        <TouchableOpacity onPress={toggleBtn}>
        <Image
          style={styles.rightImage}
          source={leftImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
      </View>
        <TextInput
          style={{fontSize: 20,flex :1,}}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          placeholderTextColor="#7d7d7d"
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
    marginHorizontal: '25@s',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15@vs',
    height: '50@vs',
    width: '310@s',
    margin : "10@vs",
  },
  rightImage: {
    width: '24@s',
    height: '24@vs',
  },
  heading: {
    fontSize: "14@s",
    color: 'black',
    fontWeight: 'bold',
  },
});
export default EditBox;
