import React, { useState } from "react";

function ToggleContent() {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}Toggle</button>
      {isVisible && <h1>Toggle Content</h1>}
    </div>
  );
}
export default ToggleContent;
