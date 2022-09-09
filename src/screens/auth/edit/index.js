import {Text, View, Image, Switch} from 'react-native';
import React, {Component, useState} from 'react';
import Colors from '@themes/colors';
import styles from './style';
import Fonts from '@themes/fonts';
import Images from '@themes/images';
import EditInputBox from './widgets/InputBox';
import CustomButton from '@components/CustomButton';
const EditTodo = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const[place,setPlace] = useState('')
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
        value={console.log(place)}
        onChangeText={text => console.log(setPlace(text))}
      />
      <EditInputBox
        style={[styles.input, {fontFamily: Fonts.PoppinsRegular}]}
        placeholder="Edit time"
        title="Time"
        icon={Images.clock}
        Inputstyle={styles.clockIcon}
        leftImage={Images.editIcon}
      />
      <EditInputBox
        style={[styles.input, {fontFamily: Fonts.PoppinsRegular}]}
        placeholder="Edit notes"
        title="Notes"
        icon={Images.notes}
        Inputstyle={styles.notesIcon}
        leftImage={Images.editIcon}
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
      <View style={{marginTop:1,justifyContent:"center",alignSelf:"center",width:300,}}>
        <CustomButton
          text="Save >"
          onPress={() =>
            navigation.navigate('dashboard')
          }
        />
      </View>
    </View>
  );
};
export default EditTodo;
