import {s, vs, ms, mvs} from 'react-native-size-matters';
import {ScaledSheet} from 'react-native-size-matters';
import Fonts from '@themes/fonts';
import Colors from '@themes/colors';

const styles = ScaledSheet.create({
  container:
  {
    flex:1,
    paddingTop:'60@vs',
    alignItems:"center",
    marginHorizontal:"90@s",
    backgroundColor:"#paleGrey",
  },
  primarytext:
  {
    alignItems:"center",
    marginTop:"60@vs",
    fontWeight:"bold",
    fontSize:18,
   
  },
  subTitle:
  {
    fontFamily: Fonts.PoppinsLight,
    color: Colors.grey,
    fontSize:14,
    textAlign:"center",
  },
  cancelButton:
  {
    textAlign:"center",
    right: "100%",
  },
  verificationBox:
  {
    flexDirection:"row",
    justifyContent:"space-between",
    padding:"10@s",
  },
  Resendotp:
  {
    flexDirection:"row",
  },
  secondarytext: {
    color: '#7D7D7D',
  },
  bottomText: {
    fontWeight:"bold",
    color: '#236EEE',
    fontSize: 14,
  },
})
export default styles;