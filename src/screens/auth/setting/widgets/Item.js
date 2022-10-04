import {Text, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {ScaledSheet, vs, s} from 'react-native-size-matters';
const Item = ({task, source, language, rightIcon}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image source={source} style={styles.rightIcon} />
        <Text style={styles.title}>{task}</Text>
        <View style={styles.rightContainer}>
          <Text>{language}</Text>
          <Image source={rightIcon} style={{height: 24, width: 24}} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  rightIcon: {
    justifyContent: 'space-around',
    width: '50@s',
    height: '50@vs',
  },
  title:{
    fontSize: 16,
    color: 'black',
    },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default Item;
