import {s, vs, ms, mvs} from 'react-native-size-matters';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container:
  {
    flex:1,
    paddingTop:'60@vs',
    alignItems:"center",
    marginHorizontal:"96@s",
    backgroundColor:"#paleGrey",
    justifyContent:"space-evenly"
  },
  primarytext:
  {
    alignItems:"center",
    marginTop:"60@vs",
    fontWeight:"bold",
    fontSize:18,
    color:"black",
  },
  cancelButton:
  {
    textAlign:"center",
    right: "100%",
  }
  
})
export default styles;