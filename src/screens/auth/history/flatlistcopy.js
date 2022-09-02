import {
  View,
  FlatList,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  Button
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
// const FooterConponent = () => {
//   return (
//     <View style={{justifyContent: 'center', alignItems: 'center'}}>
//       <Text style={{fontSize: 24, fontWeight: 'bold', color: 'red'}}>
//         Footer Component example
//       </Text>
//     </View>
//   );
// };
// const HeaderComponent = () => {
//   return (
//     <View style={{justifyContent: 'center', alignItems: 'center'}}>
//       <TouchableOpacity>
//         <Text>Header Component</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
const onEnd = () =>
{
  alert("end Component")
}

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

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
      {/* <View style={styles.buttonView}>
        <Button title="Show The Scroll Indicator At Current Position"
          onPress={() => { reference.flashScrollIndicators() }} />
      </View> */}
      {/* <TouchableOpacity onPress={() => { reference.scrollToEnd({ animated: false }) }} style={styles.button}>
            <Text style={{alignItems:"center",justifyContent:"center"}}>Touch here to scroll end</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress={() => {reference.scrollToIndex({animated:true ,index : 4,viewOffset:10,viewPosition:1,})}} >
          <Text style={{alignItems:"center",justifyContent:"center"}}>Scroll to index</Text>
        </TouchableOpacity> */}
        
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        // ItemSeparatorComponent={(props) => {
        //   console.log('props', props);
        //   return (<View style={{height: 5, backgroundColor: props.highlighted ? 'green' : 'dodgerblue'}} />);
        // }}
        // ListEmptyComponent={onFlatListEmpty}
        // ListFooterComponent={FooterConponent}
        // ListFooterComponentStyle={styles.Footer}
        // numColumns={2}
        // horizontal={true}
        // ListHeaderComponent = {HeaderComponent}
        // ListHeaderComponentStyle={styles.header}
        // columnWrapperStyle = {styles.columnWrapperStyle}
        // getItemLayout={(data, index) => ({
        //   length: DATA.length,
        //   offset: DATA.length * index,
        //   index,
        // })}
        // getItemLayout={(data, index) => ({
        //   length: DATA.length,
        //   offset: DATA.length * index,
        //   index,
        // })}
        // initialNumToRender={10} //!
        // initialScrollIndex={2}  //!
        // inverted={false}
        // onEndReached = {onEnd}
        // onEndReachedThreshold={0.5}
        // refreshing={refreshing}
        // onRefresh={onRefresh}
        // onViewableItemsChanged={onViewableCall}
        // progressViewOffset={2}
        // viewabilityConfig = {
        //   minimumViewTime : 4,
        // }
        ref={(ref) => {
          setReference(ref);
        }}
      />
      {/* <RefreshControl/> */}
    </SafeAreaView>
  );
};
export default History;
