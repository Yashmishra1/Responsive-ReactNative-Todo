import {s, vs, ms, mvs} from 'react-native-size-matters';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor:"Grey",
    padding:30,
  },
  inputbox: {
    marginTop: '60@vs',
  },
  item:
  {
    justifyContent:"flex-start",
    alignItems:"flex-start",
    marginTop:"10@vs",
    padding:"10@s",
    width:"80@s",
  },
});
export default styles;
