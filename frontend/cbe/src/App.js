import If_else from "./component/If_else";
import Count from "./component/Count";
import List from "./component/List";
import Ternarey from "./component/Ternarey";
import And from "./component/And";
import styles from "./mystyle.module.css";
import Form from "./component/Form";
import { useState } from "react";

function App() {
  let x = 1;
   const [count1, setCount1] = useState(0);
  return (
    <div className="contener">
      <Count count1={count1} setCount1={setCount1}/>
      <If_else />
      <List count1={count1} setCount1={setCount1}/>
      <Ternarey />
      <And />
      <Form/>
      <h1 className={styles.bigblue}>Modules CSS style</h1>
    </div>
  );
}

export default App;
