import {configureStore} from '@reduxjs/toolkit';
import todoSlice from './store/todo/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
});
