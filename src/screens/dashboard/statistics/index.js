import React from 'react';
import {Text, View,Image} from 'react-native';
import Images from '../../../theme/images';
import styles from './style';
import CompletedList from './widgets/completedList';
const Statistics = () => {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:"#fff", flexDirection:"row", justifyContent:"space-between",padding:15,}}>
        <View>
          <Text style={styles.textGoals}>GOALS</Text>
          <Text style={styles.textTodo}>Finished To-do's</Text>
          <Text style={styles.count}>55/55</Text>
        </View> 
        <View style={{backgroundColor:"#35cbfb", width:60,height:100,justifyContent:"flex-end"}}>
          <Image source={Images.trophy} style={styles.trophy} />
        </View>
      </View>
      <View>
      <CompletedList day="Monday"  Completed="Completed- 2" />
      <CompletedList day="Tuesday"  Completed="Completed- 4" />
      <CompletedList day="Wednesday"  Completed="Completed- 0" />
      <CompletedList day="Thursday"  Completed="Completed- 1" />
      <CompletedList day="Friday"   Completed="Completed- 6"/>
      </View>
    </View>
  );
};

export default Statistics;
