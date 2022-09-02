import {Text, View, Image} from 'react-native';
import React, {Component} from 'react';
import {ScaledSheet, s, vs} from 'react-native-size-matters';
import GoBack from './goBack';
import SearchIcon from './Search';

const CustomHeader = () => {
  return (
    <View style={styles.container}>
    <GoBack />
    <Text>{title}</Text>
    <SearchIcon />
  </View>
 )};
 

const styles = ScaledSheet.create({
  container: {
    backgroundColor: '#f5f6fa',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export default CustomHeader;
