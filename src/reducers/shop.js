// import { ADD, DELETE } from '../constants/shop_list';

const INITIAL_STATE = {
  list: [
    {
      name: '迪奥小姐花漾淡香氛',
      image:
        'https://img13.360buyimg.com/n5/jfs/t19456/243/928215857/251338/557aaad/5ab47290N10e77a18.jpg',
      price: '570.00'
    },
    {
      name: '旷野男士淡香水',
      image:
        'https://img14.360buyimg.com/n5/jfs/t17950/157/2344803372/105044/5fe9d10a/5af13d27Nc0b8803c.jpg',
      price: '680.00'
    },
    {
      name: '旷野男士淡香水',
      image:
        'https://img14.360buyimg.com/n5/jfs/t17950/157/2344803372/105044/5fe9d10a/5af13d27Nc0b8803c.jpg',
      price: '680.00'
    },
    {
      name: '旷野男士淡香水',
      image:
        'https://img14.360buyimg.com/n5/jfs/t17950/157/2344803372/105044/5fe9d10a/5af13d27Nc0b8803c.jpg',
      price: '680.00'
    },
    {
      name: '旷野男士淡香水',
      image:
        'https://img14.360buyimg.com/n5/jfs/t17950/157/2344803372/105044/5fe9d10a/5af13d27Nc0b8803c.jpg',
      price: '680.00'
    },
    {
      name: '旷野男士淡香水',
      image:
        'https://img14.360buyimg.com/n5/jfs/t17950/157/2344803372/105044/5fe9d10a/5af13d27Nc0b8803c.jpg',
      price: '680.00'
    }
  ]
};

export default function shopList(state = INITIAL_STATE, action) {
  action;
  return state;
  // switch (action.type) {
  //   case ADD:
  //     list.push(action.item);
  //     return {
  //       ...state,
  //       list
  //     };
  //   case DELETE:
  //     list.splice(action.index, 1);
  //     return {
  //       ...state,
  //       list
  //     };
  //   default:
  //     return state;
  // }
}
