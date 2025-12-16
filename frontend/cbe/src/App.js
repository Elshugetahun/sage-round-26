import If_else from "./component/If_else";
import Count from "./component/Count";
import List from "./component/List";
import Ternarey from "./component/Ternarey";
import And from "./component/And";
import styles from "./mystyle.module.css";

function App() {
  let x = 1;
  return (
    <div className="contener">
      <Count />
      <If_else />
      <List />
      <Ternarey />
      <And />
      <h1 className={styles.bigblue}>Modules CSS style</h1>
    </div>
  );
}

export default App;
