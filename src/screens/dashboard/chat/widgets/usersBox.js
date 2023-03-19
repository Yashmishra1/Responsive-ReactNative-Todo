import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {ScaledSheet, s, vs} from 'react-native-size-matters';

const UsersBox = ({text,onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image style={styles.avatar} source={require('@images/man.png')} />
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};
const styles = ScaledSheet.create({
  container: {
    width : "320@s",
    height:"40@s",
    backgroundColor:"#fff",
    borderRadius : "35@vs",
    alignItems:"center",
    margin : "10@vs",
    flexDirection : "row",
  },
  avatar : {
    width : "20@s",
    height : "20@vs",
    margin : "10@s",
  },
  text : {
    color : "#000"
  }
});
export default UsersBox;
