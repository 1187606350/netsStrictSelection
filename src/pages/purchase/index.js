import React from "react";
import Header from "../../components/Header"
import styles from "./index.less"
import SwiperTwo from "../../components/swiperTwo"

class Purchase extends React.Component {
    render() {
        return (
           <div className={styles.purchase}>
               <div className={styles.header}>
                    <Header/>
               </div>
               <div className={styles.swiper}>
                    <SwiperTwo/>
               </div>
               <div className={styles.title}>
                   <ul className={styles.title_ul}>
                       <li className={styles.title_li}>
                           <div className={styles.title_li_lef}>
                               <img src="https://yanxuan.nosdn.127.net/aaecb48d9bd687585a7e903c9a83263a.jpg" alt=""/>
                           </div>
                           <div className={styles.title_li_rig}>
                               <div className={styles.li_rig_text}>针织全棉</div>
                               <div className={styles.li_rig_text}>微弹细腻</div>
                           </div>
                       </li>
                       <li className={styles.title_li}>
                           <div className={styles.title_li_lef}>
                               <img src="https://yanxuan.nosdn.127.net/d010740ccc5de9c38639fa21f12bb871.jpg" alt=""/>
                           </div>
                           <div className={styles.title_li_rig}>
                               <div className={styles.li_rig_text}>大豆纤维</div>
                               <div className={styles.li_rig_text}>丰盈透气</div>
                           </div>
                       </li>
                       <li className={styles.title_li}>
                           <div className={styles.title_li_lef}>
                               <img src="https://yanxuan.nosdn.127.net/79c4abeea1ba7eca79911a95485741d5.jpg" alt=""/>
                           </div>
                           <div className={styles.title_li_rig}>
                               <div className={styles.li_rig_text}>整体水洗</div>
                               <div className={styles.li_rig_text}>洁净安心</div>
                           </div>
                       </li>
                   </ul>
               </div>
               <div className={styles.content}>
                   <div className={styles.content_price}>
                       <p>¥199</p>
                   </div>
                   <div className={styles.spmcBanner}>
                       <div className={styles.spmcPrice}>
                          <span className={styles.spmcDesc}>
                            <span className={styles.super}>超级会员价¥189.1，可省¥</span>
                            <span className={styles.spmcEconomizePrice}>9.9</span>        
                          </span> 
                       </div>
                       <div className={styles.spmcPrivilegeMess}>
                       季卡仅售59元，开卡即送39元起免费试用商品
                       </div>
                       <span className={styles.open}>立即开通</span>
                   </div>
                   <div className={styles.content_name}>
                   全棉针织条纹大豆纤维夏被 可机洗
                   </div>
                   <div className={styles.content_desc}>
                   可裸睡针织棉，植物抗菌柔弹
                   </div>
                   <div className={styles.content_comment}>
                       <div className={styles.content_num}>99.9%</div>
                       <div className={styles.content_good}>好评率</div>
                   </div>
               </div>
               <div className={styles.bottom}>
                   <div className={styles.artificial}></div>
                   <div className={styles.buy}>立即购买</div>
                   <div className={styles.cart}>加入购物车</div>
               </div>
           </div>
        )
    }
}

export default Purchase;