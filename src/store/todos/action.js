import * as types from './actionType';

export const addTodo = (data) => {
  return {
    type: types.ADDTODO,
    payload:data
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
