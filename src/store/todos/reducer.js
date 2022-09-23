import { LogBox } from 'react-native';
import {ADDTODO, UPDATELIST} from './actionType';

const intitialstate = {
  place: '',
  date: '',
  note: '',
  todosList: [],
};            
export default function todoReducer(state = intitialstate, action) {
  switch (action.type) {
    case ADDTODO:
      if (action.payload) {
        let arr = [...state.todosList]
        let user = action.payload.data;
        arr.push(user)
        return {
          ...state,
          todosList:arr,
          place: user.userPlace,
          date: user.userDate,
          note: user.userNotes,
        };
      } else {
        return {
          ...state,
        };
      }
    case UPDATELIST:
      if(action.payload){
        console.log(action.payload.index);
        const userList = action.payload;
        return{
          ...state,
        }
      }
    default: {
      return {
        ...state,
      };
    }
  }
}
