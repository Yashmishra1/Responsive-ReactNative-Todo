import {Text, View,Image } from 'react-native'
import React, { Component } from 'react'
import Images from '@themes/images';
import EditBox from './widgets/EditBox'

const Profile = () => {
  return(
    <View style={{marginTop:52,marginHorizontal:30,flex:1,alignItems:"center"}}>
      <View>
      <Image source={Images.profile} style={{width:90, height:90,alignItems:"center"}}/>
      </View>
      <View>
      <EditBox title="User Name" placeholder="Yash Mishra" leftImage={Images.editIcon}/>
      <EditBox placeholder="Yash@amplework.com" title="Email" leftImage={Images.editIcon}/>
      <EditBox placeholder="Software Development Associate" title="About" leftImage={Images.editIcon}/>
      </View>
    </View>
  )
}
export default Profile;