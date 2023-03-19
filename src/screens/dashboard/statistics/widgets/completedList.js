import React from 'react'
import { View,Text } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import {s, vs, ms, mvs} from 'react-native-size-matters';

const CompletedList = ({day,Completed}) => {
  return (
    <View>
      <Text>{day}</Text>
      <View style={styles.progressBox}>
        <View style={styles.progressTodo}></View>
        <View  style={styles.remainprogressTodo}></View>
        <Text style={{marginLeft : 10,}}>{Completed}</Text>
      </View>
    </View>
  )
}
const styles = ScaledSheet.create({
progressBox : {
  flexDirection:"row",
  alignItems : "center",
},
progressTodo : {
  backgroundColor:"#8b74f1",
  height:"4@vs",
  width:"100@s",
},
remainprogressTodo : {
  backgroundColor:"#dfdfdf",
  height:"4@s",
  width : "100@s",
}
})

export default CompletedList