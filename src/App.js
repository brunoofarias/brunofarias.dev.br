import React, { Component } from 'react'
import 'uikit/dist/css/uikit.css'
import Navbar from './components/navbar'
import Presentation from './components/presentation'
import Skills from './components/skills'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar/>
        </header>
        <session style={{ height: 'calc(100vh - 10px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
          <Presentation />
        </session>
        <session style={{ height: 'calc(100vh - 150px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
          <Skills />
        </session>
      </div>
    )
  }
}

export default App
