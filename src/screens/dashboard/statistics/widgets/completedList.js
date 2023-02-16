import React from 'react'
import { View,Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import {s, vs, ms, mvs} from 'react-native-size-matters';

const CompletedList = ({day,Completed}) => {
  return (
    <View>
    <Text>RECENTLY COMPLETED</Text>
    <View>
      <Text>{day}</Text>
      <View style={styles.progressBox}>
        <View style={styles.progressTodo}></View>
        <View  style={styles.remainprogressTodo}></View>
        <Text>{Completed}</Text>
      </View>
    </View>
  </View>
  )
}
const styles = ScaledSheet.create({
progressBox : {
  flexDirection:"row",
  justifyContent:"space-around",
},
progressTodo : {
  backgroundColor:"lavenderBlue",
  height:"10@vs",
  width:"400@s",
},
remainprogressTodo : {
  backgroundColor:"grey",
  height:"20@s",
}
})

export default CompletedList