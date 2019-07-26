import Tabbar from './../components/Tabbar';
import styles from './index.css';

function BasicLayout(props) {
  return (
    <div className={styles.Basic}>
      <Tabbar />
      {props.children}
    </div>
  );
}

// 单页布局
function SimpleLayout(props) {
  return <div style={{ height: '100%' }}>{props.children}</div>;
}

export default props => {
  if (props.location.pathname === '/mine') {
    return <SimpleLayout {...props} />;
  } else if (props.location.pathname === '/login') {
    return <SimpleLayout {...props} />;
  } else if (props.location.pathname === '/register') {
    return <SimpleLayout {...props} />;
  } else if (props.location.pathname === '/search') {
    return <SimpleLayout {...props} />;
  }  else if (props.location.pathname === '/purchase') {
    return <SimpleLayout {...props} />;
  } 
  return <BasicLayout {...props} />;
};
