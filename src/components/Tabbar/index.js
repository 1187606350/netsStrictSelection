import React from 'react';
import NavLink from 'umi/navlink';
import styles from './index.less';

class SetTabbar extends React.Component {
  render() {
    return (
      <div className={styles.Tabbar}>
        <ul>
          <li>
            <NavLink exact activeClassName={styles.active} to="/">
              <i className="iconfont iconshouye" />
              {}
              <span>首页</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/type">
              <i className="iconfont iconleimupinleifenleileibie" />
              <span>分类</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/cart">
              <i className="iconfont icongouwuche" />
              <span>购物车</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/mine">
              <i className="iconfont icongeren" /> <span>登录</span>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
export default SetTabbar;
