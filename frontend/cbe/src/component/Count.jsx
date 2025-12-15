import { useState } from "react";



function Count() {
    const [count,setCount]=useState(0);

    
  return (
    <div style={{"display":"flex","flex-direction":"column","justify-content":"center","align-Items":"center"}} >
     <h1>{count}</h1>
     <button onClick={()=>{
        setCount(count+1)
     }}>add</button> 
     <button onClick={()=>{
        setCount(count-1)
     }}>subtruct</button>
      <button onClick={()=>{
        setCount(0)
     }}>reset</button>
<h1>X is 10</h1>
    

    </div>
  );
}
export default Count;