import React, { Component } from 'react'
import DogListContainer from './DogsListContainer'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <DogListContainer />
        <Link to={`/game/1`}>
          <Button variant="outline-secondary" className="play-button">Play Game 1</Button>
        </Link>
        <Link to={`/game/2`}>
          <Button variant="outline-secondary" className="play-button">Play Game 2</Button>
        </Link>
        <Link to={`/game/3`}>
          <Button variant="outline-secondary" className="play-button">Play Game 3</Button>
        </Link>
      </div>
    )
  }
}

export default HomeContainer