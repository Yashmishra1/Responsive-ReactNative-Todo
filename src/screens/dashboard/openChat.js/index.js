import React, {useState, useCallback, useEffect, useMemo} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import database from '@react-native-firebase/database';
import {firebase} from '@react-native-firebase/database';
import styles from './style';
import _ from 'lodash';
import moment from 'moment';

const OpenChat = ({route}) => {
  const [messages, setMessages] = useState([]);
  console.log("Messages",messages);
  useEffect(() => {
    const subscribe = database()
      .ref(`/rooms/${roomId}/`)
      .on('value', snapshot => {
        if (snapshot?.exists()) {
          let values = Object.values(snapshot?.val());
          values = _.orderBy(values, ['time'], ['desc']);
          setMessages(values);
        } else {
          console.log('error');
        }
      });
    return () => {
      subscribe();
    };
  }, []);
  const {userId} = route.params;
  const currentUid = firebase.auth()?.currentUser?.uid;
  let roomId = [currentUid, userId];
  roomId = roomId.sort().join('_');

  const onSend = useCallback((messages = []) => {
    let data = {
      _id: messages[0]?._id,
      user: {_id: currentUid},
      time: moment().format('MMMM Do YYYY, h:mm:ss a').toString(),
      text: messages[0]?.text,
      senderId: currentUid,
    };
    database()
      .ref(`/rooms/${roomId}/`)
      .push()
      .update(data)
      .then(() => console.log('Data updated'));
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages.messages, messages),
    );
  }, []);

  const renderMessage = message => {
    const senderId = message?.currentMessage?.senderId;
    const text = message?.currentMessage?.text;
    const time = moment(
      message?.currentMessage?.time,
      'MMMM Do YYYY, h:mm:ss a',
    ).format('h:mm a');

    return senderId && 
      <View style={currentUid === senderId ? styles.sendMsg : styles.receiveMsg}>
        <View style={styles.messageContainer}>
          <Text style={styles.title}>{text}</Text>
        </View>
        <View style={styles.containerTime}>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
  };
  return (
    <ImageBackground
      source={require('@images/backgroundChat.jpeg')}
      resizeMode="cover"
      style={{flex: 1}}>
      <GiftedChat
        messages={_.orderBy(messages, ['time'], ['desc'])}
        onSend={messages => onSend(messages)}
        placeholder="Enter a message...."
        renderMessage={renderMessage}
        bottomOffset={22}
        user={{
          _id: currentUid,
        }}
      />
    </ImageBackground>
  );
};

export default OpenChat;
