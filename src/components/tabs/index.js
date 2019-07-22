import { Tabs, WhiteSpace } from 'antd-mobile';
import React from 'react';

const tabs2 = [
  { title: 'First Tab', sub: '1' },
  { title: 'Second Tab', sub: '2' },
  { title: 'Third Tab', sub: '3' },
];

const TabExample = () => (
  <div>
    <Tabs
      tabs={tabs2}
      initialPage={1}
      onChange={(tab, index) => {
        console.log('onChange', index, tab);
      }}
      onTabClick={(tab, index) => {
        console.log('onTabClick', index, tab);
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '200px',
          backgroundColor: '#fff',
        }}
      >
        Content of first tab
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '200px',
          backgroundColor: '#fff',
        }}
      >
        Content of second tab
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '200px',
          backgroundColor: '#fff',
        }}
      >
        Content of third tab
      </div>
    </Tabs>
    <WhiteSpace />
  </div>
);

export default TabExample;
