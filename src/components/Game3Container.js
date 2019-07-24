import React, { Component } from 'react'
import Game1Container from './Game1Container';
import Game2CardItem from './Game2CardItem';

export default class Game3Container extends Component {
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
    const game1 = <Game1Container userHasAnswered={this.refreshGame} />
    const game2 = <Game2CardItem userHasAnswered={this.refreshGame} />
    const games = [game1, game2]
    
    return (
      <div>
        { games[this.state.selectedGamePosition] }
      </div>
    )
  }
}
