import {Text, View,Image } from 'react-native'
import React, { Component } from 'react'
import Images from '@themes/images';
import Headings from './widgets/Headings';
const Profile = () => {
  return(
    <View style={{marginTop:52,marginHorizontal:30,flex:1,justifyContent:"center",alignItems:"center"}}>
      <View>
      <Image source={Images.profile} style={{width:90, height:90,alignItems:"center"}}  />
      </View>
    </View>
  )
}
export default Profile;