import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";

type Props = {};
export const App = (props: Props) => {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <Link to={"/about"}>About</Link>
      <Link to={"/shop"}>Shop</Link>
      <div className={classes.value}>Counter: {count}</div>
      <button className={classes.button} onClick={() => setCount(count + 1)}>
        increase
      </button>
      <Outlet />
    </>
  );
};
