import React from 'react';
import {Image, TouchableOpacity, Text} from 'react-native';
import {ms, vs, ScaledSheet} from 'react-native-size-matters';
import Images from '@themes/images';

const GoBack = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={Images.back} style={styles.backIcon} />
    </TouchableOpacity>
  );
};
const styles = ScaledSheet.create({
  container: {
    width: 20,
    padding: ms(5),
  },
  backIcon: {
    width: '19@s',
    height: '16@vs',
    resizeMode: 'contain',
  },
});
export default GoBack;
