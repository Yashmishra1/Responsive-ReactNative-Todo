import {ScaledSheet, s, vs} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},

  todologo: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
    justifyContent:"center",
  },
});
export default styles;
