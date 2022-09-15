import * as types from './actionType';

export const addTodo = (data) => {
  console.log("action =====================",data);
  return {
    type: types.ADDTODO,
    payload:data
  }
};
