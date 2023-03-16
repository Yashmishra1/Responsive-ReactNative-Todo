import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    marginTop: 52,
    marginHorizontal: 30,
    alignItems: 'center',
  },
  wrapContainer : {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  profileIcon: {
    width: 120,
    height: 120,
  },
  addImage: {
    width: 33,
    height: 33,
    position: 'absolute',
    left: 70,
    top: 60,
  },
});
export default styles;