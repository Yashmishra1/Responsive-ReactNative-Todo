import {s, vs, ms, mvs} from 'react-native-size-matters';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    marginHorizontal: '5@s',
    backgroundColor: '#f5f6fa',
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
  title: {
    fontSize: '12@s',
    left: '10@s',
    color: '#7d7d7d',
  },
  heading: {
    marginTop: '10@vs',
    left: '26@s',
    color: '#7d7d7d',
    fontSize: '16@s',
  },
  icon: {
    width: '22@s',
    height: '20@vs',
  },
  rightIcon: {
    justifyContent: 'space-around',
    width: '5@s',
    height: '8@vs',
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
  Footer: {
    fontWeight: 'bold',
    backgroundColor: 'orange',
  },
  header: {
    marginTop: '10@s',
    backgroundColor: 'lightblue',
    padding: 10,
  },
  columnWrapperStyle: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 10,
  },
  button:
  {
    backgroundColor:"#00BFFF"

  }
});
export default styles;
