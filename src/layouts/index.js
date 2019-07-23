import Tabbar from './../components/Tabbar';
import styles from './index.css';
const SimpleLayout = props => {
  return <div>{props.children}</div>;
};

export default function(props) {
  if (props.location.pathname === '/mine') {
    return <SimpleLayout {...props} />;
  }
  return (
    <div className={styles.Basic}>
      <Tabbar />
      {props.children}
    </div>
  );
}

// const BasicLayout = props => {
//   return (
//     <div className={styles.Basic}>
//       <Tabbar />
//       {props.children}
//     </div>
//   );
// };
// export default BasicLayout;
