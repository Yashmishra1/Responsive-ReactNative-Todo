import {s, vs, ms, mvs} from 'react-native-size-matters';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    backgroundColor: '#f5f6fa',
    flex: 1,
    alignItems: 'center',
    padding: '20@vs',
    marginHorizontal:"15@vs",
  },
  connectImage: {
    height: vs(45),
    resizeMode: 'contain',
  },
  primarytext: {
    marginTop: 8,
    color: '#236EEE',
    fontSize: 16,
    left: '50%',
  },
  signup: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: '15@vs',
  },
  inputbox: {
    marginTop: 57,
  },
  secondarytext: {
    color: '#7D7D7D',
  },
  bottomText: {
    fontWeight:"bold",
    color: '#236EEE',
    fontSize: 14,
  },
  connectLogo: {
    marginTop: Platform.OS == 'ios' ? vs(50) : vs(30),
    alignItems: 'center',
  },
  top:
  {
    backgroundColor:"red",
    borderTopRightRadius: 1000,
    borderTopLeftRadius: 1344440,
  }
});
export default styles;
