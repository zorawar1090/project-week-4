import React, { Component } from 'react'
import Question from './Question'
import request from 'superagent'
import Spinner from 'react-spinner-material';

class Game1Container extends Component {
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
        {/* image here */}
        <Question answer={this.state.answer}/>
      </div>
    )
  }
}

export default Game1Container