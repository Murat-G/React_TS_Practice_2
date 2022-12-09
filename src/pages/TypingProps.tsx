import GreetProps from "../components/GreetProps";
import Welcome from "../components/Welcome";
import Introduce from "../components/Introduce";

import { useState } from "react";

const TypingProps = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const onHandleChange = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <button onClick={onHandleChange}>
        {" "}
        {isLoggedIn ? "Logout" : "Login"}{" "}
      </button>
      {isLoggedIn ? (
        <GreetProps name="Bill" lastName="Doe" age={29} isLoggedIn={true} />
      ) : (
        <Introduce>
          <Welcome>*This is welcome component. Please login</Welcome>
        </Introduce>
      )}
    </div>
  );
};

export default TypingProps;
