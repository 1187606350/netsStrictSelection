import React from 'react';
import styles from './index.less';

class Search extends React.Component {
  render() {
    return (
      <div className={styles.search}>
        <div className={styles.con}>
          <div className={styles.header}>
            <input type="text" placeholder="搜索商品" className={styles.serachInp} />
            <p>取消</p>
          </div>
          <div className={styles.title}>热门搜索</div>
          <div className={styles.list}>
            <a href="#" className={styles.item}>
              夏凉被82折起
            </a>
            <a href="#" className={styles.item}>
              电动牙刷69元起
            </a>
            <a href="#" className={styles.item}>
              9.9元超值专区
            </a>
            <a href="#" className={styles.item}>
              拖鞋
            </a>
            <a href="#" className={styles.item}>
              冬枣 限时59元
            </a>
            <a href="#" className={styles.item}>
              风扇
            </a>
            <a href="#" className={styles.item}>
              行李箱
            </a>
            <a href="#" className={styles.item}>
              拖鞋
            </a>
            <a href="#" className={styles.item}>
              冬枣 限时59元
            </a>
            <a href="#" className={styles.item}>
              风扇
            </a>
            <a href="#" className={styles.item}>
              行李箱
            </a>
          </div>
          </div> 
        </div>
    );
  }
}
export default Search;
