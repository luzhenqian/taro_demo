import { ADD, DELETE } from '../constants/todo_list';

export const add = item => {
  return {
    type: ADD,
    item
  };
};
export const del = index => {
  return {
    type: DELETE,
    index
  };
};
