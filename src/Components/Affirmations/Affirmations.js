import React, { Component } from "react";

// import Affirmation from "./Affirmation/Affirmation";
// import Button from "./Button/Button";

class Affirmations extends Component {
  state = {
    message: "Click generate below",
  };

  shuffle = () => {
    let affirmations = [
      "You are loving and loved.",
      "You are open and receptive to all of the wealth life offers you.",
      "There are others who are inspired by you.",
      "You attract lucrative opportunities.",
      "You give out love and it is returned to you multiplied.",
      "Your possibilities are endless.",
      "You are beautiful inside and out.",
      "Good things are waiting to happen to you.",
      "You can manifest perfect health by making smart choices.",
      "You will never give up on your dreams.",
      "Every day you are getting stronger",
      "You are much smarter and more capable than you know.",
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
