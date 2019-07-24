import React from 'react';
import styles from './index.less';
import { connect } from 'dva';
import NavLink from 'umi/navlink';
import { List, InputItem, Toast } from 'antd-mobile';
import Header from '../../components/Header';

class Login extends React.Component {
  state = {
    username: this.props.username,
    password: this.props.password,
  };

  onChangePw = value => {
    this.setState({
      password: value,

    });
  };
  onChangePhone = value => {
    this.setState({
      username: value,
    });
  };
  render() {
    return (
      <div className={styles.login}>
        <Header />

        <div className={styles.login_con}>
          <div className={styles.logo}>
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="" />
          </div>
          <List className={styles.form} renderHeader={() => ''}>
            <InputItem
              type="text"

              placeholder="请输入您的用户名"
              onChange={this.onChangePhone}
              value={this.state.username}

            />
          </List>
          <List className={styles.form} renderHeader={() => ''}>
            <InputItem
              type="password"
              placeholder="请输入密码"
              onChange={this.onChangePw}
              value={this.state.password}
            />
          </List>
          <button
            disabled={this.handleDisabled()}
            onClick={() => {
              this.props.handleLogin(this.state.username, this.state.password, this.props.history);
            }}
            className={styles.button}
          >
            登录
          </button>
          <NavLink to="/register" className={styles.reg}>
            注册
          </NavLink>
        </div>
      </div>
    );
  }
  handleDisabled = () => {
    if (this.state.username && this.state.password) {
      return false;
    }
    return true;
  };
}

export default connect(
  state => {
    return {
      username: state.user.username,
      password: state.user.password,
    };
  },
  dispatch => {
    return {
      handleLogin: (username, password, router) => {
        console.log(username);
        dispatch({
          type: 'user/LoginUser',
          username,
          password,
          router,
        });
      },
    };
  },
)(Login);
