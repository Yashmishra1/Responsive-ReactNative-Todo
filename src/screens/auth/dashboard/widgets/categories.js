import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { ScaledSheet } from 'react-native-size-matters';

const CategoriesBox = ({ title, subTitle, Color }) => {
  return (
    <View style={styles.categoriesBox}>
      <Text style={styles.primaryTitle}>{title} {"Tasks"}</Text>
      <Text style={styles.largeHeading}>{subTitle}</Text>
      <View style={styles.border}>
        <View style={[styles.purpleView, { backgroundColor: Color,},]}/>
        <View style={styles.greyView} />
      </View>
    </View>
  );
};
const styles = ScaledSheet.create({
  categoriesBox: {
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    borderRadius: '15@vs',
    width: '140@s',
    height: '70@vs',
  },
  primaryTitle: {
    left: '10@s',
    color: '#7d7d7d',
    fontSize: '14@s',
  },
  largeHeading: {
    left: '10@s',
    fontSize: '20@s',
    color: 'black',
    fontWeight: 'bold',
  },
  border: {
    flexDirection: 'row',
    left: '10@s',
  },
  purpleView: {
    backgroundColor: '#8b74f1',
    height: '2@vs',
    width: '60@s',
  },
  greyView: {
    backgroundColor: '#d9d9d9',
    borderRadius: 15,
    height: '2@vs',
    width: 60,
  },
  pinkView: {
    backgroundColor: '#ff8eb7',
    height: '2@vs',
    width: '60@s',
  },
});
export default CategoriesBox;
