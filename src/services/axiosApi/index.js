import axios from 'axios';
import React from 'react';

// const baseURL = 'https://jsonplaceholder.typicode.com/posts/1';
// const baseURL = 'https://dog.ceo/api/';
const baseURL = 'https://jsonplaceholder.typicode.com/'

const Services = () => {
  const [todos, setTodos] = React.useState(null);
  React.useEffect(() => {
    axios.get(baseURL).then(response => { console.log("response",response.body)
    })
  },[]);
  if (!post) return null;
  return (
    console.log("not work")
  );
};
export default Services;
