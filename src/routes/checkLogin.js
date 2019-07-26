import { Redirect } from 'dva/router';
const checkLogin = props => {
  if (window.localStorage.getItem('username')) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
};
export default checkLogin;
