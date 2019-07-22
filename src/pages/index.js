/**
 * title: 首页
 */
import React from 'react';
import styles from './index.less';
import TabExample from '../components/tabs';
import Swiper from '../components/swiper';

class Home extends React.Component {
  render() {
    return (
      <div className={styles.container}>
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
        <div className={styles.nav}>
          <div className={styles.swiper}>
            <Swiper />
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
                    <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" />
                  </div>
                  <div className={styles.list_type}>新品首发</div>
                </li>
                <li className={styles.list}>
                  <div className={styles.list_img}>
                    <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" />
                  </div>
                  <div className={styles.list_type}>新品首发</div>
                </li>
                <li className={styles.list}>
                  <div className={styles.list_img}>
                    <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" />
                  </div>
                  <div className={styles.list_type}>新品首发</div>
                </li>
                <li className={styles.list}>
                  <div className={styles.list_img}>
                    <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" />
                  </div>
                  <div className={styles.list_type}>新品首发</div>
                </li>
                <li className={styles.list}>
                  <div className={styles.list_img}>
                    <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" />
                  </div>
                  <div className={styles.list_type}>新品首发</div>
                </li>
                <li className={styles.list}>
                  <div className={styles.list_img}>
                    <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" />
                  </div>
                  <div className={styles.list_type}>新品首发</div>
                </li>
                <li className={styles.list}>
                  <div className={styles.list_img}>
                    <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" />
                  </div>
                  <div className={styles.list_type}>新品首发</div>
                </li>
                <li className={styles.list}>
                  <div className={styles.list_img}>
                    <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" />
                  </div>
                  <div className={styles.list_type}>新品首发</div>
                </li>
                <li className={styles.list}>
                  <div className={styles.list_img}>
                    <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" />
                  </div>
                  <div className={styles.list_type}>新品首发</div>
                </li>
                <li className={styles.list}>
                  <div className={styles.list_img}>
                    <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" />
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
                  <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" />
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
                      <img src="https://yanxuan.nosdn.127.net/d2abd30e0296cdee86f1bdd9242c0937.png?imageView&thumbnail=200x200&quality=75" />
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
                      <img src="https://yanxuan.nosdn.127.net/890f61b6af6644ba4fb706c878da21ea.png?imageView&thumbnail=200x200&quality=75" />
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
                    <li className={styles.moduleTitle_list_item}>
                        <div className={styles.cnt}>
                            <h4 className={styles.cnt_title}>海外制造商</h4>
                            <div className={styles.cnt_money}>
                                <span className={styles.yuan}>22</span>
                                <span className={styles.qi}>元起</span>
                            </div>
                        </div>
                    </li>
                    <li className={styles.moduleTitle_list_item}>
                        <div className={styles.cnt}>
                            <h4 className={styles.cnt_title}>海外制造商</h4>
                            <div className={styles.cnt_money}>
                                <span className={styles.yuan}>22</span>
                                <span className={styles.qi}>元起</span>
                            </div>
                        </div>
                    </li>
                    <li className={styles.moduleTitle_list_item}>
                        <div className={styles.cnt}>
                            <h4 className={styles.cnt_title}>海外制造商</h4>
                            <div className={styles.cnt_money}>
                                <span className={styles.yuan}>22</span>
                                <span className={styles.qi}>元起</span>
                            </div>
                        </div>
                    </li>
                    <li className={styles.moduleTitle_list_item}>
                        <div className={styles.cnt}>
                            <h4 className={styles.cnt_title}>海外制造商</h4>
                            <div className={styles.cnt_money}>
                                <span className={styles.yuan}>22</span>
                                <span className={styles.qi}>元起</span>
                            </div>
                        </div>
                    </li>
                </ul>
          </div> 
          <div className={styles.moduleTitle}>
                <div className={styles.moduleTitle_lef}>
                    <span className={styles.moduleTitle_spa}>类目热销榜</span>
                </div>
                <div className={styles.moduleTitle_rig}>
                </div>
          </div>  
          <div className={styles.content}>
              <div className={styles.content_top}>
                  <div className={styles.content_hot}>
                      <div className={styles.content_name}>热销榜</div>
                      <div className={styles.content_img}>
                          <img src="https://yanxuan.nosdn.127.net/e37656ecad9a2494f456e222fe7800a2.png?imageView&quality=65&thumbnail=200x200"/>
                      </div>
                  </div>
                  <div className={styles.content_good}>
                  <div className={styles.content_name}>好评榜</div>
                      <div className={styles.content_img}>
                          <img src="https://yanxuan.nosdn.127.net/736910b062c81b336a0418062a80bc5c.png?imageView&quality=65&thumbnail=200x200"/>
                      </div>
                  </div>
              </div>
              <div className={styles.content_bot}>
                  <ul className={styles.content_bot_ul}>
                    <li className={styles.content_bot_li}>
                        <div className={styles.content_bot_li_item}>居家生活榜</div>
                        <div className={styles.content_bot_li_img}>
                            <img src="https://yanxuan.nosdn.127.net/768355bca1c186c0c25de88bd1272d8c.png?imageView&quality=65&thumbnail=200x200"/>
                        </div>
                    </li>
                    <li className={styles.content_bot_li}>
                        <div className={styles.content_bot_li_item}>居家生活榜</div>
                        <div className={styles.content_bot_li_img}>
                            <img src="https://yanxuan.nosdn.127.net/768355bca1c186c0c25de88bd1272d8c.png?imageView&quality=65&thumbnail=200x200"/>
                        </div>
                    </li>
                    <li className={styles.content_bot_li}>
                        <div className={styles.content_bot_li_item}>居家生活榜</div>
                        <div className={styles.content_bot_li_img}>
                            <img src="https://yanxuan.nosdn.127.net/768355bca1c186c0c25de88bd1272d8c.png?imageView&quality=65&thumbnail=200x200"/>
                        </div>
                    </li>
                    <li className={styles.content_bot_li}>
                        <div className={styles.content_bot_li_item}>居家生活榜</div>
                        <div className={styles.content_bot_li_img}>
                            <img src="https://yanxuan.nosdn.127.net/768355bca1c186c0c25de88bd1272d8c.png?imageView&quality=65&thumbnail=200x200"/>
                        </div>
                    </li>
                    <li className={styles.content_bot_li}>
                        <div className={styles.content_bot_li_item}>居家生活榜</div>
                        <div className={styles.content_bot_li_img}>
                            <img src="https://yanxuan.nosdn.127.net/768355bca1c186c0c25de88bd1272d8c.png?imageView&quality=65&thumbnail=200x200"/>
                        </div>
                    </li>
                    <li className={styles.content_bot_li}>
                        <div className={styles.content_bot_li_item}>居家生活榜</div>
                        <div className={styles.content_bot_li_img}>
                            <img src="https://yanxuan.nosdn.127.net/768355bca1c186c0c25de88bd1272d8c.png?imageView&quality=65&thumbnail=200x200"/>
                        </div>
                    </li>
                    <li className={styles.content_bot_li}>
                        <div className={styles.content_bot_li_item}>居家生活榜</div>
                        <div className={styles.content_bot_li_img}>
                            <img src="https://yanxuan.nosdn.127.net/768355bca1c186c0c25de88bd1272d8c.png?imageView&quality=65&thumbnail=200x200"/>
                        </div>
                    </li>
                    <li className={styles.content_bot_li}>
                        <div className={styles.content_bot_li_item}>居家生活榜</div>
                        <div className={styles.content_bot_li_img}>
                            <img src="https://yanxuan.nosdn.127.net/768355bca1c186c0c25de88bd1272d8c.png?imageView&quality=65&thumbnail=200x200"/>
                        </div>
                    </li>
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
                    <img src="https://yanxuan.nosdn.127.net/8ee282bed26f6248b3453b4b202a55db.png?imageView&quality=65&thumbnail=280x280"/>
                </div>
                <div className={styles.spItem_wraper}>
                    <div className={styles.tagWraper}>
                        <span className={styles.tagWraper_spa}>
                            限时购
                        </span>
                    </div>
                    <div className={styles.tagWraper_name}>
                        AB面独立弹簧床垫 进口乳胶原液
                    </div>
                    <div className={styles.tagWraper_desc}>
                        仅售供应商建议价的1/3
                    </div>
                    <div className={styles.tagWraper_price}>
                        <span>¥</span>
                        <span>2799</span>
                    </div>
                </div>
            </div>
            <div className={styles.sp_list}>
                <ul className={styles.sp_ul}>
                    <li className={styles.sp_li}>
                        <img src="https://yanxuan.nosdn.127.net/630db6838c0cce666f7641469275a0ab.png?imageView&quality=65&thumbnail=330x330" className={styles.swiper_lazy}/>
                        <span className={styles.swiper_spa}>
                            日本制造
                        </span>
                        <span className={styles.swiper_name}>
                            日本制造 头皮护理发根滋养...
                            <span>¥79</span>
                        </span>
                        <div className={styles.gradientPrice}>
                            <span className={styles.gradientPrice_rmb}>好货内部价</span>
                        </div>
                    </li>
                    <li className={styles.sp_li}>
                        <img src="https://yanxuan.nosdn.127.net/630db6838c0cce666f7641469275a0ab.png?imageView&quality=65&thumbnail=330x330" className={styles.swiper_lazy}/>
                        <span className={styles.swiper_spa}>
                            日本制造
                        </span>
                        <span className={styles.swiper_name}>
                            日本制造 头皮护理发根滋养...
                            <span>¥79</span>
                        </span>
                        <div className={styles.gradientPrice}>
                            <span className={styles.gradientPrice_rmb}>好货内部价</span>
                        </div>
                    </li>
                    <li className={styles.sp_li}>
                        <img src="https://yanxuan.nosdn.127.net/630db6838c0cce666f7641469275a0ab.png?imageView&quality=65&thumbnail=330x330" className={styles.swiper_lazy}/>
                        <span className={styles.swiper_spa}>
                            日本制造
                        </span>
                        <span className={styles.swiper_name}>
                            日本制造 头皮护理发根滋养...
                            <span>¥79</span>
                        </span>
                        <div className={styles.gradientPrice}>
                            <span className={styles.gradientPrice_rmb}>好货内部价</span>
                        </div>
                    </li>
                </ul>
            </div>

          </div>
          
        </div>
      </div>
    );
  }
}
export default Home;
