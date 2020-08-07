import React, { Component } from "react";

import Affirmation from "./Affirmation/Affirmation";
import Button from "./Button/Button";

class Affirmations extends Component {
  render() {
    return (
      <div>
        <Affirmation />
        <Button />
      </div>
    );
  }
}

export default Affirmations;
