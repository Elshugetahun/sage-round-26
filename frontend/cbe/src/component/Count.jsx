import { useState } from "react";



function Count() {
    const [count,setCount]=useState(0);

    
  return (
    <div>
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

    

    </div>
  );
}
export default Count;