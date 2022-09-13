import { Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from '../style';
import Fonts from '@themes/fonts';
import Colors from '@themes/colors';
import {DATA, List} from '../../../../data';

const FooterComponent = () => {
  return (
    <View style={styles.FooterStyle}>
      {List.map(names => {
        return (
          <View>
            <Text
              style={[styles.FooterList, {fontFamily: Fonts.PoppinsMedium}]}>
              {names.pending}
            </Text>
            <View style={styles.FooterLine}></View>
          </View>
        );
      })}
    </View>
  );
};
export default FooterComponent;