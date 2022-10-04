import axios from 'axios';
import React from 'react';
import {View, Text} from 'react-native';
import {useState, useEffect} from 'react';

const baseURL = 'https://jsonplaceholder.typicode.com/posts/1';

const Services = () => {
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    axios.get(baseURL).then(response => { response.body
    })
  },[]);
  if (!post) return null;
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
      <Text style={{padding: 10}}>
        userID = {post.id}
      </Text>
      <Text style={{padding: 10}}>
        Title = {post.title}
      </Text>
      <Text>body = {post.body}</Text>
    </View>
  );
};
export default Services;
