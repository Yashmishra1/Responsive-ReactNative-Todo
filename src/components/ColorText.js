import {Text, View, TouchableHighlight, TouchableOpacity} from 'react-native';
import React from 'react';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import {ScaledSheet} from 'react-native-size-matters';

const ColorText = ({text, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity  activeOpacity={0.5}  onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf:"flex-end",
  },
  text: {
    marginTop: 8,
    color: '#236EEE',
    fontSize: 16,
    paddingHorizontal: 0.99,
  },
});
export default ColorText;
