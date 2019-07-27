import React from 'react';
import styles from './index.less';
import NavLink from 'umi/navlink';

class Search extends React.Component {
  state = {
    goods: [],
    goodsList: [] 
  };
  render() {
    return (
      <div className={styles.search}>
        <div className={styles.con}>
          <div className={styles.header}>
            <input
              type="text"
              placeholder="搜索商品"
              className={styles.serachInp}
              value={this.state.goods}
              onChange={this.modelGoods}
            />
            <div className={styles.close} style={{ display : this.state.goods.length === 0 ? "block" : "none" }}>
              取消
            </div>
            <div className={styles.searchGood} 
            style={{ display : this.state.goods.length === 0 ? "none" : "block" }}
            onClick={this.hadelGoods}
            >搜索</div>
          </div>

          <div className={styles.host} style={{ display : this.state.goods.length === 0 ? "block" : "none" }}>
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
            
            <ul className={styles.listval} style={{ display : this.state.goods.length === 0 ? "none" : "block" }}>
              {
                this.state.goodsList.map(item => {
                  return (
                    <li className={styles.itemval} key={item.goods_id} id="Li">{item.goods_name}</li>
                  )
                })
              }
            </ul>
        </div>
      </div>
    );
  }
  modelGoods = e => {
    console.log(e.target.value);
    this.setState({
      goods: e.target.value,
    });
  };
  hadelGoods = () => {
    this.getGoodList();
  }  
 
  

  getGoodList() {
    let searchGoods = this.state.goods;
    fetch(
      `http://www.hangowa.com/mo_bile/index.php?act=goods&op=goods_list&term=${searchGoods}&page=10&curpage=1&keyword=${searchGoods}`,
    )
      .then(response => response.json())
      .then(res => {
        console.log(res)
        if (res.code == 200) {
          this.setState({
            goodsList: res.datas.goods_list
          })
        }
        
      });
  }
}
export default Search;
