import React from 'react';
import { connect } from 'react-redux'

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

import store from '../store'

import { restartGame, makeGuess, generateAuralUpdate } from '../actions'

export class Game extends React.Component {
  restartGame() {
    store.dispatch(restartGame())
  }

  makeGuess(guess) {
    store.dispatch(makeGuess(guess))
  }

  generateAuralUpdate() {
    store.dispatch(generateAuralUpdate())
  }

  render() {
    return (
      <div>
        <Header />
        <main role="main">
          <GuessSection />
          <StatusSection/>
          <InfoSection />
        </main>
      </div>
    );
  }
}

Game.defaultProps = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
}

export const mapStateToProps = state => ({
    guesses: state.guesses,
    feedback: state.feedback,
    auralStatus: state.auralStatus,
    correctAnswer: state.correctAnswer
})

export default connect(mapStateToProps)(Game)