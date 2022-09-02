import {View, Image} from 'react-native';
import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {s, vs, ms, mvs} from 'react-native-size-matters';

const Box = ({source}) => {
  return (
    <View style={styles.container}>
      <Image source={source} />
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '50@mvs',
    width: '100@s',
    height: '100@vs',
  },
});
export default Box;
