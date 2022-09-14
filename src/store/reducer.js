import { traverse } from '@babel/core';
import { off } from 'process';
import {Switch} from 'react-native';
import {ADDTODO} from './actionType';

const intitialstate = {
  counter: 0,
};
export const mainReducer = (state=intitialstate,action) => {
  switch (action.type) {
    case value:
      return{...state}
      break;

    default:
      break;
  }
};
