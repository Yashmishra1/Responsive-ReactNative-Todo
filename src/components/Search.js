import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Images from '@themes/images';

const SearchIcon = () => {
  return (
    <TouchableOpacity>
      <Image source={Images.search} style={styles.searchIcon} />
    </TouchableOpacity>
  );
};
const styles = ScaledSheet.create({
  searchIcon: {
    width: '30@s',
    height: '30@vs',
  },
});
export default SearchIcon;
