import {Text, View,Image } from 'react-native'
import React, { Component } from 'react'
import Images from '@themes/images';
import Headings from './widgets/Headings';
const Profile = () => {
  return(
    <View style={{marginTop:52,marginHorizontal:30,flex:1,alignItems:"center"}}>
      <View>
      <Image source={Images.profile} style={{width:90, height:90,alignItems:"center",}}  />
      </View>
      <View style={{alignSelf:"flex-start",flexDirection:"row",justifyContent:"space-between"}}>
      <Text style={{fontSize:14,color:"black",fontWeight:"bold",justifyContent:"space-between"}}>User Name</Text>
      <Image source={Images.editIcon} style={{width:15,height:15,alignSelf:"flex-end",justifyContent:"space-between"}}/>
      </View>
    </View>
  )
}
export default Profile;