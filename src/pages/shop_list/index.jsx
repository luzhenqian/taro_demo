import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { useSelector } from '@tarojs/redux';
import { AtSearchBar } from 'taro-ui';
import './index.scss';

export default function ShopList() {
  const list = useSelector(state => state.shop.list);
  const renderShopList = list.map((item, index) => {
    return (
      <View className='item' key={index}>
        <Image src={item.image} />
        <View>{item.name}</View>
        <View>￥{item.price}</View>
      </View>
    );
  });
  return (
    <View>
      <View className='ceiling'>
        <AtSearchBar placeholder='花辰月夕'></AtSearchBar>
      </View>
      <View class='shopListWarp'>{renderShopList}</View>
    </View>
  );
}
