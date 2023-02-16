import { Text, View } from 'react-native';
import React, { Component,useState } from 'react';
import { ScaledSheet } from 'react-native-size-matters';

const CategoriesBox = ({ title, subTitle, Color }) => {
  const[percentage,setPercentage] = useState()
  return (
    <View style={styles.categoriesBox}>
      <Text style={styles.primaryTitle}>{title} {"Tasks"}</Text>
      <Text style={styles.largeHeading}>{subTitle}</Text>
      <View style={styles.border}>
        <View style={[styles.taskView, { backgroundColor: Color,},]}/>
        <View style={styles.remainTask} />
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
    marginHorizontal:"10@s",
  },
  taskView: {
    backgroundColor: '#8b74f1',
    height: '2@vs',
    width: '60@s',
  },
  remainTask: {
    backgroundColor: '#d9d9d9',
    borderRadius: 15,
    height: '2@vs',
    width: '60@s',
  },
  pinkView: {
    backgroundColor: '#ff8eb7',
    height: '2@vs',
    width: '60@s',
  },
});
export default CategoriesBox;
