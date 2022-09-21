import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import styles from './style';
import CategoriesBox from './widgets/Categories';
import Item from './widgets/Item';
import Fonts from '@themes/fonts';
import Colors from '@themes/colors';
import {DATA, List} from '../../../data';
import HeaderComponent from './widgets/HeaderComponent';
import FooterComponent from './widgets/FooterComponent';
import Navigation from '../../../navigation/Navigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';
const Dashboard = ({route, navigation,List}) => {
  const renderItem = ({item,index}) => {
    return (
      <Item
        place={item.userPlace}
        date={item.userDate}
        source={item.source}
        onPress={() => navigation.navigate('edit',{item : item,index : index})}
      />
    );
  };
  // const [store, setStore] = useState([]);
  // useEffect(() => {
  //   getData();
  // }, [store]);
  // const getData = async () => {
    // try {
    //   const value = await AsyncStorage.getItem('@user_input');
    //   if (value !== null) {
    //     let result = JSON.parse(value);
    //     setStore(result);
    //   }
    // } catch (e) {
    //   console.log(e);
    //   alert('Failed to fetch the input from storage');
    // }
  //   setStore(List)
  // };
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
