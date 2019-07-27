export default {
  namespace: 'goods',
  state: {
    goods: [],
  },

  effects: {
    //获取购物车商品信息
    *getGoods(action, { put }) {
      let response = yield fetch('http://localhost:3000/goods');
      let res = yield response.json();

      yield put({ type: 'setGoods', goods: res });
    },
  },
  reducers: {
    setGoods(state, action) {
      return Object.assign({}, state, { goods: action.goods });
    },
  },
};
