import { ADD, DELETE } from '../constants/todo_list';

const INITIAL_STATE = {
  list: ['eat', 'drink']
};

export default function todoList(state = INITIAL_STATE, action) {
  let { list } = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case ADD:
      list.push(action.item);
      return {
        ...state,
        list
      };
    case DELETE:
      list.splice(action.index, 1);
      return {
        ...state,
        list
      };
    default:
      return state;
  }
}
