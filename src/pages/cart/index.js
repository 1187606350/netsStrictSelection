import React from 'react';
import styles from './index.less';
import NavLink from 'umi/navlink';
import { connect } from 'dva';
import { Toast } from 'antd-mobile';
class Cart extends React.Component {
  state = {
    totalPrice: 0,
    totalGoods: 0,
    goods: this.props.goods,
  };
  componentDidMount() {
    this.props.getGoods();
  }
  render() {
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
            {this.state.goods.map((item, index) => {
              return (
                <div className={styles.cart_goods} key={item.id} index={index}>
                  <label className={styles.label}>
                    <input type="checkbox" className={styles.checked} />
                  </label>
                  <div className={styles.goodsInfos}>
                    <img src={item.img} alt="" />
                    <div className={styles.goodsInfo}>
                      <div className={styles.goodsline1}>{item.goodsName}</div>
                      <div className={styles.goodsline2}>
                        <span>{item.spec}</span>
                        <span />
                      </div>
                      <div className={styles.goodsline3}>
                        <p className={styles.goodsPrice}>¥{item.price}</p>
                        <div className={styles.num}>
                          <button
                            onClick={() => {
                              this.handleDecrease(index);
                            }}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            value={item.num}
                            onChange={this.handleValue.bind(this, index)}
                            className={styles.goodsnum}
                          />
                          <button
                            onClick={() => {
                              this.handleAdd(index);
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.footer}>
            <div className={styles.left}>
              <label className={styles.label}>
                <input type="checkbox" className={styles.checked} />
              </label>
              <p className={styles.count}>
                已选(<span>{this.state.totalGoods}</span>)
              </p>
            </div>
            <div className={styles.right}>
              <p className={styles.total}>
                合计: ¥<span>{this.state.totalPrice}</span>
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
            <NavLink to="/login?redirect=/cart" className={styles.cart_logo}>
              登录
            </NavLink>
          </div>
        </div>
      );
    }
  }

  handleValue = (index, event) => {
    let goods = this.state.goods;
    let num = event.target.value;
    if (num === '') {
      Toast.info('数量不能为空');
    }
    goods[index].num = num;
    this.setState({
      goods: goods,
    });
    this.totalPrice();
  };

  handleDecrease = index => {
    let goods = this.state.goods;
    goods[index].num -= 1;
    goods[index].num = goods[index].num < 1 ? 1 : goods[index].num;
    this.setState({
      goods: goods,
    });
    this.totalPrice();
  };

  handleAdd = index => {
    // console.log(value);
    let goods = this.state.goods;
    goods[index].num += 1;
    this.setState({
      goods: goods,
    });
    this.totalPrice();
  };
  totalPrice() {
    let totalPrice = 316.5;
    let goods = this.state.goods;
    for (var i = 0; i < goods.length; i++) {
      totalPrice += goods[i].price * goods[i].num;
    }
    this.setState({
      totalPrice: totalPrice,
    });
  }
}

export default connect(
  state => {
    return {
      username: state.user.username,
      goods: state.goods.goods,
    };
  },
  dispatch => {
    return {
      getGoods: () => {
        dispatch({ type: 'goods/getGoods' });
      },
    };
  },
)(Cart);
