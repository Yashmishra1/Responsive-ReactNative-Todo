import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Images from '@themes/images';

const Notification = () => {
  return (
    <TouchableOpacity>
      <Image source={Images.notificationIcon} style={styles.notificationIcon} />
    </TouchableOpacity>
  );
};
const styles = ScaledSheet.create({
  notificationIcon: {
    width: '30@s',
    height: '30@vs',
  },
});
export default Notification;
