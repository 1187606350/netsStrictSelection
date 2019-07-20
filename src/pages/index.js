/**
 * title: 首页
 */
import React from "react"
import styles from "./index.less"
import TabExample from "../components/tabs"

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
                <div className={styles.tabs}>
                    <TabExample/>
                </div>
            </div>
        )
    }
}
export default Home;