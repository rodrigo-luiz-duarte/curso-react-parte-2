import React, { Component } from 'react';
import Header from './componentes/Header';
import Timeline from './componentes/Timeline';
import {} from "./css/reset.css";
import {} from "./css/login.css";
import {} from "./css/timeline.css";

class App extends Component {
  render() {
    return (
      <div id="root">
        <div className="main">
          <Header/>
          <Timeline/>
        </div>
      </div>  
    );
  }
}

export default App;
