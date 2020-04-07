import Taro from '@tarojs/taro';
import { View, Text, Input, Button } from '@tarojs/components';

export default class todoList extends Taro.Component {
  config = { navigationBarTitleText: 'TodoList' };
  constructor() {
    this.state = {
      list: ['eat', 'drink'],
      inputVal: ''
    };
  }

  addItem() {
    let { list, inputVal } = this.state;
    list.push(inputVal);
    this.setState({ list, inputVal: '' });
  }
  delItem(index) {
    let { list } = this.state;
    list.splice(index, 1);
    this.setState({ list });
  }
  inputHandler(e) {
    this.setState({
      inputVal: e.target.value
    });
  }

  render() {
    const { list, inputVal } = this.state;
    return (
      <View>
        <Text> Todo List </Text>
        <View>
          <Input
            value={inputVal}
            onInput={this.inputHandler}
            placeholder='输入要做的事'
          />
          <Button onClick={this.addItem}>添加</Button>
        </View>
        {list.map((item, index) => (
          <View key={`${item}-${index}`}>
            <View>
              {index}.{item}
            </View>
            <Button onClick={this.delItem.bind(this, index)}>删除</Button>
          </View>
        ))}
      </View>
    );
  }
}
