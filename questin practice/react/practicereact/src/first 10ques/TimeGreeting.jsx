import React from "react";

function TimeGreeting() {
  const currenthour = new Date().getHours();
  let greeting = "";
  if (currenthour < 12) {
    greeting = "Good Morning";
  } else if (currenthour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  return (
    <>
      <h1>
        {greeting}
        {currenthour}{" "}
      </h1>
    </>
  );
}
export default TimeGreeting;
