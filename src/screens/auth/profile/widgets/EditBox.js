import React, { useState } from 'react';
import {View, TextInput, Image, Text, TouchableOpacity,} from 'react-native';
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
  const toggleBtn = () =>{
    setIsEnabled(!isEnabled)
  }
  return (
    <View style={styles.box}>
      <View>
      <Text
          style={styles.heading}>
          {title}
        </Text>
        <TextInput
          style={{fontSize:14,marginTop:10,}}
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
    marginHorizontal:"25@s",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '15@vs',
    height: '40@vs',
    width: '310@s',
  },
  rightImage: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row',
    width: '24@s',
    height: '24@vs',
  },
  heading: {
    fontSize:14,color:"black",fontWeight:"bold",justifyContent:"space-between"
  },
});
export default EditBox;
