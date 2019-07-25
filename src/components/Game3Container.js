import React, { Component } from 'react'
import Game1Container from './Game1Container';
import Game2CardItem from './Game2CardItem';
import Game2Container from './Game2Container';

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
    const game1 = <Game1Container fromGame3={true} userHasAnswered={this.refreshGame} />
    const game2 = <Game2Container userHasAnswered={this.refreshGame} />
    const games = [game1, game2]
    
    return (
      <div>
        { games[this.state.selectedGamePosition] }
      </div>
    )
  }
}
