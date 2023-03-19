import {ScaledSheet, s, vs} from 'react-native-size-matters';
const styles = ScaledSheet.create({
  container : {
    flex : 1,
  },
  heading : {
    alignItems : "center",
  },
  headingTitle : {
    fontWeight : "bold",
    fontSize : "15@vs",
    color : "#000"
  }
});
export default styles;