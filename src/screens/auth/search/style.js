import { ScaledSheet } from "react-native-size-matters";
import {s, vs, ms, mvs} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container : {
    marginTop:vs(20),
    alignItems:"center",
  },
  searchBox:
  {
    flexDirection:"row",
    justifyContent:"space-around",
    // padding:10,
    backgroundColor:"#fff",
    width:s(300),
    height:vs(30),
    borderRadius:vs(15),
  }

})
export default styles;