import React, { Component } from "react";
import "./App.css";

import Headline from "./Components/Headline/Headline";
import Info from "./Components/Info/Info";
import Affirmations from "./Components/Affirmations/Affirmations";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headline />
        <Info />
        <Affirmations />
      </div>
    );
  }
}

export default App;
