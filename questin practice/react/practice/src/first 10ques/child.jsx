import React from "react";

function Child({ onButtonClick }) {
  return (
    <div>
      <h1>Child</h1>
      <button onClick={onButtonClick}>Click me</button>
    </div>
  );
}
export default Child;
