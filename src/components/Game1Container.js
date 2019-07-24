import React from 'react'
import {Link} from 'react-router-dom'
import Game1QuestionImageComponent from './Game1QuestionImageComponent'
import Question from './Game1Question'
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
    this.setState({
      isCorrect: true
    })
    request
      .get(`https://dog.ceo/api/breeds/image/random`)
      .then(response => {
        this.setState({
          imageUrl: response.body.message,
          answer: response.body.message.split('/')[4],
          loading: false
        })
      })
      .catch(error => {
        console.error(error)
      })
  } 

  onSubmitQuestion = (result) => {
    this.setState({
      isCorrect: result
    })
    if (result === false) {
      setTimeout(
        function() {
          this.getRandomDog()
        }
        .bind(this),
        2000
      )
    } else {
      this.getRandomDog()
    }
  }

  render() {
    if (this.state.loading) return <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} />
    return (
      <div>
        <Link to={`/`}>Home</Link>
        <Question answer={this.state.answer} handleSubmit={this.onSubmitQuestion}/>
        <Game1QuestionImageComponent imageUrl={this.state.imageUrl}/>
        <p className="error">{ this.state.isCorrect ? '' : `Wrong! The correct answer is ${this.state.answer}`}</p>
      </div>
    )
  }
}
