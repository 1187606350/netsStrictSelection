
import Tabbar from './../components/Tabbar';
import styles from './index.css';



const BasicLayout = props => {
  return (
  <div className={styles.Basic}>
      <Tabbar />
      {props.children}
    </div>
  );
};
export default BasicLayout;
