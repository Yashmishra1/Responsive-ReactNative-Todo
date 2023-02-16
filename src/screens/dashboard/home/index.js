import {Alert, FlatList, View} from 'react-native';
import React from 'react';
import Item from './widgets/item';
import HeaderComponent from './widgets/HeaderComponent';
import FooterComponent from './widgets/FooterComponent';
import {connect, useSelector,useDispatch} from 'react-redux';
import { deleteTodo } from '../../../store/todo/todoSlice';

// const Dashboard = ({route, navigation, List}) => {
const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todosList);
  const countBusiness = todos.filter((obj) => obj?.categoryValue === "Business")?.length;
  const countPersonal = todos.filter((obj) => obj?.categoryValue === "Personal")?.length;
  const renderItem = ({item, index}) => {
    let data = {
      item :item,
      id : index,
    }
    return (
      <Item
        item={item}
        onPressEdit={() => navigation.navigate('edit', {item: item, index: index})}
        onPressDelete={() => Alert.alert("Are you sure you want to delete", dispatch(deleteTodo(data)))}
      />
    );
  };
  const Header = () => {
    return (
      <HeaderComponent
        BusinessTask={countBusiness}
        PersonalTask={countPersonal}  
      />
    );
  };
  return (
    <View>
        <FlatList
          data={todos}
          renderItem={renderItem}
          ListHeaderComponent={Header}
          ListFooterComponent={FooterComponent}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={1}

        />
    </View>
  );
};
// function mapStateToProps(state) {
//   return {
//     List: state.todo.todosList,
//   };
// }

// export default connect(mapStateToProps, null)(Dashboard);
export default Home;
