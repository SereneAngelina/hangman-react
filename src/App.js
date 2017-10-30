import React, { Component } from 'react';
import Title from './components/Title';
import Game from './components/Game'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Title content="HANGMAN" />
         <Game />
      </div>
    );
  }
}

export default App;
