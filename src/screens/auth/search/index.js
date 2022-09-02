import {Text, View, TextInput} from 'react-native';
import React, {Component} from 'react';
import styles from './style';
import SearchIcon from '@components/Search';

const Data = [
  {

  }
]
const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <SearchIcon  />
      <TextInput placeholder="Search" />
      </View>
    </View>
  );
};
export default Search;
