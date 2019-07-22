/**
 * title: 分类
 */
import { connect } from 'dva';
import React from 'react';
import styles from './index.less';
import { Tabs, WhiteSpace } from 'antd-mobile';
import NavLink from 'umi/navlink';
class Type extends React.Component {
  render() {
    const tabs = this.props.cateList;
    return (
      <div className={styles.p_cateList}>
        <div className={styles.hdWraper}>
          <div className={styles.m_hd}>
            <div className={styles.m_itemCateListHd}>
              <div className={styles.m_topSearchIpt}>
                <i className="iconfont iconiconset0157" />
                <span className={styles.placeholder}>搜索商品, 共21805款好物</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.m_cateContainer}>
          <div className={styles.m_cateContainer_list}>
            <WhiteSpace />
            <Tabs
              tabs={tabs}
              // tabDirection="vertical"
              tabBarPosition="left"
              onTabClick={() => {
                this.props.getCateList();
                console.log(this.props.cateList);
              }}
              tabBarTextStyle={{
                lineHeight: '50px',
                width: '162px',
                fontSize: '28px',
                paddingTop: '20px',
                paddingBottom: '20px',
              }}
              renderTabBar={props => (
                <Tabs.DefaultTabBar
                  renderTab={tab => (
                    <NavLink to={`type?categoryId=${tab.goodsTypeId}`}>{tab.activityName}</NavLink>
                  )}
                  {...props}
                  page={12}
                />
              )}
            >
              {tabs.map(item => {
                return (
                  <div key={item.secondLevelCategories.goodsTypeId} className={styles.rightContent}>
                    <img
                      style={{ width: '528px', height: '192px' }}
                      src={item.activityHtmlUrl ? item.activityHtmlUrl : ''}
                      alt=""
                    />
                    {item.secondLevelCategories.goodsTypeList
                      ? item.secondLevelCategories.goodsTypeList.map(item => {
                          return (
                            <div key={item.goodsTypeId} className={styles.rightContent_box}>
                              <img src={item.goodsTypeImgUrl} alt="" />
                              <span>{item.goodsTypeName}</span>
                            </div>
                          );
                        })
                      : ''}
                  </div>
                );
              })}
            </Tabs>
            <WhiteSpace />
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.getCateList();
  }
}
export default connect(
  state => {
    return {
      cateList: state.type.tabs,
    };
  },
  dispatch => {
    return {
      getCateList: () => {
        dispatch({ type: 'type/getCateList' });
      },
    };
  },
)(Type);
