import React from "react";
import Generics from "../components/generics";

export interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>Welcome to Home page</h2>
      <Generics />
    </div>
  );
};

export default Home;
