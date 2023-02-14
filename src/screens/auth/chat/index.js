import React, {useState,useEffect,useCallback} from 'react'
import { View,Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'

const Chat = () => {
  const [messages, setMessages] = useState([]);
  console.log("message",messages)
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello Yash',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      placeholder="Enter a message...."
      user={{
        _id: 1,
      }}
    />
  )
}
export default Chat;