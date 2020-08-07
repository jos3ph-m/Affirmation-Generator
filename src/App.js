import React, { Component } from "react";
import "./App.css";

import Headline from "./Components/Headline/Headline";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headline />
        <div>Information</div>
        <div>Affirmation</div>
        <button>Generate</button>
      </div>
    );
  }
}

export default App;
