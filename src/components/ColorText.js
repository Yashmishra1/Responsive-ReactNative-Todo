import {Text, View, TouchableHighlight} from 'react-native';
import React from 'react';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import {ScaledSheet} from 'react-native-size-matters';

const ColorText = ({text, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight  activeOpacity={0.5} underlayColor="#236EEE" onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableHighlight>
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    left: '18%',
  },
  text: {
    marginTop: 8,
    color: '#236EEE',
    fontSize: 16,
    paddingHorizontal: 0.99,
  },
});
export default ColorText;
