import Taro, { useState } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtButton, AtInput } from 'taro-ui';

export default function TodoList() {
  const [list, setList] = useState(['eat', 'drink']);
  const [inputVal, setInputVal] = useState('');

  function addItem() {
    if (inputVal) {
      list.push(inputVal);
      setList(list);
      setInputVal('');
    }
  }
  function delItem(index) {
    list.splice(index, 1);
    const newList = JSON.parse(JSON.stringify(list));
    setList(newList);
  }
  function inputHandler(e) {
    setInputVal(e);
  }

  // 1. AIInput 没有 onInput 事件，只能用 onChange
  // 2. AIInput 的 onChange 事件默认参数 e，不是浏览器的 Event 对象，而是当前的 value

  return (
    <View>
      <Text> Todo List </Text>
      <View>
        <AtInput
          value={inputVal}
          onChange={inputHandler}
          placeholder='输入要做的事'
        />
        <AtButton onClick={addItem}>添加</AtButton>
      </View>
      {list.map((item, index) => (
        <View key={`${item}-${index}`}>
          <View>
            {index}.{item}
          </View>
          <AtButton onClick={() => delItem(index)}>删除</AtButton>
        </View>
      ))}
    </View>
  );
}

TodoList.config = { navigationBarTitleText: 'TodoList taro-ui版' };
