import {FlatList} from 'react-native';
import React from 'react';
import Item from './widgets/item';
import HeaderComponent from './widgets/HeaderComponent';
import FooterComponent from './widgets/FooterComponent';
import Images from '@themes/images';
import {connect} from 'react-redux';

const Dashboard = ({route, navigation, List}) => {
  const countBusiness = List.filter((obj) => obj?.categoryValue === "Business")?.length;
  const countPersonal = List.filter((obj) => obj?.categoryValue === "Personal")?.length;
  const list = List.map(e => e)
  const renderItem = ({item, index}) => {
    return (
      <Item
        item={item}
        onPress={() => navigation.navigate('edit', {item: item, index: index})}
      />
    );
  };
  const Header = () => {
    return(
      <HeaderComponent BusinessTask={countBusiness} PersonalTask={countPersonal} />
    )
  }
  return (
    <FlatList
      data={List}
      renderItem={renderItem}
      ListHeaderComponent={Header}
      ListFooterComponent={FooterComponent}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
function mapStateToProps(state) {
  return {
    List: state.todo.todosList,
  };
}

export default connect(mapStateToProps, null)(Dashboard);
