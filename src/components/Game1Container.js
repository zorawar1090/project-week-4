import React from 'react'
import {Link} from 'react-router-dom'
import Game1QuestionImageComponent from './Game1QuestionImageComponent'
import Question from './Question'

export default class Game1Container extends React.Component{
  render(){
    return(
      <div>
        <Link to={`/dog-breeds`}>List all the dog breeds</Link>
        <Question/>
        <Game1QuestionImageComponent/>
      </div>
    )
  }
}
