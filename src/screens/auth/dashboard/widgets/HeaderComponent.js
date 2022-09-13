import { Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from '../style';
import Colors from '@themes/colors';
import Fonts from '@themes/fonts';
import CategoriesBox from './Categories';

const HeaderComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
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
          title="40 Tasks"
          subTitle="Business"
          Color={Colors.purple}
        />
        <CategoriesBox
          title="18 Tasks"
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