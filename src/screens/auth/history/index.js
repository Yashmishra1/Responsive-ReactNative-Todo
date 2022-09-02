import {
  View,
  FlatList,
  Text,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {Component, useState} from 'react';
import styles from './style';
import Images from '@themes/images';

const DATA = [
  {
    id: 1,
    title: 'Daily meetings with team',
    date: '10 Jun',
  }, 
  {
    id: 2,
    title: 'Meditation',
    date: '08 Jun',
  },
  {
    id: 3,
    title: 'Check emails',
    date: '02 Jun',
  },
  {
    id: 4,
    title: 'Pay for rent',
    date: '05 July',
  },
  {
    id: 5,
    title: 'Buy a macbook',
    date: '04 July',
  },
  {
    id: 6,
    title: 'Take my pet to veteran',
    date: '01 July',
  },
  {
    id: 7,
    title: 'Daily meetings with team',
    date: '10 Jun',
  },
  {
    id: 8,
    title: 'Meditation',
    date: '08 Jun',
  },
  {
    id: 9,
    title: 'Check emails',
    date: '02 Jun',
  },
  {
    id: 10,
    title: 'Pay for rent',
    date: '05 July',
  },
  {
    id: 11,
    title: 'Buy a macbook',
    date: '04 July',
  },
  {
    id: 12,
    title: 'Take my pet to veteran',
    date: '01 July',
  },
  {
    id: 13,
    title: 'Check emails',
    date: '02 Jun',
  },
  {
    id: 114,
    title: 'Pay for rent',
    date: '05 July',
  },
  {
    id: 15,
    title: 'Buy a macbook',
    date: '04 July',
  },
];
// const DATA = Array.from({length: 100}, (v, i) => i);
const Item = ({title, date}) => (
  <View style={styles.item}>
    <View style={styles.Inputdata}>
      <Image source={Images.right} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </View>
    <View style={styles.DateIcon}>
      <Text style={styles.date}>{date}</Text>
      <Image source={Images.arrow} style={styles.rightIcon} />
    </View>
  </View>
);
const onEnd = () => {
  alert('end Component');
};

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

// const onViewableCall = () => {
//   console.log('onViewableItemsChanged Calling on Scroll...')
// }

const History = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [reference, setReference] = useState(null);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const renderItem = ({item}) => <Item title={item.title} date={item.date} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Business</Text>
      <View>
        <ActivityIndicator size='large'/>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={onEnd}
        onEndReachedThreshold={0.2}
        
      />
    </SafeAreaView>
  );
};
export default History;
