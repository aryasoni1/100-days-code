import React, { useState } from "react";
import Child from "./child";
function Parent() {
  const [message, setMessage] = useState("No action yet");
  const handleChildClick = () => {
    setMessage("Message from child");
  };
  return (
    <div>
      <h1>parent: {message}</h1>
      <Child onButtonClick={handleChildClick} />
    </div>
  );
}
export default Parent;
