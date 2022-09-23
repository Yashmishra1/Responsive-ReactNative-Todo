import * as types from './actionType';

export const addTodo = (data) => {
  return {
    type: types.ADDTODO,
    payload:data
  }
};

export const updateList = (data,index) => {
  return{
    type: types.UPDATELIST,
    payload: data,index,
  }
}
