
import styles from './index.less';
import { Tabs } from 'antd-mobile';
import React from 'react';

const tabs2 = [
  { title: '推荐', sub: '1' },
  { title: '居家生活', sub: '2' },
  { title: '服饰鞋包', sub: '3' },
  { title: '美食酒水', sub: '4' },
  { title: '个人清洁', sub: '5' },
  { title: '母婴亲子', sub: '6' },
  { title: '运动旅行', sub: '7' },
  { title: '数码家电', sub: '8' },
  { title: '全球特色', sub: '9' },
];
const TabExample = () => (
  <div>
    <Tabs
      tabBarActiveTextColor="red"
      tabBarInactiveTextColor="black"
      tabs={tabs2}
      tabBarTextStyle={{ 
        fontSize: '28px',
        height: '60px'
      }}
      initialPage={0}
      className={styles.bigTab}
      onChange={(tab, index) => {
        console.log('onChange', index, tab);
      }}
      onTabClick={(tab, index) => {
        console.log('onTabClick', index, tab);
      }}
    />
  </div>
);

export default TabExample;
