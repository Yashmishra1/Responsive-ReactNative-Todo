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
  signup: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: '15@vs',
  },
  inputbox: {
    marginTop: 57,
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderColor: '#e6e6e6',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 0.2,
    height: '80@vs',
    width: '310@s',
    borderBottomEndRadius:"15@vs",
    borderBottomLeftRadius:"15@vs",
    borderTopLeftRadius:"15@vs",
    borderTopRightRadius:"15@vs",
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
  boxx: {
    backgroundColor:"red",
  },
  inputImage :{
    width: '21@s',
    height: '15@vs',
  },
  border :{
    backgroundColor:"#d9d9d9",
    width : "300@s",
    height : "1@vs",
  }
});
export default styles;
