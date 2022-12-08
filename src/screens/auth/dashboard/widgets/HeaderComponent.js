import { Text, View } from 'react-native'
import React, { Component,useState } from 'react'
import styles from '../style';
import Colors from '@themes/colors';
import Fonts from '@themes/fonts';
import CategoriesBox from './categories';

const HeaderComponent = ({BusinessTask,PersonalTask}) => {
  const progress = () => {
    if(BusinessTask)
    {
      return Colors.purple
    }
  }
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.heading,
          {fontFamily: Fonts.PoppinsLight, color: Colors.grey},
        ]}>
        {'Hey User'}
      </Text>
      <Text style={[styles.subHeading, {fontFamily: Fonts.PoppinsSemiBold}]}>
        {"What's your plan?"}
      </Text>
      <Text style={[styles.Boxheading, {fontFamily: Fonts.PoppinsMedium}]}>
        {' CATEGORIES'}
      </Text>
      <View style={styles.boxContainer}>
        <CategoriesBox
          title={BusinessTask}
          subTitle="Business"
          Color={Colors.purple}
        />
        <CategoriesBox
          title={PersonalTask}
          subTitle="Personal"
          Color={Colors.pink}
        />
      </View>
      <Text style={[styles.todoTitle, {fontFamily: Fonts.PoppinsMedium}]}>
        {"Today's to-do's"}
      </Text>
    </View>
  );
};
export default HeaderComponent;