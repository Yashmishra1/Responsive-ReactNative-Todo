import {ScaledSheet, s, vs} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    marginHorizontal: '20@s',
    paddingVertical:"5@vs",
    },
  heading: {
    marginTop: '20@vs',
    fontSize: '16@s',
  },
  subHeading: {
    fontSize: '24@s',
  },
  input: {
    fontSize: '13@s',
    width: '210@s',
  },
  clockIcon:
  {
    width:"63@s",
    height:"63@vs",
  },
  placeicon:
  {
    width:"14@s",
    height:"18@vs",
  },
  notesIcon:
  {
    width:"14@s",
    height:"18@vs"
  },
  alarm:
  {
    width:"55@s",
    height:"55@vs",
  },
  alarmText:
  {
    right:"75@s",
    fontSize:"14@s",
  },
  saveButton:{
    alignSelf: 'center',
  }
})
export default styles;s