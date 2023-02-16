import { Text, View, SectionList, Alert} from 'react-native'
import React, { Component } from 'react'
import Item from './widgets/Item';
import Section from './widgets/Section';
import {GENERAL, PRODUCTIVITY} from '../../../data';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebase } from '@react-native-firebase/auth';

const renderSectionHeader = ({section}) => {
  return(
    <Section title={section.title} />
  )
}

const Setting = ({navigation}) => {
  const renderItem = ({item}) => {
    const handleOnPress = async () => {
        if(item?.task === "Logout")
        {
          Alert.alert('Logout', 'are you sure you want to logout?', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: async () => {
                await firebase.auth().signOut()
                navigation.replace('authStack');
              },
            },
          ]);
        }else if(item?.task === "Delete Account") {
          Alert.alert('Logout', 'are you sure you want to Delete?', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: async () => {
                await AsyncStorage.removeItem("@user_input")
                navigation.replace('login');
              },
            },
          ]);
        }else if(item?.task === "Chat with us")
        {
          navigation.navigate("chat")
        }
    }
    return(
      <Item task={item.task} source={item.source} language={item.language} rightIcon={item.icon} onPress={handleOnPress} />
    )
  }
  return(
    <View style={{flexDirection:"row",marginHorizontal:27,flex:1,}}>
      <SectionList
        sections={[...GENERAL, ...PRODUCTIVITY]}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={item=>item.id}
      />
    </View>
  );
};
export default Setting;