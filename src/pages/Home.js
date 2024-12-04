import React from "react";
import LogoGenerator from "../components/LogoGenerator";
const Home = props => {
  return (
    <>
      <LogoGenerator viewDirection={"row"} store={props.store} />
    </>
  );
};

export default Home;
