import React, { Component } from "react";

// import Affirmation from "./Affirmation/Affirmation";
// import Button from "./Button/Button";

const affirmations = () => {
  const affirmationsArray = [
    "You are a lovable, wonderful friend.",
    "You are super talented! Look at you go!",
    "Someone in your life looks up to you, you're amazing!",
    "You deserve nothing but the best!",
    "You're doing a great job.",
    "You're here because you matter.",
    "You are beautiful inside and out.",
    "Here's a reminder: love yourself first.",
  ];

  let codex = "Click the button below to change the affirmation given";

  const shuffle = () => {
    let index = Math.floor(
      Math.random() * Math.floor(affirmationsArray.length)
    );

    return (codex = affirmationsArray[index]);
  };

  return (
    <div>
      <p></p>
      <button onClick={shuffle}>Generate</button>
    </div>
  );
};

export default affirmations;
