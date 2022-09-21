import * as types from './actionType';

export const addTodo = (data) => {
  return {
    type: types.ADDTODO,
    payload:data
  }
};

export default updateList = (data) => {
  return{
    type: types.UPDATELIST,
    payload: data
  }
}
