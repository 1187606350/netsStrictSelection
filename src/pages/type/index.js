/**
 * title: 分类
 */
import { connect } from 'dva';
import React from 'react';
import styles from './index.less';
import NavLink from 'umi/navlink';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
class Type extends React.Component {
  render() {
    let tabs = this.props.cateList;
    return (
      <div className={styles.p_cateList}>
        <div className={styles.hdWraper}>
          <div className={styles.m_hd}>
            <div className={styles.m_itemCateListHd}>
              <div
                className={styles.m_topSearchIpt}
                onClick={() => {
                  this.props.history.push('/search');
                }}
              >
                <i className="iconfont iconiconset0157" />
                <span className={styles.placeholder}>搜索商品, 共21805款好物</span>
              </div>
            </div>
          </div>
        </div>
        <Tabs>
          <div className={styles.m_cateContainer}>
            <div className={styles.m_cateContainer_list}>
              <TabList>
                {tabs.map(item => {
                  return (
                    <Tab key={item.secondLevelCategories.goodsTypeId}>
                      <NavLink to={`type?categoryId=${item.secondLevelCategories.goodsTypeId}`}>
                        {item.activityName}
                      </NavLink>
                    </Tab>
                  );
                })}
              </TabList>
            </div>
            <div className={styles.m_cateContainer_wrap}>
              {tabs.map(item => {
                return (
                  <TabPanel>
                    <div key={item.secondLevelCategories.goodsTypeId} className={this.rightContent}>
                      <img
                        style={{ width: '528px', height: '192px' }}
                        src={item.activityHtmlUrl ? item.activityHtmlUrl : ''}
                        alt=""
                      />
                      {item.secondLevelCategories.goodsTypeList
                        ? item.secondLevelCategories.goodsTypeList.map(item => {
                            return (
                              <div key={item.goodsTypeId} className={styles.rightContent_box}>
                                <img src={item.goodsTypeImgUrl} alt="图片无法加载" />
                                <span>{item.goodsTypeName}</span>
                              </div>
                            );
                          })
                        : ''}
                    </div>
                  </TabPanel>
                );
              })}
            </div>
          </div>
        </Tabs>
      </div>
    );
  }
  componentWillMount() {
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
