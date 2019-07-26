import React from 'react';
import NavLink from 'umi/navlink';
import styles from './index.less';
import { connect } from 'dva';
class SetTabbar extends React.Component {
  render() {
    return (
      <div className={styles.Tabbar}>
        <ul id="tabbarId">
          <li>
            <NavLink exact className={styles.active} to="/">
              <i className="iconfont iconshouye" />
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
            {this.props.username ? (
              <NavLink activeClassName={styles.active} to="/center">
                <i className="iconfont icongeren" /> <span>个人</span>
              </NavLink>
            ) : (
              <NavLink activeClassName={styles.active} to="/mine">
                <i className="iconfont icongeren" /> <span>个人</span>
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    );
  }
  initialTabar() {
    let aTag = document.querySelector('#tabbarId a');

    aTag.className = 'styles.active';
  }
  componentDidMount() {
    this.initialTabar();
  }
}
export default connect(state => {
  return {
    username: state.user.username,
  };
})(SetTabbar);
