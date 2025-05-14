import React, { useState, useEffect } from "react";

function DelayedUpdate() {
  const [message, setMessage] = useState("waiting");
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("updated after 2 sec");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return <p>{message}</p>;
}
export default DelayedUpdate;
