import React, { Component } from "react";

// import Affirmation from "./Affirmation/Affirmation";
// import Button from "./Button/Button";

class Affirmations extends Component {
  state = {
    message: "Click generate below",
  };

  shuffle = () => {
    let affirmations = [
      "You are a lovable, wonderful friend.",
      "You are super talented! Look at you go!",
      "Someone in your life looks up to you, you're amazing!",
      "You deserve nothing but the best!",
      "You're doing a great job.",
      "You're here because you matter.",
      "You are beautiful inside and out.",
      "Here's a reminder: love yourself first.",
    ];

    let index = Math.floor(Math.random() * Math.floor(affirmations.length));
    let newMessage = affirmations[index];
    this.setState({ message: newMessage });
  };

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={this.shuffle}>Generate</button>
      </div>
    );
  }
}

export default Affirmations;
