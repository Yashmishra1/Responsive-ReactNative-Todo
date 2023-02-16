import {Text, View,Image } from 'react-native'
import React, { Component } from 'react'
import Images from '@themes/images';
import EditBox from './widgets/EditBox'

const Profile = () => {
  return(
    <View style={{marginTop:52,marginHorizontal:30,flex:1,alignItems:"center"}}>
      <View style={{justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
      <Image source={Images.profile} style={{width:100, height:100}}></Image>
      <Image source={Images.addImage} style={{width:33, height:33}} />
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