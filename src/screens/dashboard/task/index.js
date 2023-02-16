import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Button} from 'react-native';
import styles from './styles';
import {Input} from '@components';
const data = [
  {
    id: 1,
    name: 'Yash',
  },
  {
    id: 2,
    name: 'Ample',
  },
  {
    id: 3,
    name: 'Ram',
  },
  {
    id: 4,
    name: 'Mudit',
  },
  {
    id: 5,
    name: 'Kohli',
  },
];
const Task = ({navigation}) => {
  const [newdata, setNewData] = useState('');
  const [selected, setSelected] = useState([]);
  const [state, setState] = useState(false);
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => SelectedItem(item)}>
        <Text
          style={{
            backgroundColor: selected.includes(item.id) ? 'green' : 'white',
            padding: 10,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
  const searchName = input => {
    let filteredData = data.filter(item => {
      console.log('item');
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setNewData(filteredData);
  };

  const value = newdata == '' ? data : newdata;
  const SelectedItem = (item) => {
        if (selected.includes(item.id)) {
          let index = selected.indexOf(item.id);
          console.log(index)
          selected.splice(index, 1);
        } else {
          selected.push(item.id);
        }setSelected([...selected])
      };
  console.log(selected);  
  return (
    <View style={styles.container}>
      <View style={styles.inputbox}>
        <Input
          placeholder="Enter Name"
          autoCorrect={false}
          onChangeText={e => {
            searchName(e);
          }}
        />
      </View>
      <FlatList
        data={value}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

    </View>
  );
};
export default Task;
