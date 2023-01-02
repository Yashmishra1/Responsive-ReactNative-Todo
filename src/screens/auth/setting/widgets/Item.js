import {Text, View, Image, TouchableOpacity,Switch} from 'react-native';
import React, {Component,useState} from 'react';
import {ScaledSheet, vs, s} from 'react-native-size-matters';
const Item = ({task, source, language, rightIcon,value,onPress}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={source} style={styles.leftIcon} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
          }}>
          <Text style={styles.title}>{task}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text>{language}</Text>
        </View>
        <Image source={rightIcon} style={{height: 24, width: 24}} />
        {/* <View> */}
        {/* <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
        </View> */}
      </View>
    </TouchableOpacity>
  );
};
const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '13@vs',
  },
  leftIcon: {
    width: '50@s',
    height: '50@vs',
  },
  title: {
    flexGrow: 0.6,
    fontSize: '16@s',
    color: 'black',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default Item;
