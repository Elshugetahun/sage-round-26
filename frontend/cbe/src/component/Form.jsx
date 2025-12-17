import { useState, useEffect, useRef } from "react";

export default function Form() {
  const [name, setName] = useState();
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <h1>Number of Rending: {count.current}</h1>
      <form>
        <label for="name">Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </form>
      <h1>Your Name is: {name}</h1>
    </>
  );
}
