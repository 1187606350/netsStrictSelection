import React from 'react';
import styles from './index.less';
import NavLink from 'umi/navlink';
import { connect } from 'dva';
class Cart extends React.Component {
  state = {
    value: 1,
    price: 249,
  };
  render() {
    let tatol = this.state.value * this.state.price;
    if (this.props.username) {
      return (
        <div className={styles.cart}>
          <div className={styles.cartHeader}>
            <span className={styles.cartlogo}>购物车</span>
            <div className={styles.cartright}>
              <span className={styles.cartquan}>领券</span>
              <span className={styles.cartwrite}>编辑</span>
            </div>
          </div>

          <div className={styles.cart_main}>
            <div className={styles.cart_goods}>
              <label className={styles.label}>
                <input type="checkbox" className={styles.checked} />
              </label>
              <div className={styles.goodsInfos}>
                <img
                  src="https://yanxuan.nosdn.127.net/1492b4168e38a97503621b560fa705f7.png?imageView&thumbnail=160x0&quality=75"
                  alt=""
                />
                <div className={styles.goodsInfo}>
                  <div className={styles.goodsline1}>户外露营野餐组合</div>
                  <div className={styles.goodsline2}>
                    <span>速开帐篷+野餐垫</span>
                    <span />
                  </div>
                  <div className={styles.goodsline3}>
                    <p className={styles.goodsPrice}>¥{this.state.price}</p>
                    <div className={styles.num}>
                      <button
                        disabled={this.handleDisabled(this.state.value)}
                        onClick={() => {
                          this.handleDecrease(this.state.value);
                        }}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleValue}
                        className={styles.goodsnum}
                      />
                      <button
                        onClick={() => {
                          this.handleAdd(this.state.value);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.cart_goods}>
              <label className={styles.label}>
                <input type="checkbox" className={styles.checked} />
              </label>
              <div className={styles.goodsInfos}>
                <img
                  src="https://yanxuan.nosdn.127.net/1492b4168e38a97503621b560fa705f7.png?imageView&thumbnail=160x0&quality=75"
                  alt=""
                />
                <div className={styles.goodsInfo}>
                  <div className={styles.goodsline1}>户外露营野餐组合</div>
                  <div className={styles.goodsline2}>
                    <span>速开帐篷+野餐垫</span>
                    <span />
                  </div>
                  <div className={styles.goodsline3}>
                    <p className={styles.goodsPrice}>¥{this.state.price}</p>
                    <div className={styles.num}>
                      <button
                        disabled={this.handleDisabled(this.state.value)}
                        onClick={() => {
                          this.handleDecrease(this.state.value);
                        }}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleValue}
                        className={styles.goodsnum}
                      />
                      <button
                        onClick={() => {
                          this.handleAdd(this.state.value);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.footer}>
            <div className={styles.left}>
              <label className={styles.label}>
                <input type="checkbox" className={styles.checked} />
              </label>
              <p className={styles.count}>
                已选(<span>4</span>)
              </p>
            </div>
            <div className={styles.right}>
              <p className={styles.total}>
                合计: ¥<span>{tatol}</span>
              </p>
              <button className={styles.buy}>下单</button>
            </div>
          </div>
        </div>
      );
    } else {
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
            <NavLink to="/login" className={styles.cart_logo}>
              登录
            </NavLink>
          </div>
        </div>
      );
    }
  }

  handleValue = e => {
    this.setState({
      value: e.target.value,
    });
  };
  handleDecrease = value => {
    // console.log(value);
    this.setState({
      value: --value,
    });
  };
  handleDisabled = value => {
    if (value === 1) {
      return true;
    }
    return false;
  };
  handleAdd = value => {
    // console.log(value);
    this.setState({
      value: ++value,
    });
  };
}
export default connect(state => {
  return {
    username: state.user.username,
  };
})(Cart);
