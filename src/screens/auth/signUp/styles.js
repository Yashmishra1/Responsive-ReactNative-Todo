import {s, vs, ms, mvs} from 'react-native-size-matters';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
    alignItems: 'center',
    marginHorizontal:"15@vs",
  },
  signup: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: '15@vs',
  },
  inputbox: {
    marginTop: '45@s',
  },
  secondarytext: {
    color: '#7D7D7D',
  },
  bottomText: {
    color: '#236EEE',
    fontSize: 14,
  },
  connectLogo: {
    marginTop: Platform.OS == 'ios' ? vs(50) : vs(30),
    alignItems: 'center',
  },
  connectImage: {
    height: vs(45),
    resizeMode: 'contain',
  },
});
export default styles;
