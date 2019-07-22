import React from 'react';
import styles from './index.less';
import Header from '../../components/Header';

class Mine extends React.Component {
  render() {
    return (
      <div className={styles.mine_logo}>
        <Header />
        <div className={styles.con}>
          <div className={styles.logo}>
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="" />
          </div>
          <div className={styles.login}>登录</div>
          <div className={styles.reg}>注册</div>
        </div>
      </div>
    );
  }
}
export default Mine;
