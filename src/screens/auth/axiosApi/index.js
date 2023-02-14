import axios from 'axios';
import React from 'react';
import {View, Text} from 'react-native';
import {useState, useEffect} from 'react';

// const baseURL = 'https://jsonplaceholder.typicode.com/posts/1';
const baseURL = 'https://dog.ceo/api/';

const Services = () => {
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    axios.get(baseURL).then(response => { response.body
    })
  },[]);
  if (!post) return null;
  return (
    console.log("not work")
  );
};
export default Services;
