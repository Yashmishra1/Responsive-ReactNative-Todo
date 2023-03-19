import {Text, View, Image} from 'react-native';
import React, {Component} from 'react';
import Images from '@themes/images';
import EditBox from './widgets/EditBox';
import styles from './style';
import { firebase } from '@react-native-firebase/database';
const Profile = () => {
  const emailId = firebase.auth()?.currentUser.email
  console.log("names",emailId);
  const names = firebase.auth()
  return (
    <View style={styles.container}>
      <View style={styles.wrapContainer}>
        <Image source={Images.profile} />
        <Image source={Images.addImage} style={styles.addImage} />
      </View>
      <View>
      <EditBox title="User Name" placeholder="Yash Mishra" leftImage={Images.editIcon}/>
      <EditBox placeholder={emailId} title="Email" leftImage={Images.editIcon}/>
      <EditBox placeholder="Software Development Associate" title="About" leftImage={Images.editIcon}/>
      </View>
    </View>
  );
};
export default Profile;
