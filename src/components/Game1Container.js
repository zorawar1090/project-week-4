import React from 'react'
import {Link} from 'react-router-dom'
import Game1QuestionImageComponent from './Game1QuestionImageComponent'
import Question from './Question'
import request from 'superagent'
import Spinner from 'react-spinner-material';

export default class Game1Container extends React.Component {
  state = {
    imageUrl: null,
    answer: null,
    loading: true,
  }
  componentDidMount() {
    this.getRandomDog()
  }

  getRandomDog = () => {
    request
      .get(`https://dog.ceo/api/breeds/image/random`)
      .then(response => {
        this.setState({
          imageUrl: response.body.message,
          answer: response.body.message.split('/')[4],
          loading: false
        })
        console.log(response.body.message)
      })
      .catch(error => {
        console.error(error)
      })
  } 

  render() {
    if (this.state.loading) return <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} />
    return (
      <div>
        <Link to={`/dog-breeds`}>List all the dog breeds</Link>
        <Question answer={this.state.answer}/>
        <Game1QuestionImageComponent/>
      </div>
    )
  }
}
