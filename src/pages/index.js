/**
 * title: 首页
 */
import React from "react"
import styles from "./index.less"
import TabExample from "../components/tabs"
import Swiper from "../components/swiper"

class Home extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.top}>
                    <ul className={styles.topUl}>
                        <li className={styles.logo}></li>
                        <li className={styles.serach}>
                            <input type="text" placeholder="搜索商品" className={styles.serachInp}/>
                        </li>
                        <li className={styles.topLogin}>
                            <button className={styles.loginBtn}>登录</button>
                        </li>
                    </ul>
                </div>
                <div>
                    <TabExample/>
                </div>
                <div> 
                    <Swiper/>
                </div>
                <div>
                    <ul className={styles.grow}>
                        <li className={styles.grows}>网易自营品牌</li>
                        <li className={styles.grows}>30天无忧退货</li>
                        <li className={styles.grows}>48小时快速退款</li>
                    </ul>
                    <div>
                        <ul className={styles.lists}>
                            <li className={styles.list}>
                                <div className={styles.list_img}>
                                    <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png"/>
                                </div>
                                <div className={styles.list_type}>新品首发</div>
                            </li>
                            <li className={styles.list}>
                                <div className={styles.list_img}>
                                    <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png"/>
                                </div>
                                <div className={styles.list_type}>新品首发</div>
                            </li>
                            <li className={styles.list}>
                                <div className={styles.list_img}>
                                    <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png"/>
                                </div>
                                <div className={styles.list_type}>新品首发</div>
                            </li>
                            <li className={styles.list}>
                                <div className={styles.list_img}>
                                    <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png"/>
                                </div>
                                <div className={styles.list_type}>新品首发</div>
                            </li>
                            <li className={styles.list}>
                                <div className={styles.list_img}>
                                    <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png"/>
                                </div>
                                <div className={styles.list_type}>新品首发</div>
                            </li>
                            <li className={styles.list}>
                                <div className={styles.list_img}>
                                    <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png"/>
                                </div>
                                <div className={styles.list_type}>新品首发</div>
                            </li>
                            <li className={styles.list}>
                                <div className={styles.list_img}>
                                    <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png"/>
                                </div>
                                <div className={styles.list_type}>新品首发</div>
                            </li>
                            <li className={styles.list}>
                                <div className={styles.list_img}>
                                    <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png"/>
                                </div>
                                <div className={styles.list_type}>新品首发</div>
                            </li>
                            <li className={styles.list}>
                                <div className={styles.list_img}>
                                    <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png"/>
                                </div>
                                <div className={styles.list_type}>新品首发</div>
                            </li>
                            <li className={styles.list}>
                                <div className={styles.list_img}>
                                    <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png"/>
                                </div>
                                <div className={styles.list_type}>新品首发</div>
                            </li>
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
                                <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png"/>
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
                                        <img src="https://yanxuan.nosdn.127.net/d2abd30e0296cdee86f1bdd9242c0937.png?imageView&thumbnail=200x200&quality=75"/>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.newGift_bottom_bot}>
                            <div className={styles.welfare}>
                                    <div className={styles.welfare_txt}>
                                        <span className={styles.welfare_txt_fu}>新人拼团</span>
                                        <span className={styles.welfare_txt_te}>今日特价</span>
                                    </div>
                                    <div className={styles.welfare_img}>
                                        <img src="https://yanxuan.nosdn.127.net/890f61b6af6644ba4fb706c878da21ea.png?imageView&thumbnail=200x200&quality=75"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;