import {s, vs, ms, mvs} from 'react-native-size-matters';
import {ScaledSheet} from 'react-native-size-matters';
import Fonts from '../../../theme/fonts';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '27@s',
  },
  heading: {
    color: '#000',
    fontSize: '14@vs',
    fontWeight: 'bold',
  },
  background: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  textGoals: {
    fontSize: '16@vs',
    color: 'black',
  },
  textTodo: {
    fontSize: '16@vs',
    fontFamily: Fonts.PoppinsLight,
    color: 'grey',
  },
  count: {
    fontSize: '25@vs',
    fontFamily: Fonts.PoppinsMedium,
  },
  trophy: {
    width: '25@s',
    height: '25@vs',
    alignSelf: 'center',
  },
  wrapTrophy: {
    backgroundColor: '#35cbfb',
    width: 60,
    height: 120,
    justifyContent: 'flex-end',
  },
});

export default styles;
