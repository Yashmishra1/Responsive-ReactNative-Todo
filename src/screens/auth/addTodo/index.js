import {Text, View, Image, Switch, Alert} from 'react-native';
import React, {useState} from 'react';
import Fonts from '@themes/fonts';
import Colors from '@themes/colors';
import styles from './style';
import Images from '@themes/images';
import CustomInput from '@components/CustomInput';
import NotesInput from './widgets/NotesInput';
import CustomButton from '@components/CustomButton';
import * as todosAction from '../../../store/todos/action';
import {connect, useDispatch, useSelector} from 'react-redux';
import notifee, {TimestampTrigger, TriggerType} from '@notifee/react-native';
import CustomDate from './widgets/CustomDate';
import moment from 'moment';
import CustomDropdown from '../../../components/Dropdown';
import { addTodo } from '../../../store/todo/todoSlice';

// const AddToDo = ({todoDetails, navigation, addTodo}) => {
const AddToDo = ({navigation}) => {
  const [categoryValue, setCategoryValue] = useState(null);
  const[calendarValue,setCalendarValue] = useState(null)
  const [isFocus, setIsFocus] = useState(false);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    place: '',
    note: '',
    alarm: false,
    date: '',
    dateTime: '',
  });
  const data = {
    userPlace: state.place,
    userNotes: state.note,
    userAlarm: state.alarm,
    userDate: state.date,
    userDateTime: state.dateTime,
    categoryValue:categoryValue,
    calendarValue:calendarValue,
  };
  const toggleSwitch = ({navigation}) =>
    setState({...state, alarm: !state.alarm});

  const saveData = async () => {
    dispatch(addTodo(data))
    // addTodo({data});
    onCreateTriggerNotification();
    Alert.alert('Done', 'Added Successfully');
    navigation.navigate('drawernavigation');
  };

  async function onCreateTriggerNotification() {
    const date = new Date(Date.now());
    date.setHours(23);
    date.setMinutes(14);

    // Create a time-based trigger
    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: state.dateTime,
      alarmManager: true,
    };

    // Create a trigger notification
    await notifee.createTriggerNotification(
      {
        title: 'Meeting with Yash',
        body: "notification",
        android: {
          channelId: 'TODO',
        },
        ios: {
          sound: 'local.caf',
        },
      },
      trigger,
    );
  }
  const toggle = date => {
    const result = moment(date).valueOf();
    setState({...state, dateTime: result});
  };

  const categoryData = [
    {label: 'Business', value: 'Business'},
    {label: 'Personal', value: 'Personal'},
  ];
  const calendarData = [
    {label: 'Important', value: 'Important'},
    {label: 'High', value: 'High'},
    {label: 'Medium', value: 'Medium'},
    {label: 'Normal', value: 'Normal'},
  ];
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
          onChangeText={text => setState({...state, dateTime: text})}
          value={state.dateTime ? moment(state.dateTime).format("DD-MM-YYYY HH:mm A") : "Start Date and Time"}
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
      <View style={{marginTop: 20}}>
        <CustomDropdown
          searchPlaceholder="Search Category..."
          data={categoryData}
          placeholder="Choose Priority"
          source={Images.flag}
          style={styles.priorityIcon}
          value={categoryValue}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setCategoryValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <View style={{marginTop: 20}}>
        <CustomDropdown
          searchPlaceholder="Search Category..."
          data={calendarData}
          placeholder="Choose Calendar Category"
          source={Images.calender}
          style={styles.calendarIcon}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          value={calendarValue}
          onChange={item => {
            setCalendarValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>

      <View style={styles.alarmBox}>
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
// function mapStateToProps(state) {
//   return {
//     todoDetails: state.todo.todoDetails,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     addTodo: data => dispatch(todosAction.addTodo(data)),
//   };
// }
// export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);
export default AddToDo;