import {s, vs, ms, mvs} from 'react-native-size-matters';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container:
  {
    paddingTop:'60@vs',
    alignItems:"center",
    marginHorizontal:"70@s",
    backgroundColor:"#paleGrey",
  },
  primarytext:
  {
    marginTop:"60@vs",
    fontWeight:"bold",
    fontSize:18,
    color:"black",
  },
  cancelButton:
  {
    color:"windowsBlue",
    fontWeight:"bold",
    textAlign:"center",
    marginVertical:"20@s",
  },
  inputBox:
  {
    marginHorizontal:"20@vs",
    justifyContent:"space-around",
  },
  colorInput:
  {
    justifyContent:"space-around",
  }
})
export default styles;