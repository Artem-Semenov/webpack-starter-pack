import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import applePng from "@/assets/download.png";
import appleJpg from "@/assets/download.jpg";
import AppleSvg from "@/assets/download.svg";

type Props = {};
const TODOFunc = (a: number) => {
  console.log("TODO FUNCTION RUN");
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

  return (
    <>
      platform = {__PLATFORM}
      <div>
        <img width={100} height={100} src={applePng} alt="2" />
        <img width={100} height={100} src={appleJpg} alt="" />
        <AppleSvg width={200} height={200} style={{ color: "green" }} />
      </div>
      <div className={classes.linksWrapper}>
        <Link to={"/"}>Main</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/shop"}>Shop</Link>
      </div>
      <div className={classes.value}>Counter: {count}</div>
      <button className={classes.button} onClick={() => setCount(count + 1)}>
        increase
      </button>
      <Outlet />
    </>
  );
};
