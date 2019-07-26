import React from 'react'
import { Link } from 'react-router-dom'
//import Game1QuestionImageComponent from './Game1QuestionImageComponent'
import Question from './Game1Question'
import request from 'superagent'
import Spinner from 'react-spinner-material';
import { connect } from 'react-redux'
import { incrementCorrectAnswers, updateSuccessRate, incrementTotalAnswers, getRandomDog, updateImageUrl, updateAnswer, updateLoading, updateIsCorrect } from '../actions/game-1'

class Game1Container extends React.Component {

  componentDidMount = () => {
    this.getRandomDog()
  }

  getRandomDog = () => {
    request
      .get(`https://dog.ceo/api/breeds/image/random`)
      .then(response => {
        this.props.updateImageUrl(response.body.message)
        this.props.updateAnswer(response.body.message.split('/')[4])
        this.props.updateLoading()
      })
      .catch(error => {
        console.error(error)
      })
  }

  onSubmitQuestion = (result) => {
    this.props.incrementTotalAnswers()

    if (this.props.fromGame3) {
      this.props.userHasAnswered(true)
    }

    this.props.updateIsCorrect(result)

    if (result === false) {
      setTimeout(() => {
        this.getRandomDog()
        this.props.updateIsCorrect(true)
      }, 2000);
    } else {
      this.getRandomDog()
      this.props.incrementCorrectAnswers()
    }
    this.props.updateSuccessRate()
  }

  render() {
    if (this.props.loading) return <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} />
    return (
      <div>
        <Link to={`/`} className="title-game-1">Show me what you got!</Link>
        <img src={this.props.imageUrl} alt='' />
        <Question answer={this.props.answer} handleSubmit={this.onSubmitQuestion} />
        <h6 className="error">{this.props.isCorrect ? '' : `Wrong! The correct answer is ${this.props.answer}`}</h6>
        <p>Success Rate: {this.props.successRate}%</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  imageUrl: state.gameOne.imageUrl,
  answer: state.gameOne.answer,
  loading: state.gameOne.loading,
  correctAnswers: state.gameOne.correctAnswers,
  totalAnswers: state.gameOne.totalAnswers,
  isCorrect: state.gameOne.isCorrect,
  successRate: state.gameOne.successRate
})

const mapDispatchToProps = {
  incrementCorrectAnswers,
  incrementTotalAnswers,
  getRandomDog,
  updateImageUrl,
  updateAnswer,
  updateLoading,
  updateIsCorrect,
  updateSuccessRate
}
export default connect(mapStateToProps, mapDispatchToProps)(Game1Container)