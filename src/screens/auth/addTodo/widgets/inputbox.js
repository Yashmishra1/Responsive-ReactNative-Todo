import {Text, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {ScaledSheet, vs, s} from 'react-native-size-matters';
import Images from '@themes/images';
import Fonts from '@themes/fonts';
const InputBox = ({title, time, source,rightIcon,icon,style,onPress}) => (
  <View style={styles.item}>
    <View style={styles.Inputdata}>
      <Image source={icon} style={style} />
      <Text style={[styles.title ,{fontFamily :Fonts.PoppinsLight } ]}>{title}</Text>
    </View>
    <View style={styles.DateIcon}>
      <Text style={styles.date}>{time}</Text>
      <TouchableOpacity>
      <Image source={rightIcon} style={styles.rightIcon} onPress={onPress} />
      </TouchableOpacity>
    </View>
  </View>
);
export default InputBox;
const styles = ScaledSheet.create({
  Inputdata: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '18@vs',
    backgroundColor: 'white',
    borderRadius: '15@vs',
    padding: '12@s',
    height: '40@vs',
    width: '310@s',
  },
  icon: {
    width: '22@s',
    height: '20@vs',
  },
  title: {
    fontSize: '12@s',
    left: '20@s',
    color: '#7d7d7d',
  },
  DateIcon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  date: {
    right: '8@s',
    color: '#7d7d7d',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  rightIcon: {
    // justifyContent: 'space-around',
    width: '24@s',
    height: '24@vs',
  },
});
