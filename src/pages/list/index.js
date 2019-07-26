import React from 'react';
import styles from './index.less';
import Swiper from '../../components/swiper';
import TabExample from '../../components/tabs';
import { connect } from "dva";
import { NavLink } from "react-router-dom"

class List extends React.Component {
  render() {
      let homeLists = this.props.homeLists;
    return (
      <div className={styles.bigList} >
        <div className={styles.top}>
          <ul className={styles.topUl}>
            <li className={styles.logo} />
            <li className={styles.serach}>
              <input type="text" placeholder="搜索商品" className={styles.serachInp} />
            </li>
            <li className={styles.topLogin}>
              <button className={styles.loginBtn}>登录</button>
            </li>
          </ul>
        </div>
        <div className={styles.example}>
          <TabExample />
        </div>
        <div className={styles.list_swiper}>
          <Swiper />
        </div>
        <div className={styles.itemFloor}>
            <div className={styles.itemHeader}>
                <p className={styles.itemHeader_name}>
                    <span>夏凉热卖</span>
                </p>
                <p className={styles.itemHeader_desc}>
                    <span>清凉一夏</span>
                </p>
            </div>
            <div className={styles.goodGrid}>
                <ul className={styles.goodGrid_ul}>
                  {
                    homeLists.map(item => {
                      return (
                        item.goodHomeList.homeList.map(item => {
                          return (
                            <li className={styles.goodGrid_ul_li} key={item.listDetails}>
                              <NavLink to="/purchase">
                              <div className={styles.goodGrid_img}>
                                    <img src={item.listImg} alt=""/>
                                </div>
                                <div className={styles.goodGrid_details}>
                                    <span>{item.listDetails}</span>
                                </div>
                                <div className={styles.goodGrid_name}>
                                    <span>{item.listName}</span>
                                </div>
                                <div className={styles.goodGrid_price}>
                                    <span>¥</span>
                                    <span>{item.listPrice}</span>
                                </div>
                                <div className={styles.goodGrid_tagWraper}>
                                    <p>{item.listTagWraper}</p>
                                </div>
                              </NavLink>
                                
                            </li>
                          )
                        })
                      )
                    })
                  }
                </ul>
            </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
      this.props.gethomeList();
  }
}
export default connect(
    state => {
        return {
            homeLists: state.list.homeLists
        }
    },
    dispatch => {
        return {
          gethomeList: () =>{
                dispatch({ type: "list/gethomeList" })
            }
        }
    }
)(List);
