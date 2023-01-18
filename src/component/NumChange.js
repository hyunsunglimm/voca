import { useState } from "react";

export default function NumChange(props) {
  const [age, setAge] = useState(props.age);

  return (
    <>
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        UP
      </button>
      <button
        onClick={() => {
          setAge(age - 1);
        }}
      >
        DOWN
      </button>
    </>
  );
}
