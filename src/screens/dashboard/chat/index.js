import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {firebase} from '@react-native-firebase/database';
import UsersBox from './widgets/usersBox';

import styles from './style';
const Chat = ({navigation}) => {
  const [state, setState] = useState({
    userLists: [],
  });
  useEffect(() => {
    firebase
      .app()
      .database('https://todo-18c78-default-rtdb.firebaseio.com/')
      .ref('/users/userList')
      .once('value')
      .then(snapshot => {
        let values = Object.values(snapshot.val());
        setState(state => ({...state, userLists: values}));
      });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingTitle}>Here to Chat</Text>
      </View>
      <View>
        {state?.userLists.map((element,index) => (
          <UsersBox
            key={index}
            text={element?.userName}
            onPress={() => navigation.navigate('openChat',{userId : element?.userId, index : index})}
          />
        ))}
      </View>
    </View>
  );
};
export default Chat;
