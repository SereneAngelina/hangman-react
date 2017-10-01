import React, { Component } from 'react';
import Title from './components/Title';
import GameDisplay from './components/GameDisplay'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Title content="Hangman" />
         <GameDisplay />
      </div>
    );
  }
}

export default App;
