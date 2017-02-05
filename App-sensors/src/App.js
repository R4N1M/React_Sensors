import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Barre from './Components/Barre';
import AfficheSensors from './Components/AfficheSensors';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Barre />
        </div>
        <div className="App-Body">
          <AfficheSensors/>
        </div>
      </div>
    );
  }
}

export default App;
