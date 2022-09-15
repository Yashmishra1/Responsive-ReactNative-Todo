import {ADDTODO} from './actionType';

const intitialstate = {
  place: '',
  date: '',
  note: '',
};
export default  function todoReducer (state = intitialstate, action)  {
  switch (action.type) {
    case ADDTODO:
      if (action.payload) {
        console.log("user--------------",action.payload);
        // let user = action.payload.data;
        return {
          ...state,
          // place: user.place,
          // date: user.date,
          // note: user.note,
        };
      } else {
        return {
          ...state,
        };
      }
    default: {
      return {
        ...state,
      };
    }
  }
};
