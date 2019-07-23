import React, { Component } from 'react'
import DogListContainer from './DogsListContainer'
import { Link } from 'react-router-dom'

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <DogListContainer />
        <Link to={`/game/1`}>
          <button>Play Game 1</button>
        </Link>
        <Link to={`/game/2`}>
          <button>Play Game 2</button>
        </Link>
        <Link to={`/game/3`}>
          <button>Play Game 3</button>
        </Link>
      </div>
    )
  }
}

export default HomeContainer