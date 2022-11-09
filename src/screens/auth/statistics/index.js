import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux';

const Statistics = () => {
  const dogs_api =  () => {
    axios.get("https://dog.ceo/api/breeds/list/all").then((res) => console.log(res.data).cache((e) => console.log(e)))
  } 
  return(
    <View style={{justifyContent:"center", marginTop:60,alignItems:"center",height:"10%"}}>
    <Text >Coming soon Statstics</Text>
    <Text>APi testing </Text>
    <Button title='onPress'  onPress={dogs_api} />
    </View>
  )
}
export default Statistics;
