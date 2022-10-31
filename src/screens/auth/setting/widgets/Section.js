import { Text, View } from 'react-native'
import React, { Component } from 'react'

const Section = ({title}) => {
  return (
    <View style={{marginTop:10,}}>
      <Text style={{color:"#7d7d7d",fontSize:16}}>{title}</Text>
    </View>
  )
}
export default Section;