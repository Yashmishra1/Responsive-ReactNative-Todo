import {Text, View, Image, Switch,Alert} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import Colors from '@themes/colors';
import styles from './style';
import Fonts from '@themes/fonts';
import Images from '@themes/images';
import EditInputBox from './widgets/InputBox';  
import CustomButton from '@components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect, useDispatch} from 'react-redux';
// import * as todosAction from '../../../store/todos/action';
import { updateList } from '../../../store/todo/todoSlice';
import moment from 'moment';

// const EditTodo = ({navigation, route,updateList}) => {
const EditTodo = ({navigation, route}) => {
  const {item, index} = route.params;
  const [isEnabled, setIsEnabled] = useState(item.userAlarm);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [state, setState] = useState({
    place: item.userPlace, 
    time: item.userDateTime,
    notes: item.userNotes,
    priority:item.categoryValue,
    calender:item.calendarValue,
  });
  const dispatch = useDispatch()
  const submit = () => {
    // let index = route.params.index;
    let data = {
      id: index,
      place: state.place,
      time: state.time,
      notes : state.notes,
      priority:state.priority,
      calender:state.calender,
    }
    // updateList(state,index)
    dispatch(updateList(data))
    Alert.alert("Done","Edit Successfully")
    navigation.navigate('drawernavigation');
  };

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
      <EditInputBox
        style={[styles.input, {fontFamily: Fonts.PoppinsRegular}]}
        placeholder="Edit place"
        title="Place"
        icon={Images.place}
        Inputstyle={styles.placeicon}
        leftImage={Images.editIcon}
        onChangeText={text => setState({...state, place: text})}
        value={state.place}
      />
      <EditInputBox
        style={[styles.input, {fontFamily: Fonts.PoppinsRegular}]}
        placeholder="Edit time"
        title="Time"
        icon={Images.clock}
        Inputstyle={styles.clockIcon}
        leftImage={Images.editIcon}
        onChangeText={text => setState({...state, time: text})}
        value={moment(state.time).format("DD-MM-YYYY HH:mm A")}
      />
      <EditInputBox
        style={[styles.input, {fontFamily: Fonts.PoppinsRegular}]}
        placeholder="Edit notes"
        title="Notes"
        icon={Images.notes}
        Inputstyle={styles.notesIcon}
        leftImage={Images.editIcon}
        onChangeText={text => setState({...state, notes: text})}
        value={state.notes}
      />
      <EditInputBox
        style={[styles.input, {fontFamily: Fonts.PoppinsRegular}]}
        placeholder="Edit priority"
        icon={Images.flag}
        title="Priority"
        onChangeText={text => setState({...state, priority: text})}
        value={state.priority}
        leftImage={Images.dropDown}
        Inputstyle={styles.notesIcon}
      />
      <EditInputBox
        style={[styles.input, {fontFamily: Fonts.PoppinsRegular}]}
        placeholder="Edit Calendar"
        icon={Images.calender}
        title="Calendar"
        leftImage={Images.dropDown}
        onChangeText={text => setState({...state, calender: text})}
        value={state.calender}
        Inputstyle={styles.notesIcon}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image source={Images.alarm} style={styles.alarm} />
        <Text style={styles.alarmText}>Alarm</Text>
        <Switch
          trackColor={{false: '#767577', true: '#236eee'}}
          thumbColor={isEnabled ? '#f5f6fa' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View
        style={styles.saveButton}>
        <CustomButton text="Update " onPress={() => submit()}/>
      </View>
    </View>
  );
};

// function mapDispatchToProps(dispatch) {
//   return {
//     updateList: (data,index) => dispatch(todosAction.updateList(data,index)),
//   };
// }
// export default connect(null, mapDispatchToProps)(EditTodo);
export default EditTodo;
