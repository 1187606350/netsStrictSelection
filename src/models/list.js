export default {
    namespace: 'list',
    state: {
      homeLists: [],
    },
    effects: {
      *gethomeList(action, { put }) {
        let response = yield fetch('http://localhost:3000/lists');
        let res = yield response.json();
        console.log(res);
        yield put({ type: 'setHomeList', homeList: res });
      },
    },
    reducers: {
      setHomeList(state, action) {
        return { ...state, ...{ homeLists: action.homeList } };
      },
    },
  };