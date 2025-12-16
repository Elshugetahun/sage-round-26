import { useState,useEffect } from "react";

function Count(props) {
 
  const [count2, setCount2] = useState(0);
 
  useEffect(()=>{
    console.log("Use Effect")
  },[])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1 style={{ backgroundColor: "red", color: "blue" }}>Count one: {props.count1}</h1>
      <h1 style={{ backgroundColor: "red", color: "blue" }}>Count Two: {count2}</h1>
      <button
        onClick={() => {
          props.setCount1(props.count1 + 1);
        }}
      >
        add Count one
      </button>
       
      <button
        onClick={() => {
          props.setCount1(props.count1 - 1);
        }}
      >
        subtruct Count One
      </button>
       <button
        onClick={() => {
          setCount2(count2 + 1);
        }}
      >
        add Count Two
      </button>
        <button
        onClick={() => {
          setCount2(count2 - 1);
        }}
      >
        subtruct Count Two
      </button>
      <button
        onClick={() => {
          props.setCount1(0);
          setCount2(0)
        }}
      >
        reset
      </button>
    </div>
  );
}
export default Count;
