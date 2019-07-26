import React, { Component } from 'react'
import Game1Container from './Game1Container';
import Game2Container from './Game2Container';
import {connect} from 'react-redux'

class Game3Container extends Component {
  state = { 
    selectedGamePosition : 0
  }

  componentDidMount() {
    this.randomGame()
  }

  randomGame = () => {
    const randomPosition = Math.floor(Math.random() * Math.floor(2));
    this.setState({
      selectedGamePosition: randomPosition,
    })
  }

  refreshGame = (value) => {
    if (value) {
      this.randomGame()
    }
  }

  render() {
    console.log('this.props test:', this.props)
    const game1 = <Game1Container fromGame3={true} userHasAnswered={this.refreshGame} />
    const game2 = <Game2Container fromGame3={true} userHasAnswered={this.refreshGame} />
    const games = [game1, game2]

    const correctAnswers = this.props.correctAnswersGame1 + this.props.correctAnswersGame2
    console.log('correctAnswers test:', correctAnswers)
    const totalAnswers = this.props.TotalAnswersGame1 + this.props.TotalAnswersGame2
    console.log('totalAnswers test:', totalAnswers)

    const percentage = totalAnswers === 0 ? 0 : Math.floor((correctAnswers/totalAnswers) * 100)

    return (
      <div>
        { games[this.state.selectedGamePosition] }
        <p>Success Rate: {percentage}%</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  correctAnswersGame1: state.gameOne.correctAnswers,
  TotalAnswersGame1: state.gameOne.totalAnswers,
  correctAnswersGame2: state.game2.correctAnswers,
  TotalAnswersGame2: state.game2.totalAnswers
})

export default connect(mapStateToProps)(Game3Container)
