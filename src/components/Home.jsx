import React from "react";
import Content from "./Content";

const Home = (props) => {
  return (
    <div>
      <Content name={props.name} obj={props.obj} />
      Home name = {props.name}{" "}
      {props.arry.map((i) => (
        <p key={i}>{i}</p>
      ))}
    </div>
  );
};

export default Home;
