import { useState, useEffect, useRef } from "react";

export default function Add() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState(0);
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <h1>Number of Rending: {count.current}</h1>
      <h1>Addition</h1>
      <label>Enter Number: </label>
      <input
        type="number"
        onChange={(e) => {
          setNum1(e.target.value);
        }}
      />
      <br />
      <label>Enter Number: </label>
      <input
        type="number"
        onChange={(e) => {
          setNum2(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          setSum(Number(num1) - Number(num2));
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          setSum(0);
        }}
      >
        Reset
      </button>
      <h3>The Result is: {sum}</h3>
    </>
  );
}
