import {Text, View, Image, Switch} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import Colors from '@themes/colors';
import styles from './style';
import Fonts from '@themes/fonts';
import Images from '@themes/images';
import EditInputBox from './widgets/InputBox';
import CustomButton from '@components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';
import * as todosAction from '../../../store/todos/action';
const EditTodo = ({navigation, route,updateList}) => {
  const {item} = route.params;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [state, setState] = useState({
    place: item.userPlace,
    time: item.userDate,
    notes: item.userNotes,
  });
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   editData();
  // }, []);
  // const editData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@user_input');
  //     const result = JSON.parse(value)
  //     setData(result)
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // const submit = async () => {
  //   let index = route.params.index;
  //   const newTodos = [...data];
  //   newTodos[index].userPlace = state.place
  //   newTodos[index].userDate = state.time
  //   newTodos[index].userNotes = state.notes
  //   AsyncStorage.setItem("@user_input",JSON.stringify(newTodos))
  //   addTodo();
  //   navigation.navigate('dashboard');
  // };
  const submit = () => {
    let index = route.params.index;
    updateList(state,index)
    navigation.navigate('dashboard');
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
        value={state.time}
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
        leftImage={Images.dropDown}
        Inputstyle={styles.notesIcon}
      />
      <EditInputBox
        style={[styles.input, {fontFamily: Fonts.PoppinsRegular}]}
        placeholder="Edit Calendar"
        icon={Images.calender}
        title="Calendar"
        leftImage={Images.dropDown}
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
        style={{
          marginTop: 1,
          justifyContent: 'center',
          alignSelf: 'center',
          width: 300,
        }}>
        <CustomButton text="Save >" onPress={() => submit()} />
      </View>
    </View>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    updateList: (data,index) => dispatch(todosAction.updateList(data,index)),
  };
}
export default connect(null, mapDispatchToProps)(EditTodo);
