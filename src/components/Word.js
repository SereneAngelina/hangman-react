import React, { PureComponent } from 'react'
import Editor from 'react-medium-editor'
import toMarkdown from 'to-markdown'
import { connect } from 'react-redux'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import {makeGuess} from '../actions/makeGuess'

class Word extends PureComponent {
constructor(props) {
    super(props)
      this.onGuess = this.onGuess.bind(this)
  }


onGuess(e) {
       e.preventDefault()
       let guess = this.input.value.toLowerCase()
       this.props.dispatch(makeGuess(guess))
       this.input.value = ''
}



render() {
    return (
      <form onSubmit={this.onGuess}>
          <label htmlFor="user guess">Enter your guess </label>
          <p>
          <input type="text" ref={input => this.input = input}
              maxLength="1" id="user-guess" required />
              </p>
          <input type="submit" id="guessButton"
              className="button" name="submit" value="Guess"/>
      </form>
    )
};
};

export default connect()(Word)
