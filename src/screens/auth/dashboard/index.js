import {Text, View, FlatList, Image, TouchableOpacity,} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import styles from './style';
import CategoriesBox from './widgets/categories';
import Item from './widgets/item';
import Fonts from '@themes/fonts';
import Colors from '@themes/colors';
import {DATA, List} from '../../../data';
import HeaderComponent from './widgets/HeaderComponent';
import FooterComponent from './widgets/FooterComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';
const Dashboard = ({route, navigation, List}) => {
  const renderItem = ({item, index}) => {
    return (
      <Item
        place={item.userPlace}
        time={item.userTime}
        source={item.source}
        date={item.userDate}
        onPress={() => navigation.navigate('edit', {item: item, index: index})}
      />
    );
  };
  console.log("List",List);
  return (
    <FlatList
      data={List}
      renderItem={renderItem}
      ListHeaderComponent={HeaderComponent}
      ListFooterComponent={FooterComponent}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
function mapStateToProps(state) {
  return {
    List: state.todo.todosList,
  };
}

export default connect(mapStateToProps, null)(Dashboard);
