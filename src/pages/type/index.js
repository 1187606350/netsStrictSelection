/**
 * title: 分类
 */

import React from 'react';
import styles from './index.less';
import { Tabs, WhiteSpace } from 'antd-mobile';
import NavLink from 'umi/navlink';
class Type extends React.Component {
  renderContent = tab => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#fff',
      }}
    >
      <p>Content of {tab.title}</p>
    </div>
  );
  render() {
    const tabs = [
      { title: '1st Tab', key: 't1' },
      { title: '2nd Tab', key: 't2' },
      { title: '3rd Tab', key: 't3' },
      { title: '4th Tab', key: 't4' },
      { title: '5th Tab', key: 't5' },
      { title: '6th Tab', key: 't6' },
      { title: '7th Tab', key: 't7' },
      { title: '8th Tab', key: 't8' },
      { title: '9th Tab', key: 't9' },
      { title: '10th Tab', key: 't10' },
      { title: '11th Tab', key: 't11' },
      { title: '12th Tab', key: 't12' },
    ];
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
              initalPage={'t2'}
              // tabDirection="vertical"
              tabBarPosition="left"
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
                    <NavLink to={`type?categoryId=${tab.key}`}>{tab.title}</NavLink>
                  )}
                  {...props}
                  page={12}
                />
              )}
            >
              {tabs.map(item => {
                return (
                  <div
                    key={item.key}
                    style={{
                      display: 'flex',

                      backgroundColor: '#fff',
                    }}
                  >
                    Content of {item.title}
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
}
export default Type;
