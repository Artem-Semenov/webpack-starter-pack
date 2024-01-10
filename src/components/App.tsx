import { useState } from "react";
import "./App.scss";

type Props = {};
export const App = (props: Props) => {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <div>Counter: {count}</div>
      <button onClick={() => setCount(count + 1)}>increase</button>
    </>
  );
};
