import { Text, View } from 'react-native'
import React, { Component } from 'react'

const Headings = ({title}) => {
  return(
    <View style={{justifyContent:"flex-start",alignItems:"flex-start"}}>
      <Text style={{fontSize:14,color:"black",fontWeight:"bold",justifyContent:"flex-start",alignItems:"flex-start"}}>{title}</Text>
    </View>
  )
}
export default Headings;