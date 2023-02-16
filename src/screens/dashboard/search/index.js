import {Text, View, TextInput, FlatList, Image} from 'react-native';
import React, {Component, useState} from 'react';
import styles from './style';
import SearchIcon from '@components/Search';
import Images from '../../../theme/images';
import {connect, useSelector, useDispatch} from 'react-redux';

const DATA = [
  {id: 0, title: 'user0'},
  {id: 1, title: 'user1'},
  {id: 2, title: 'user2'},
  {id: 3, title: 'user3'},
  {id: 4, title: 'user4'},
  {id: 5, title: 'user5'},
];
const Item = ({title}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};
const Search = () => {
  const [state, setState] = useState({
    title: '',
  });

  const renderItem = ({item}) => {
    return <Item title={item.userPlace} />;
  };
  const todos = useSelector(state => state.todos.todosList);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchBox}>
          <SearchIcon />
          <TextInput placeholder="Search" />
        </View>
        <View style={styles.slide}>
          <Image source={Images.slide} style={styles.slideLogo} />
        </View>
      </View>
      <Text style={styles.heading}>Upcoming</Text>
      <View>
        <FlatList data={todos} renderItem={renderItem} />
      </View>
    </View>
  );
};
export default Search;
