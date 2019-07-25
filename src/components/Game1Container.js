import React from 'react'
import {Link} from 'react-router-dom'
//import Game1QuestionImageComponent from './Game1QuestionImageComponent'
import Question from './Game1Question'
import request from 'superagent'
import Spinner from 'react-spinner-material';
import {connect} from 'react-redux'
import {incrementCorrectAnswer, getRandomDog, updateImageUrl} from '../actions/game-1'

class Game1Container extends React.Component {
  
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
       this.props.updateImageUrl (response.body.message)
      })
      .catch(error => {
        console.error(error)
      })
  } 

  onSubmitQuestion = (result) => {

    if (this.props.fromGame3) {
      this.props.userHasAnswered(true)
    }
    this.setState({
      isCorrect: result
    })
    if (result === false) {
      setTimeout(() => {
        this.getRandomDog()
      }, 2000);
    } else {
      this.getRandomDog()
    }
  }

  render() {
    if (this.props.loading) return <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} />
    return (
      <div>
        <Link to={`/`}>Show me what you got!</Link>
        <img src={this.props.imageUrl} alt=''/>
        <Question answer={this.props.answer} handleSubmit={this.onSubmitQuestion}/>
        <h6 className="error">{ this.props.isCorrect ? '' : `Wrong! The correct answer is ${this.props.answer}`}</h6>
      </div>
    )
  }
}
const mapStateToProps = state =>({
  imageUrl: state.gameOne.imageUrl,
  answer: state.answer,
  loading: state.loading,
  correctAnswer: state.correctAnswer,
  totalAnswer: state.totalAnswer
})

const mapDispatchToProps ={
  incrementCorrectAnswer,
  getRandomDog,
  updateImageUrl
}
export default connect(mapStateToProps,mapDispatchToProps)(Game1Container)