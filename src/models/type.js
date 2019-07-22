export default {
  namespace: 'type',
  state: {
    tabs: [],
  },
  effects: {
    *getCateList(action, { put }) {
      let response = yield fetch('http://localhost:3000/category');
      let res = yield response.json();
      console.log(res);
      yield put({ type: 'setTabs', tab: res });
    },
  },
  reducers: {
    setTabs(state, action) {
      return { ...state, ...{ tabs: action.tab } };
    },
  },
};
