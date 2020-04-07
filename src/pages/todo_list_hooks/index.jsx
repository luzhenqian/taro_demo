import Taro, { useState } from '@tarojs/taro';
import { View, Text, Input, Button } from '@tarojs/components';

export default function TodoList() {
  const [list, setList] = useState(['eat', 'drink']);
  const [inputVal, setInputVal] = useState('');

  function addItem() {
    list.push(inputVal);
    setList(list);
    setInputVal('');
  }
  function delItem(index) {
    list.splice(index, 1);
    const newList = JSON.parse(JSON.stringify(list));
    setList(newList);
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

TodoList.config = { navigationBarTitleText: 'TodoList Hooks版' };
