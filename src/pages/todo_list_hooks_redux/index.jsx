import Taro, { useState } from '@tarojs/taro';
import { View, Text, Input, Button } from '@tarojs/components';
import { useDispatch, useSelector } from '@tarojs/redux';
import { add, del } from '../../actions/todo_list';

export default function TodoList() {
  let { list } = useSelector(state => state.todoList);
  const [inputVal, setInputVal] = useState('');
  const dispatch = useDispatch();

  function addItem() {
    dispatch(add(inputVal));
    setInputVal('');
  }
  function delItem(index) {
    dispatch(del(index));
  }
  function inputHandler(e) {
    setInputVal(e.target.value);
  }

  return (
    <View>
      <Text> Todo List </Text>
      <View>
        <Input
          value={inputVal}
          onInput={inputHandler}
          placeholder='输入要做的事'
        />
        <Button onClick={addItem}>添加</Button>
      </View>
      {list.map((item, index) => (
        <View key={`${item}-${index}`}>
          <View>
            {index}.{item}
          </View>
          <Button onClick={() => delItem(index)}>删除</Button>
        </View>
      ))}
    </View>
  );
}

TodoList.config = { navigationBarTitleText: 'TodoList Hooks+Redux版' };
