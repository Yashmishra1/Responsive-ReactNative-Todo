import {Text, View, Image, Switch} from 'react-native';
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
import {DATA, List} from '../../../data';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AddToDo = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');
  const [resultArray, setResultArray] = useState([]);
  const data = {
    userName: name,
    userDate: date,
    userNotes: note,
  };
  const toggleSwitch = ({navigation}) =>
    setIsEnabled(previousState => !previousState);
  let STORAGE_KEY = '@user_input';

  const saveData = async () => {
    const value = await AsyncStorage.getItem('@user_input');
    let emptyArr = []
    if (value) {
      let newProduct = JSON.parse(value);
      emptyArr = [...newProduct];
    }
    emptyArr.push(data);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(emptyArr));
    navigation.navigate('dashboard');
  };
  // console.log('arr', resultArray);
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
          onChangeText={text => setName(text)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 24,
        }}>
        <CircleInput
          placeholder="Starts"
          title="Time"
          icon={Images.timer}
          onChangeText={time => setDate(time)}
        />
        <CircleInput
          placeholder="Starts"
          title="Time"
          icon={Images.timer}
          onChangeText={time => setDate(time)}
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
          onChangeText={note => setNote(note)}
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
        style={{
          marginTop: 20,
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
      <View>
        <CustomButton
          text="+ Add > "
          // onPress={() =>
          //   navigation.navigate('dashboard', {data: placeholderItems})
          // }

          onPress={() => saveData()}
        />
      </View>
    </View>
  );
};
export default AddToDo;
