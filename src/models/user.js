import { Toast } from 'antd-mobile';
export default {
  namespace: 'user',
  state: {
    username: window.localStorage.getItem('username')
      ? JSON.parse(window.localStorage.getItem('username'))
      : null,
  },

  effects: {
    *addUser(action, { put }) {
      let response = yield fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          username: action.username,
          password: action.password,
        }),
      });
      let res = yield response.json();
      // console.log(res);
      if (res.code === 0) {
        Toast.info(res.msg);
        setTimeout(() => {
          action.router.push('/login');
        }, 1000);
      } else {
        Toast.info(res.msg, 2);
      }
    },
    *LoginUser(action, { put }) {
      let response = yield fetch('http://localhost:8080/sign-in', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          username: action.username,
          password: action.password,
        }),
      });
      let res = yield response.json();
      // console.log(res);
      if (res.code === 0) {
        window.localStorage.setItem('username', res.data.username);
        Toast.info(res.msg);
        setTimeout(() => {

          let redirect = action.router.location.search;
          redirect = redirect.replace('?', '');
          let arr = redirect.split('&');
          let obj = {};
          arr.forEach(item => {
            let tmp = item.split('=');
            obj[tmp[0]] = tmp[1];
          });
          redirect = obj.redirect || '/center';
          action.router.history.replace(redirect);
        }, 2000);
      } else {
        Toast.info(res.msg, 2);
      }


      yield put({ type: 'setUser', add: res });
    },
  },
  reducers: {
    setUser(state, action) {
      return { ...state, username: action.add.data.username };
    },
  },
};
