import { useState } from "react";
import If_else from "./component/If_else";
import Count from "./component/Count";


function App() {
  let x=1;
  return (
    <div style={{"display":"flex","flex-direction":"column","justify-content":"center","align-Items":"center"}} >
   <Count/>
<h1>X is 10</h1>
     <If_else/>
   {x==10 && <h1>And True</h1>}
   {x==10?<h1>Ternarey True</h1>:<h1>Ternary Fales</h1>}
    </div>
  );
}

export default App;
