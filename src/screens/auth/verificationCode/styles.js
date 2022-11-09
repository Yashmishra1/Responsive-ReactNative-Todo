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
    // justifyContent:"space-around"
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
    flexDirection:"column",
    justifyContent:"space-around",
  }
  
})
export default styles;