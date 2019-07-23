import React from 'react';
import styles from './index.less';
import { connect } from 'dva';
import { List, InputItem, Toast } from 'antd-mobile';
import Header from '../../components/Header';

class Login extends React.Component {
  state = {
    hasPhError: false,
    hasPwError: false,
    phoneNumber: this.props.phoneNumber,
    password: this.props.password,
  };
  onErrorClick = () => {
    if (this.state.hasPhError) {
      Toast.info('请输入正确的手机号');
    } else if (this.state.hasPwError) {
      Toast.info('请输入正确的密码');
    }
  };
  onChangePhone = value => {
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        hasPhError: true,
      });
    } else {
      this.setState({
        hasPhError: false,
      });
    }
    this.setState({
      phonenumber: value,
    });
  };
  onChangePw = value => {
    if (value.replace(/^[a-zA-Z\d_]$/, '').length < 8) {
      this.setState({
        hasPwError: true,
      });
    } else {
      this.setState({
        hasPwError: false,
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
              type="phone"
              placeholder="请输入手机号"
              error={this.state.hasPhError}
              onErrorClick={this.onErrorClick}
              onChange={this.onChangePhone}
              value={this.state.phonenumber}
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
          <div className={styles.button}>登录</div>
        </div>
      </div>
    );
  }
}
export default connect(state => {
  return {
    phoneNumber: state.user.phoneNumber,
    password: state.user.password,
  };
})(Login);
