import React from 'react';
import styles from './index.less';
import NavLink from 'umi/navlink';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <NavLink to="/" activeclassName={styles.icon_home}>
          <i className="iconfont iconshouye" />
        </NavLink>
        <NavLink to="/type" activeclassName={styles.icon_logo}>
          网易严选
        </NavLink>
        <div className={styles.header_left}>
          <NavLink to="/type" activeclassName={styles.icon_search}>
            <i className="iconfont iconiconset0157" />
          </NavLink>
          <NavLink to="/cart" activeclassName={styles.icon_cart}>
            <i className="iconfont icongouwuche" />
          </NavLink>
        </div>
      </div>
    );
  }
}
export default Header;
