import React from 'react';
import styles from './index.less';
import NavLink from 'umi/navlink';

class Search extends React.Component {
  state = {
    goods: "豆豆鞋"
  }
  render() {
    return (
      <div className={styles.search}>
        <div className={styles.con}>
          <div className={styles.header}>
            <input type="text" placeholder="搜索商品" className={styles.serachInp} />
            <NavLink to="/" className={styles.close}>
              取消
            </NavLink>
          </div>

          <div className={styles.host}>
            <div className={styles.title}>热门搜索</div>
            <div className={styles.list}>
              <NavLink to="/type" className={styles.item}>
                夏凉被82折起
              </NavLink>
              <NavLink to="/type" className={styles.item}>
                电动牙刷69元起
              </NavLink>
              <NavLink to="/type" className={styles.item}>
                9.9元超值专区
              </NavLink>
              <NavLink to="/type" className={styles.item}>
                拖鞋
              </NavLink>
              <NavLink to="/type" className={styles.item}>
                冬枣 限时59元
              </NavLink>
              <NavLink to="/type" className={styles.item}>
                风扇
              </NavLink>
              <NavLink to="/type" className={styles.item}>
                行李箱
              </NavLink>
              <NavLink to="/type" className={styles.item}>
                NavLink
              </NavLink>
              <NavLink to="/type" className={styles.item}>
                冬枣 限时59元
              </NavLink>
              <NavLink to="/type" className={styles.item}>
                风扇
              </NavLink>
              <NavLink to="/type" className={styles.item}>
                行李箱
              </NavLink>
            </div>
          </div>
          <ul className={styles.listval}>
            <li className={styles.itemval}>111</li>
            <li className={styles.itemval}>222</li>
            <li className={styles.itemval}>333</li>
            <li className={styles.itemval}>444</li>
            <li className={styles.itemval}>555</li>
            <li className={styles.itemval}>666</li>
            <li className={styles.itemval}>777</li>
            <li className={styles.itemval}>888</li>
            <li className={styles.itemval}>999</li>
          </ul>
        </div>
      </div>


    );
    


  }
}
export default Search;
