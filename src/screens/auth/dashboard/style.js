import {ScaledSheet, s, vs} from 'react-native-size-matters';
import Colors from '@themes/colors';
const styles = ScaledSheet.create({
  container: {
    marginHorizontal: '25@s',
  },
  heading: {
    fontSize: '15@s',
    color: '#7d7d7d',
    lineHeight: '30@vs',
  },
  subHeading: {
    fontSize: '24@s',
    color: 'black',
    lineHeight: '30@vs',
  },
  Boxheading: {
    lineHeight: '35@vs',
    fontSize: '14@s',
    color: 'black',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Inputdata: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  FooterStyle: {
    marginTop: '5@vs',
    marginHorizontal: '25@s',
  },
  FooterList: {
    marginVertical: '3@vs',
    fontSize: '14@s',
    color: '#000000',
  },
  FooterLine: {
    backgroundColor: '#d9d9d9',
    borderRadius: 15,
    height: '0.5@vs',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  todoTitle:
  {
    marginTop:"10@s",
    fontSize:"16@s",
  },
  Inputdata: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '18@vs',
    backgroundColor: 'white',
    borderRadius: '15@vs',
    padding: '15@s',
    marginHorizontal: '25@s',
  },
  icon: {
    width: '22@s',
    height: '20@vs',
  },
  title: {
    fontSize: '12@s',
    left: '10@s',
    color: Colors.grey,
  },
  DateIcon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  date: {
    right: '8@s',
    color: '#7d7d7d',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  rightIcon: {
    justifyContent: 'space-around',
    width: '5@s',
    height: '8@vs',
  },
});
export default styles;
