import React from 'react';
import styles from './index.less';
import { connect } from 'dva';
import { List, InputItem, Toast } from 'antd-mobile';
import Header from '../../components/Header';

class Register extends React.Component {
  state = {
    hasPhError: true,
    hasPwError: true,
    username: this.props.username,
    password: this.props.password,
  };
  onErrorClick = () => {
    if (this.state.hasPhError) {
      Toast.info('请输入正确的用户名');
    } else if (this.state.hasPwError) {
      Toast.info('请输入正确的密码');
    }
  };
  onChangePhone = value => {
    if (
      value.replace(/^[a-zA-Z0-9_-]$/, '').length > 6 &&
      value.replace(/^[a-zA-Z0-9_-]$/, '').length < 16
    ) {
      this.setState({
        hasPhError: false,
      });
    } else {
      this.setState({
        hasPhError: true,
      });
    }
    this.setState({
      username: value,
    });
  };
  onChangePw = value => {
    if (
      value.replace(/^[a-zA-Z\d_]$/, '').length > 6 &&
      value.replace(/^[a-zA-Z\d_]$/, '').length < 16
    ) {
      this.setState({
        hasPwError: false,
      });
    } else {
      this.setState({
        hasPwError: true,
      });
    }
    this.setState({
      password: value,
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
              error={this.state.hasPhError}
              onErrorClick={this.onErrorClick}
              onChange={this.onChangePhone}
              value={this.state.username}
            />
          </List>
          <List className={styles.form} renderHeader={() => ''}>
            <InputItem
              type="password"
              placeholder="请输入密码"
              error={this.state.hasPwError}
              onErrorClick={this.onErrorClick}
              onChange={this.onChangePw}
              value={this.state.password}
            />
          </List>
          <button
            disabled={this.handleDisabled()}
            onClick={() => {
              this.props.handleRegister(
                this.state.username,
                this.state.password,
                this.props.history,
              );
            }}
            className={styles.button}
          >
            注册
          </button>
        </div>
      </div>
    );
  }
  handleDisabled = () => {
    console.log(this.state.hasPhError, this.state.hasPwError);
    if (!this.state.hasPhError && !this.state.hasPwError) {
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
      handleRegister: (username, password, router) => {
        console.log(username, password);
        dispatch({
          type: 'user/addUser',
          username,
          password,
          router,
        });
      },
    };
  },
)(Register);
