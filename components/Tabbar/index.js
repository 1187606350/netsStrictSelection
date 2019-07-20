import React from 'react';
import NavLink from 'umi/navlink';
import styles from './index.less';

class SetTabbar extends React.Component {
  render() {
    return (
      <div className={styles.Tabbar}>
        <ul>
          <li>
            <NavLink activeClassName={styles.active} to="/home">
              <i class="iconfont iconshouye" />
              <span>首页</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/category">
              <i class="iconfont iconleimupinleifenleileibie" />
              <span>分类</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/shopcart">
              <i class="iconfont icongouwuche" />
              <span>购物车</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/login">
              <i class="iconfont icongeren" /> <span>登录</span>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
export default SetTabbar;
