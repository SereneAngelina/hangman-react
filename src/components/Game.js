import React from 'react';
import {connect} from 'react-redux';
import NewGameButton from './NewGameButton'
import GameDisplay from './GameDisplay'
import './Game.css'


export class Game extends React.Component {
  renderPage() {
      return this.props.startGame === true ? <GameDisplay /> : <NewGameButton className="new-game-button"/>
    };

  render() {
       let gameElement = this.renderPage()
       return (
            <div className = "game-display-container">
                <div className="game-element">{gameElement}</div>
            </div>
        )
    };
};

const mapStateToProps = state => ({
  startGame: state.startGame,
})

export default connect(mapStateToProps)(Game)
