import React, { Component } from 'react';
import 'uikit/dist/css/uikit.css';
import Navbar from './components/navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar/>
        </header>
        <session>
          <article className="building">
            <h2>Em construção</h2>
            <img src={'images/build.svg'}/>
          </article>
          
        </session>
      </div>
    );
  }
}

export default App;
