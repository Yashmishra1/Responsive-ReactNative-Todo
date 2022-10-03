import { Text, View, SectionList} from 'react-native'
import React, { Component } from 'react'
import Item from './widgets/Item';
import Images from '@themes/images';
import Section from './widgets/Section';
import {GENERAL, PRODUCTIVITY} from '../../../data';
const renderItem = ({item}) => {
  return(
    <Item task={item.task} source={item.source} language={item.language} rightIcon={item.icon}/>
  )
}
const renderSectionHeader = ({section}) => {
  return(
    <Section title={section.title} />
  )
}
const Setting = () => {
  return(
    <View style={{flexDirection:"row",marginHorizontal:27,flex:1,marginTop:10,}}>
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