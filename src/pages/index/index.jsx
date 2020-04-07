import Taro, { useEffect } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';

function Index() {
  useEffect(() => {
    const WeappEnv = Taro.getEnv() === Taro.ENV_TYPE.WEAPP;
    if (WeappEnv) {
      Taro.cloud.init();
    }
  });

  function navigateTo(url) {
    return () =>
      Taro.navigateTo({
        url
      });
  }
  function genStyle() {
    let i = 0,
      rgb = [];
    while (i < 3) {
      rgb.push(Number.parseInt(Math.random() * 255));
      i++;
    }
    return `background-color:rgb(${rgb.join()});`;
  }

  return (
    <View className='fun_warp'>
      <View onClick={navigateTo('/pages/counter/index')} style={genStyle()}>
        计数器
      </View>
      <View onClick={navigateTo('/pages/todo_list/index')} style={genStyle()}>
        TodoList
      </View>
      <View
        onClick={navigateTo('/pages/todo_list_hooks/index')}
        style={genStyle()}
      >
        TodoList Hooks版
      </View>
      <View
        onClick={navigateTo('/pages/todo_list_redux/index')}
        style={genStyle()}
      >
        TodoList Redux版
      </View>
      <View
        onClick={navigateTo('/pages/todo_list_taro_ui/index')}
        style={genStyle()}
      >
        TodoList TaroUI版
      </View>
      <View
        onClick={navigateTo('/pages/todo_list_hooks_redux/index')}
        style={genStyle()}
      >
        TodoList Hooks+Redux版
      </View>
      <View onClick={navigateTo('/pages/login/index')} style={genStyle()}>
        Login
      </View>
      <View onClick={navigateTo('/pages/shop_list/index')} style={genStyle()}>
        ShopList
      </View>
    </View>
  );
}

Index.config = {
  navigationBarTitleText: '首页'
};
export default Index;
