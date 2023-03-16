import {ScaledSheet, s, vs} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  sendMsg: {
    backgroundColor: '#50C878',
    alignSelf: 'flex-end',
    borderRadius: '10@vs',
    alignItems: 'flex-end',
    marginHorizontal: '10@s',
    padding: vs(10),
    margin: vs(10),
  },
  receiveMsg: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    borderRadius: '10@vs',
    marginHorizontal: '10@s',
    padding: vs(10),
    margin: vs(10),
  },
  title: {
    fontSize: '12@vs',
    color : "#000",
  },
  time: {
    fontSize: '10@vs',
    color : "#000",
  },
});
export default styles;
