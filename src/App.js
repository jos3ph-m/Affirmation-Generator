import React, { Component } from "react";
import "./App.css";

import Headline from "./Components/Headline/Headline";
import Info from "./Components/Info/Info";
import Affirmations from "./Components/Affirmations/Affirmations";
import Bottom from "./Components/Bottom/Bottom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headline />
        <Info />
        <Affirmations />
        <Bottom />
      </div>
    );
  }
}

export default App;
