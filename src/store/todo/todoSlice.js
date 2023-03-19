import {createSlice} from '@reduxjs/toolkit';
import {Todo} from '../../services/api';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todoDetails: {},
    todosList: [],
  },
  reducers: {
    addTodo: (state, action) => {
      // payload = Todo.getList()
      if (action.payload) {
        let arr = [...state.todosList];
        let user = action.payload;
        arr.push(user);
        return {
          ...state,
          todosList: arr,
          todoDetails: user,
        };
      } else {
        return {
          ...state,
        };
      }
    },
    updateList: (state, action) => {
      if (action.payload) {
        const data = action?.payload;
        console.log("data",data);
        const objIndex = data?.id;
        const updateData = [...state?.todosList];
        updateData[objIndex].userPlace = data.place;
        updateData[objIndex].userDate = data.time;
        updateData[objIndex].userNotes = data.notes;
        state.todosList = updateData;
      }
    },
    deleteTodo: (state, action) => {
      const data = action.payload
      const arr = []
      arr.push(data)
      const removeTodo = arr.splice(arr.findIndex(a => a.id === a.item),1)
    //   deleteTask: (state, action)=>{
    //     return state.filter((item) => item.id !== action.payload.id);
    // }
      // if(action.payload)
      // {
        return {
          todosList : removeTodo
        }
      // }
    },
  },
});

export const {addTodo, updateList, deleteTodo} = todosSlice.actions;

export default todosSlice.reducer;
