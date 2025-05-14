import React, { useState } from "react";

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <p>Logged in</p> : <p>Please log in</p>}
      <button onClick={() => setIsLoggedIn((prev) => !prev)}>
        {isLoggedIn ? "login" : "logout"}
      </button>
    </div>
  );
}
export default LoginStatus;
