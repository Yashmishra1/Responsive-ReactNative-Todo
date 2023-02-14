import { Text, View,Image } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import {ScaledSheet, s, vs} from 'react-native-size-matters';
import Fonts from '@themes/fonts';
import Images from '@themes/images';

const CustomDropdown = ({searchPlaceholder,data,placeholder,source,style,onBlur,onChange,value,onFocus}) => {
    return (
      <View>
       <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          searchPlaceholder={searchPlaceholder}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={placeholder}
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          renderLeftIcon={() => (
            <Image source={source} style={style}/>
          )}
        />
      </View>
    )
}
const styles = ScaledSheet.create({
  dropdown: {
    borderRadius: '15@vs',
    padding: '12@s',
    height: '40@vs',
    width: '310@s',
    backgroundColor:"#fff",
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    left:10,
    color: '#7d7d7d',
  },
  selectedTextStyle: {
    fontSize: 16,
    left:10,
    color: '#7d7d7d',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  bottomIcon:
  {
    width: '24@s',
    height: '24@vs',
  },
  priorityIcon:
  {
    width: '17@s',
    height: '19@vs',
  },
})
export default CustomDropdown;