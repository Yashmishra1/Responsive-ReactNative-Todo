import { Alert, Button, FlatList, Text, TextInput, View } from 'react-native'
import React, { Component,useState } from 'react'
import axios from 'axios'
import {connect} from 'react-redux';
import { firebase } from '@react-native-firebase/database';

const WishList = () => {
  const dogs_api =  () => {
    axios.get("https://dog.ceo/api/breeds/list/all").then((res) => console.log(res.data).cache((e) => console.log(e)))
  } 


  const Json_Api = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => console.log(json));
  }
  const[state,setState] = useState({
    name : "",
    password : "",
    isShow: false
  })
  const persons = [
  {
	id: "1",
	name: "Earnest Green",
  },
  {
	id: "2",
	name: "Winston Orn",
  },
  {
	id: "3",
	name: "Carlton Collins",
  },
  {
	id: "4",
	name: "Malcolm Labadie",
  },
  {
	id: "5",
	name: "Michelle Dare",
  },
  {
	id: "6",
	name: "Carlton Zieme",
  },
  {
	id: "7",
	name: "Jessie Dickinson",
  },
  {
	id: "8",
	name: "Julian Gulgowski",
  },
  {
	id: "9",
	name: "Ellen Veum",
  },
  {
	id: "10",
	name: "Lorena Rice",
  },

  {
	id: "11",
	name: "Carlton Zieme",
  },
  {
	id: "12",
	name: "Jessie Dickinson",
  },
  {
	id: "13",
	name: "Julian Gulgowski",
  },
  {
	id: "14",
	name: "Ellen Veum",
  },
  {
	id: "15",
	name: "Lorena Rice",
  },
];
  const submit = () => {
    if(!state.name){
      Alert.alert("Enter name")
    } else {
      setState((state) => ({...state, isShow: true}))
    }
  }
  return(
    <View style={{justifyContent:"center",alignItems:"center",flex : 1}}>
      {/* {persons.map(person => <Text key={person}>{person.name}</Text>)} */}
    <Text>Coming soon Statistics</Text>
    <Text>APi testing </Text>
    <Button title='onPress'  onPress={dogs_api} />
    <Button title="ForJsonPlaceholder" onPress={Json_Api} /> 
    <View >
      <TextInput placeholder='enter name' value={state.name} onChangeText={text => setState({...state, name: text})}  style={{backgroundColor:"#fff", width:200, height:50,color:"black"}}/>
      <TextInput placeholder='enter password' value={state.password} onChangeText={text => setState({...state, password : text})} style={{backgroundColor:"#fff", width:200, height:50,color:"black"}}/>
      <Button title='submit' onPress={submit}  />
      {state.isShow && (
        <View>
        <Text>Hello {state.name}</Text>
        <Text>Your password is {state.password}</Text>
          </View>
      )}
      <View>
        
      </View>
    </View>
    </View>
  )
}
export default WishList;
