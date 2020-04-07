import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { GET_GOODS_INFO } from '../../constants/api';

export default function Login() {
  async function login() {
    const result = await Taro.cloud.callFunction({
      name: GET_GOODS_INFO
    });
    console.log(result);
  }
  return (
    <View>
      <AtButton onClick={login}>登录</AtButton>
    </View>
  );
}
