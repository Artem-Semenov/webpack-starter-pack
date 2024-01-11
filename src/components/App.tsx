import { useState } from "react";
import classes from "./App.module.scss";

type Props = {};
export const App = (props: Props) => {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <div className={classes.value}>Counter: {count}</div>
      <button className={classes.button} onClick={() => setCount(count + 1)}>
        increase
      </button>
    </>
  );
};
