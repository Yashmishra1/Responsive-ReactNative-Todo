import {Text, View, Image, TouchableOpacity} from 'react-native';
import React, {Component, useState} from 'react';
import {ScaledSheet, vs, s} from 'react-native-size-matters';
import Images from '@themes/images';
import Fonts from '@themes/fonts';
const Item = ({place, date, source, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.item}>
        <View style={styles.Inputdata}>
          <Image source={source} style={styles.icon} />
          <Text style={[styles.title, {fontFamily: Fonts.PoppinsLight}]}>
            {place}
          </Text>
        </View>
        <View style={styles.DateIcon}>
          <Text style={styles.date}>{date}</Text>
          <Image source={Images.arrow} style={styles.rightIcon} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Item;
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
    padding: '15@s',
    marginHorizontal: '25@s',
  },
  icon: {
    width: '22@s',
    height: '20@vs',
  },
  title: {
    fontSize: '12@s',
    left: '10@s',
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
    justifyContent: 'space-around',
    width: '5@s',
    height: '8@vs',
  },
});
