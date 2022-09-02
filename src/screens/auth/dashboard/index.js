import {Text, View, FlatList, Image} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import styles from './style';
import CategoriesBox from './widgets/categories';
import Item from './widgets/item';
import Fonts from '@themes/fonts';
import Colors from '@themes/colors';
import {DATA, List} from '../../../data';
const HeaderComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Text
        style={[
          styles.heading,
          {fontFamily: Fonts.PoppinsLight, color: Colors.grey},
        ]}>
        {'Hey User'}
      </Text>
      <Text style={[styles.subHeading, {fontFamily: Fonts.PoppinsSemiBold}]}>
        {"What's your plan?"}
      </Text>
      <Text style={[styles.Boxheading, {fontFamily: Fonts.PoppinsMedium}]}>
        {' CATEGORIES'}
      </Text>
      <View style={styles.boxContainer}>
        <CategoriesBox
          title="40 Tasks"
          subTitle="Business"
          Color={Colors.purple}
        />
        <CategoriesBox
          title="18 Tasks"
          subTitle="Personal"
          Color={Colors.pink}
        />
      </View>
      <Text style={[styles.todoTitle, {fontFamily: Fonts.PoppinsMedium}]}>
        {"Today's to-do's"}
      </Text>
    </View>
  );
};
const FooterComponent = () => {
  return (
    <View style={styles.FooterStyle}>
      {List.map(names => {
        return (
          <View>
            <Text
              style={[styles.FooterList, {fontFamily: Fonts.PoppinsMedium}]}>
              {names.pending}
            </Text>
            <View style={styles.FooterLine}></View>
          </View>
        );
      })}
    </View>
  );
};
const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
const renderItem = ({item}) => (
  console.log(item),
  (<Item place={item.userName} date={item.userDate} source={item.source} />)
);
const Dashboard = ({route}) => {
  const {data} = route.params;
  let netData = [];
  netData.push(data);
  const [store, setStore] = useState([]);
  return (
    <FlatList
      data={netData}
      renderItem={renderItem}
      ListHeaderComponent={HeaderComponent}
      ListFooterComponent={FooterComponent}
    />
  );
};
export default Dashboard;
