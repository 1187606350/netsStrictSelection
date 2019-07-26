/**
 * Routes:
 * - ./src/routes/checkLogin.js
 */
import React from 'react';
import styles from './index.less';
import { connect } from 'dva';

class Center extends React.Component {
  render() {
    return (
      <div className={styles.center}>
        <div className={styles.mine_hd}>
          <div className={styles.photo}>
            <img src="//yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" alt="" />
          </div>
          <div className={styles.username}>
            <p className={styles.userphone}>{this.props.username}</p>
            <p className={styles.usertype}>普通用户</p>
          </div>
        </div>
        <div className={styles.top}>
          <h2>我的资产</h2>
          <div className={styles.assetList}>
            <div className={styles.assetItem}>
              <p>¥0</p>
              <p>回馈金</p>
            </div>
            <div className={styles.assetItem}>
              <p>0</p>
              <p>红包</p>
            </div>
            <div className={styles.assetItem}>
              <p>0</p>
              <p>优惠券</p>
            </div>
            <div className={styles.assetItem}>
              <p>¥0</p>
              <p>津贴</p>
            </div>
            <div className={styles.assetItem}>
              <p>0</p>
              <p>礼品卡</p>
            </div>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.menu}>
            <div className={styles.list}>
              <i className="iconfont icon-icon_order" />
              <p>我的订单</p>
            </div>
            <div className={styles.list}>
              <i className="iconfont icon-rili" />
              <p>周六一起拼</p>
            </div>
            <div className={styles.list}>
              <i className="iconfont icon-shinshopshouhoufuwu" />
              <p>售后服务</p>
            </div>
            <div className={styles.list}>
              <i className="iconfont icon-yaoqingfanli" />
              <p>邀请返利</p>
            </div>
            <div className={styles.list}>
              <i className="iconfont icon-youxiangou" />
              <p>优先购</p>
            </div>
            <div className={styles.list}>
              <i className="iconfont icon-qian" />
              <p>积分中心</p>
            </div>
            <div className={styles.list}>
              <i className="iconfont icon-huiyuan" />
              <p>会员俱乐部</p>
            </div>
            <div className={styles.list}>
              <i className="iconfont icon-dizhi" />
              <p>地址管理</p>
            </div>
            <div className={styles.list}>
              <i className="iconfont icon-anquan" />
              <p>账号安全</p>
            </div>
            <div className={styles.list}>
              <i className="iconfont icon-kefu" />
              <p>帮助与客服</p>
            </div>
            <div className={styles.list}>
              <i className="iconfont icon-yijianfankui" />
              <p>意见反馈</p>
            </div>
          </div>
          <button onClick={this.handleQuit} className={styles.bottom}>
            退出登录
          </button>
        </div>
      </div>
    );
  }
  handleQuit = () => {
    window.localStorage.removeItem('username');
    window.location.reload();
  };
}
export default connect(state => {
  return {
    username: state.user.username,
  };
})(Center);
