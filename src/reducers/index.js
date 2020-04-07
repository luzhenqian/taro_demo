import { combineReducers } from 'redux';
import counter from './counter';
import todoList from './todo_list';
import shop from './shop';

export default combineReducers({
  counter,
  todoList,
  shop
});
