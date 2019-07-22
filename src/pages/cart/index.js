import React from 'react';
import styles from './index.less';

class Cart extends React.Component {
  render() {
    return (
      <div className={styles.cart}>
        <div className={styles.cartHeader}>
          <span className={styles.cartlogo}>购物车</span>
          <span className={styles.cartright}>领券</span>
        </div>

        <ol className={styles.grow}>
          <li className={styles.grows}>
            <i className={styles.cart_icon} />
            30天无忧退货
          </li>
          <li className={styles.grows}>48小时快速退款</li>
          <li className={styles.grows}>满88元免邮费</li>
        </ol>

        <div className={styles.cart_con}>
          <div className={styles.cart_con_img}>
            <img
              src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png"
              alt=""
            />
          </div>
          <div className={styles.cart_s}>去添加点什么吧</div>
          <div className={styles.cart_logo}>登录</div>
        </div>
      </div>
    );
  }
}
export default Cart;
