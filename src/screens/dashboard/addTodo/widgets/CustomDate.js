import React, { useState } from 'react';
import {View,Image, Text, TouchableOpacity} from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import {ScaledSheet} from 'react-native-size-matters';
import Fonts from '@themes/fonts';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'
import { title } from 'process';
const CustomDate = ({
  icon,
  onPress,
  title,
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    onPress(date)
    date = moment(date).format('MMMM Do YYYY, h:mm:ss a');
    hideDatePicker();
  };
  return (
    <TouchableOpacity onPress={showDatePicker}>
      <View style={styles.box}>
        <Image style={styles.inputimage} source={icon} resizeMode="contain" />
        <View style={{right: 25}}>
          <Text style={[styles.heading, {fontFamily: Fonts.PoppinsLight}]}>
            {title}
          </Text>
        </View>
      </View>
        <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker} />
    </TouchableOpacity>
  );
};
const styles = ScaledSheet.create({
  box: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: '#e6e6e6',
    paddingHorizontal:10,
    alignItems: 'center',
    borderRadius: '15@vs',
    height: '40@vs',
    width: '310@s',
  },
  input: {
    fontSize: 16,
    width: '50@vs',
  },
  inputimage: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '20@s',
    height: '20@vs',
  },
  heading: {
    marginTop: 5,
    fontSize: 14,
    color: '#7d7d7d',
    paddingHorizontal:"40@s",

  },
});
export default CustomDate;
