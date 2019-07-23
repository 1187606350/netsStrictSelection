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
  return <div>{props.children}</div>;
}

export default props => {
  if (props.location.pathname === '/mine') {
    return <SimpleLayout {...props} />;
  }
  return <BasicLayout {...props} />;
};




