import {ScaledSheet} from 'react-native-size-matters';
import {s, vs, ms, mvs} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    marginTop: vs(20),
    marginHorizontal: '20@vs',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: s(270),
    height: vs(30),
    borderRadius: vs(15),
    justifyContent: 'space-between',
  },
  heading: {
    color: 'black',
    fontWeight: 'bold',
    alignItems: 'flex-start',
    fontSize: '16@vs',
    marginTop: '10@vs',
  },
  slide: {
    backgroundColor: '#12e3b3',
    width: '35@s',
    height: '35@vs',
    borderRadius: '25@vs',
    justifyContent: 'center',
    alignItems: 'center',
    left:"35@vs",
  },
  slideLogo: {
    width: '20@s',
    height: '15@vs',
  },
  searchBox :{
    flexDirection:"row",
  }
});
export default styles;
