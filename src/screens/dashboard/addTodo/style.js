import {ScaledSheet, s, vs} from 'react-native-size-matters';
import Fonts from '@themes/fonts';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '21@s',
    justifyContent : "space-around",
  },
  heading: {
    fontSize: '16@s',
  },
  subHeading: {
    fontSize: '24@s',
  },
  circleInput: {
    backgroundColor: '#ffffff',
    width: '200@s',
    height: '50@vs',
  },
  alarmBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: '#e6e6e6',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: '15@vs',
    height: '45@vs',
    width: '140@s',
  },
  alarm:
  {
    width:"50@s",
    height:"50@vs",
  },
  alarmText:
  {
    color:"#000",
    fontSize:"14@s",
    right:"60@s",
  },
  input: {
    fontSize: '12@s',
    width: '210@s',
    marginVertical:"3@vs",
  },
  dropdownImage:
  {
    left:10,
    width: '24@s',
    height: '24@vs',
  },
  priorityIcon:
  {
    width: '17@s',
    height: '19@vs',
  },
  calendarIcon:
  {
    width: '20@s',
    height: '21@vs',
  },
  placeicon:
  {
    width:"14@s",
    height:"18@vs",
  },
  notesIcon:
  {
    right:10,
    height:"20@vs",
    width:"20@s",
    marginTop:vs(10),
  },
  dateTime:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 24,
  },
  alarmBox:
  {

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default styles;