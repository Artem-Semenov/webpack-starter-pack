import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import applePng from "@/assets/download.png";
import appleJpg from "@/assets/download.jpg";
import AppleSvg from "@/assets/download.svg";

type Props = {};
const TODOFunc = () => {
  throw "hola";
};
const TODOFunc2 = () => {
  TODOFunc();
};
export const App = (props: Props) => {
  const [count, setCount] = useState<number>(0);

  /* TODOFunc(3);

  if (__PLATFORM === "mobile") {
   /// return <div>ismobileplatform</div>;
  }

  if (__ENV === "development") {
    ///
  }
  if (__ENV === "production") {
   /// return <div>isproduction</div>;
  } */
  const increment = () => {
    setCount(count + 1);
    TODOFunc2();
  };
  return (
    <>
      platform = {__PLATFORM}
      <div data-testid={"App.Data-testid"}>
        <img width={100} height={100} src={applePng} alt="2" />
        <img width={100} height={100} src={appleJpg} alt="" />
        <AppleSvg width={200} height={200} style={{ color: "green" }} />
      </div>
      <div className={classes.linksWrapper} data-testid={"App.Platform.test"}>
        <Link to={"/"}>Main</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/shop"}>Shop</Link>
      </div>
      <div className={classes.value}>Counter: {count}</div>
      <button className={classes.button} onClick={() => increment()}>
        increase
      </button>
      <Outlet />
    </>
  );
};
