import {ScrollView, View, Text, Button} from 'react-native';
import React, {Component, useState} from 'react';
import styles from './ScrollView';
import Images from '@themes/images';
import {SafeAreaView} from 'react-native-safe-area-context';
import GoBack from '../../../components/goBack';

// const Header = () => {
//   return (
//     <view style={styles.header}>
//       <Text style={{fontSize:10,}}>Home</Text>
//       <Text>About us </Text>
//       <Text>Contact</Text>
//     </view>
//   );
// };
const History = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollview} stickyHeaderIndices={[1]}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui official deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
export default History;
