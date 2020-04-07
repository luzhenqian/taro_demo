import Taro from '@tarojs/taro';
import { View, Text, Input, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { add, del } from '../../actions/todo_list';

@connect(
  ({ todoList }) => ({ todoList }),
  dispatch => ({
    onAdd(item) {
      dispatch(add(item));
    },
    onDel(index) {
      dispatch(del(index));
    }
  })
)
class TodoListRedux extends Taro.Component {
  config = { navigationBarTitleText: 'TodoList Redux版' };
  constructor() {
    this.state = {
      inputVal: ''
    };
  }

  addItem() {
    this.props.onAdd(this.state.inputVal);
    this.setState({ inputVal: '' });
  }
  delItem(index) {
    this.props.onDel(index);
  }
  inputHandler(e) {
    this.setState({
      inputVal: e.target.value
    });
  }

  render() {
    let { list } = this.props.todoList;
    const { inputVal } = this.state;
    return (
      <View>
        <Text>Todo List</Text>
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
            <Button onClick={this.props.onDel.bind(this, index)}>删除</Button>
          </View>
        ))}
      </View>
    );
  }
}

export default TodoListRedux;
