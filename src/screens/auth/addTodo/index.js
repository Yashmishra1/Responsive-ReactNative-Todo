import {
  Text,
  View,
  Image,
  Switch,
  Alert,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import Fonts from '@themes/fonts';
import Colors from '@themes/colors';
import styles from './style';
import Images from '@themes/images';
import CustomInput from '@components/CustomInput';
import CircleInput from './widgets/CircleInput';
import NotesInput from './widgets/NotesInput';
import CustomButton from '@components/CustomButton';
import InputBox from './widgets/inputbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as todosAction from '../../../store/todos/action';
import {connect} from 'react-redux';
import notifee, { TimestampTrigger, TriggerType } from '@notifee/react-native';
import CustomDate from './widgets/CustomDate';
import moment from 'moment'
const AddToDo = ({todoDetails, navigation,addTodo}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [state, setState] = useState({
    place: '',
    time: '',
    note: '',
    alarm : false,
    date:'',
  });
  const data = {
    userPlace: state.place,
    userTime: state.time,
    userNotes: state.note,
    userAlarm: state.alarm,
    userDate: state.date,
  };
  const toggleSwitch = ({navigation}) =>
  setState({...state, alarm: !state.alarm})
  const saveData = async () => {
    addTodo({data});
    // onDisplayNotification()
    // onCreateTriggerNotification()
    Alert.alert("Done","Added Successfully")
    navigation.navigate('drawernavigation');
  };
    // async function onCreateTriggerNotification() {
    //   const date = new Date(Date.now());
    //   date.setHours(17);
    //   date.setMinutes(37);
    //   // Create a time-based trigger
    //   const trigger = {
    //     type: TriggerType.TIMESTAMP,
    //     timestamp: date.getTime(), // fire at 11:10am (10 minutes before meeting)
    //   };
  
    //   // Create a trigger notification
    //   await notifee.createTriggerNotification(
    //     {
    //       title: 'Meeting with Yash',
    //       body: 'Current Time',
    //     },
    //     trigger,
    //   );
    // }
    const toggle = (date) => {
      // const getDate = moment(date).format('MMMM Do YYYY, h:mm:ss a');
      setState({...state, date : !state.date})
    } 
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.heading,
          {fontFamily: Fonts.PoppinsLight, color: Colors.grey},
        ]}>
        {'Title'}
      </Text>
      <Text
        style={[
          styles.subHeading,
          {fontFamily: Fonts.PoppinsSemiBold, color: Colors.black},
        ]}>
        {'Daily meeting with team'}
      </Text>
      <View style={{marginTop: 17}}>
        <CustomInput
          style={[styles.input, {fontFamily: Fonts.PoppinsRegular}]}
          placeholder="Enter place"
          title="Place"
          icon={Images.place}
          Inputstyle={styles.placeicon}
          onChangeText={text => setState({...state, place: text})}
        />
      </View>
      <View style={styles.dateTime}>
        <CustomDate
          title="Start Date and Time"
          icon={Images.calender}
          onPress={toggle}
          value={state.calendar}
          onChangeText={text => setState({...state, date: text})}
        />
      </View>
      <View style={{marginTop: 24}}>
        <NotesInput
          icon={Images.notes}
          placeholder="Write here..."
          title="Notes"
          multiline={true}
          maxLength={112}
          style={styles.notesIcon}
          onChangeText={text => setState({...state, note: text})}
        />
      </View>
      <View>
          <InputBox
            icon={Images.flag}
            title="Choose Priority"
            rightIcon={Images.dropDown}
            style={styles.priorityIcon}
          />
        <InputBox
          icon={Images.calender}
          title="Choose Calendar Category"
          rightIcon={Images.dropDown}
          style={styles.calendarIcon}
        />
      </View>
      <View
        style={styles.alarmBox}>
        <Image source={Images.alarm} style={styles.alarm} />
        <Text style={styles.alarmText}>Alarm</Text>
        <Switch
          trackColor={{false: '#767577', true: '#236eee'}}
          thumbColor={state.alarm ? '#f5f6fa' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={state.alarm}
        />
      </View>
      <View>
        <CustomButton text="+ Add " onPress={() => saveData()} />
      </View>
    </View>
  );
};
function mapStateToProps(state) {
  return {
    todoDetails: state.todo.todoDetails,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: data => dispatch(todosAction.addTodo(data)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);
