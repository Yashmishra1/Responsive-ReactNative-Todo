import {s, vs, ms, mvs} from 'react-native-size-matters';
import {ScaledSheet} from 'react-native-size-matters';
import Fonts from '../../../theme/fonts';

const styles = ScaledSheet.create({
container :{
  flex :1,
  marginHorizontal :"27@s",
},
textGoals:{
  fontSize : "16@vs",
  color:"black",
},
textTodo :{
  fontSize:"16@vs",
  fontFamily: Fonts.PoppinsLight,
  color:"grey",
},
count :
{
fontSize:"25@vs",
fontFamily : Fonts.PoppinsMedium

},
trophy: {
  width: "25@s",
  height:"25@vs",
  alignSelf:"center",
}
})

export default styles;