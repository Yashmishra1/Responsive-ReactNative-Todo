import * as types from './actionType';
import {Todo} from '../../services/api'

export const addTodo = (data) => {
  return {
    type: types.ADDTODO,
    payload:data
    // payload: Todo.getList()
    // payload : Todo.getDetails()
  }
};

export const updateList = (data,index) => {
  let updateData = {
    data : data,
    index : index,
  }
  return{
    type: types.UPDATELIST,
    payload: updateData,
  }
}