/**
 * title: 首页
 */
import React from 'react';
import styles from './index.less';
import TabExample from '../components/tabs';
import Swiper from '../components/swiper';
import { Link } from "react-router-dom";
import { connect } from "dva"


class Home extends React.Component {
  render() {
    let lists = this.props.lists;
    let brands = this.props.brands;
    let sellLists = this.props.sellLists;
    let pops = this.props.pops;
    let limits = this.props.limits;
    let homeLists = this.props.homeLists;
    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <ul className={styles.topUl}>
            <li className={styles.logo} />
            <li className={styles.serach}>
              <div className={styles.serachInp} onClick={() => {
                this.props.history.push('/search')
              }}>
                搜索商品,共12377件商品
              </div>
            </li>
            <li className={styles.topLogin}>
              <button className={styles.loginBtn}>登录</button>
            </li>
          </ul>
        </div>
        <div className={styles.example}>
          <TabExample />
        </div>
        <div className={styles.nav}>
          <div className={styles.swiper}>
            <Swiper autoPlay={true}/>
          </div>
          <div>
            <ul className={styles.grow}>
              <li className={styles.grows}>网易自营品牌</li>
              <li className={styles.grows}>30天无忧退货</li>
              <li className={styles.grows}>48小时快速退款</li>
            </ul>
            <div>
              
              <ul className={styles.lists}>
                {
                  lists.map(item => {
                    return (
                        <li className={styles.list} key={item.listName}>
                          <Link to="/list">
                          <div className={styles.list_img}>
                            <img src={item.listUrl} />
                          </div>
                          <div className={styles.list_type}>{item.listName}</div>
                          </Link>
                        </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <div className={styles.newPeo}>
            <div className={styles.newGift_top}>
              <span className={styles.newGift_top_txt}>— 新人专享礼 —</span>
            </div>
            <div className={styles.newGift_bottom}>
              <div className={styles.newGift_bottom_lef}>
                <div className={styles.name}>新人专享礼包</div>
                <div className={styles.rmb}>
                  <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt=""/>
                </div>
              </div>
              <div className={styles.newGift_bottom_rig}>
                <div className={styles.newGift_bottom_top}>
                  <div className={styles.welfare}>
                    <div className={styles.welfare_txt}>
                      <span className={styles.welfare_txt_fu}>福利社</span>
                      <span className={styles.welfare_txt_te}>今日特价</span>
                    </div>
                    <div className={styles.welfare_img}>
                      <img src="https://yanxuan.nosdn.127.net/d2abd30e0296cdee86f1bdd9242c0937.png?imageView&thumbnail=200x200&quality=75" alt=""/>
                    </div>
                  </div>
                </div>
                <div className={styles.newGift_bottom_bot}>
                  <div className={styles.welfare}>
                    <div className={styles.welfare_txt}>
                      <span className={styles.welfare_txt_fu}>新人拼团</span>
                      <span className={styles.welfare_txt_yo}>一元起包邮</span>
                    </div>
                    <div className={styles.welfare_img}>
                      <img src="https://yanxuan.nosdn.127.net/890f61b6af6644ba4fb706c878da21ea.png?imageView&thumbnail=200x200&quality=75" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.moduleTitle}>
            <div className={styles.moduleTitle_lef}>
              <span className={styles.moduleTitle_spa}>品牌制造商直销</span>
            </div>
            <div className={styles.moduleTitle_rig}>
              <span className={styles.moduleTitle_duo}>更多></span>
            </div>
          </div>
          <div className={styles.moduleTitle_list}>
            <ul className={styles.moduleTitle_list_ul}>
            {
              brands.map(item => {
                return (
                  <li className={styles.moduleTitle_list_item} key={item.brandName}>
                    <Link to="/list">
                      <div className={styles.cnt}>
                        <h4 className={styles.cnt_title}>{item.brandName}</h4>
                        <div className={styles.cnt_money}>
                          <span className={styles.yuan}>{item.brandPrice}</span>
                          <span className={styles.qi}>元起</span>
                        </div>
                      </div>
                      <img className={styles.moduleTitle_list_img} src={item.brandImgUrl}/>
                    </Link>
                  </li>
                )
              })
            }
            </ul>
          </div>
          <div className={styles.moduleTitle}>
            <div className={styles.moduleTitle_lef}>
              <span className={styles.moduleTitle_spa}>类目热销榜</span>
            </div>
            <div className={styles.moduleTitle_rig} />
          </div>
          <div className={styles.content}>
            <div className={styles.content_top}>
              <div className={styles.content_hot}>
                <div className={styles.content_name}>热销榜</div>
                <div className={styles.content_img}>
                  <img src="https://yanxuan.nosdn.127.net/e37656ecad9a2494f456e222fe7800a2.png?imageView&quality=65&thumbnail=200x200" />
                </div>
              </div>
              <div className={styles.content_good}>
                <div className={styles.content_name}>好评榜</div>
                <div className={styles.content_img}>
                  <img src="https://yanxuan.nosdn.127.net/736910b062c81b336a0418062a80bc5c.png?imageView&quality=65&thumbnail=200x200" />
                </div>
              </div>
            </div>
            <div className={styles.content_bot}>
              <ul className={styles.content_bot_ul}>
                {
                  sellLists.map(item => {
                    return (
                    <li className={styles.content_bot_li} key={item.sellListName}>
                      <Link to="/list">
                        <div className={styles.content_bot_li_item}>{item.sellListName}</div>
                        <div className={styles.content_bot_li_img}>
                          <img src={item.sellListImg} />
                        </div>
                      </Link>
                    </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <div className={styles.pop}>
            <div className={styles.moduleTitle}>
              <div className={styles.moduleTitle_lef}>
                <span className={styles.moduleTitle_spa}>人气推荐</span>
              </div>
              <div className={styles.moduleTitle_rig}>
                <span className={styles.moduleTitle_duo}>更多></span>
              </div>
            </div>
            <div className={styles.spItem}>
              <div className={styles.spItem_img}>
                <img src="https://yanxuan.nosdn.127.net/8ee282bed26f6248b3453b4b202a55db.png?imageView&quality=65&thumbnail=280x280" />
              </div>
              <div className={styles.spItem_wraper}>
                <div className={styles.tagWraper}>
                  <span className={styles.tagWraper_spa}>限时购</span>
                </div>
                <div className={styles.tagWraper_name}>AB面独立弹簧床垫 进口乳胶原液</div>
                <div className={styles.tagWraper_desc}>仅售供应商建议价的1/3</div>
                <div className={styles.tagWraper_price}>
                  <span>¥</span>
                  <span>2799</span>
                </div>
              </div>
            </div>
            <div className={styles.sp_list}>
              <ul className={styles.sp_ul}>
                {
                  pops.map(item => {
                    return (
                      <li className={styles.sp_li} key={item.index}>
                        <img
                          src={item.popImg}
                          className={styles.swiper_lazy}
                        />
                        <span className={styles.swiper_spa}>{item.popMake}</span>
                        <span className={styles.swiper_name}>
                          {item.popDetails}
                          <span>¥{item.popPrice}</span>
                        </span>
                        <div className={styles.gradientPrice}>
                          <span className={styles.gradientPrice_rmb}>{item.popCoupon}</span>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className={styles.moduleTitle}>
              <div className={styles.moduleTitle_lef}>
                <span className={styles.moduleTitle_spa}>限时购</span>
              </div>
              <div className={styles.moduleTitle_rig}>
                <span className={styles.moduleTitle_duo}>更多></span>
              </div>
            </div>
            <div className={styles.time}>
              <ul className={styles.time_ul}>
                {
                  limits.map(item => {
                    return (
                      <li className={styles.time_li} key={item.index}>
                        <Link to="/list">
                          <img
                            src={item.limitTimeImg}
                            className={styles.time_li_img}
                          />
                          <div>
                            <span className={styles.time_spa}>
                              <span className={styles.time_new}>￥{item.newPrice}</span>
                              <span className={styles.time_old}>￥{item.oldPrice}</span>
                            </span>
                          </div>
                        </Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.getList();
    this.props.getBrand();
    this.props.getSellList();
    this.props.getPop();
    this.props.getLimit();
    this.props.gethomeList()
  }
}
export default connect(
  state => {
    return {
      lists: state.home.lists,
      brands:state.home.brands,
      sellLists:state.home.sellLists,
      pops:state.home.pops,
      limits:state.home.limits,
      homeLists:state.list.homeLists
    }
  },
  dispatch => {
    return {
      getList: () => {
        dispatch({ type: "home/getList" })
      },
      getBrand: () => {
        dispatch({ type: "home/getBrand" })
      },
      getSellList: () => {
        dispatch({ type: "home/getSellList" })
      },
      getPop: () => {
        dispatch({ type: "home/getPop" })
      },
      getLimit: () => {
        dispatch({ type: "home/getLimit" })
      },
      gethomeList: () =>{
        dispatch({ type: "list/gethomeList" })
      }
    }
  }
)(Home);
