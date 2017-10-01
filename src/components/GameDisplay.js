import React from 'react'
import {connect} from 'react-redux';
import NewGameButton from './NewGameButton'
import Word from './Word'
import GuessDisplay from './GuessDisplay'
import WordDisplay from './WordDisplay'
import HangmanDisplay from './HangmanDisplay'
//import './GameWindow.css'

// simple names, display is implied by component -
export class GameDisplay extends React.Component {

    renderContent() {
        return this.props.showInput === false ? <NewGameButton /> : <Word />
    }

   render () {
        const { feedback } = this.props

        return (
            <div className="game-window-container">
                <GuessDisplay />
                <h3>{feedback}</h3>
                <HangmanDisplay />
                {this.renderContent()}
                <WordDisplay />
              </div>
        )
    };
};

const mapStateToProps = state => ({
    showInput: state.showInput,
    feedback: state.feedback
})

export default connect(mapStateToProps)(GameDisplay)
