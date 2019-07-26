import React, { Component } from 'react'
import request from 'superagent'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap';
import '../styles/Game1Question.css'
import Hotkeys from 'react-hot-keys'

class Question extends Component {
  state = {
    selection: [],
    allAvailableDog: [],
    userAnswer: null,
    hasAnswer: null
  }

  componentDidMount() {
    this.getAllDogsList()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.answer !== this.props.answer) {
      this.generateQuestionChoices()
    }
  }

  getAllDogsList = () => {
    request
      .get(`https://dog.ceo/api/breeds/list/all`)
      .then(response => {
        const dogs = response.body.message
        const allDogs = []
        for (let key in dogs) {
          if (dogs[key].length > 0) {
            for (const breed of dogs[key]) {
              allDogs.push(`${key}-${breed}`)
            }
          } else {
            allDogs.push(key)
          }
        }
        this.setState({
          allAvailableDog: allDogs
        })
        this.generateQuestionChoices()
      })
      .catch(error => {
        console.error(error)
      })
  }

  generateQuestionChoices = () => {
    const allDogClean = this.state.allAvailableDog.filter(dog => dog !== this.props.answer)
    const shuffledDog = allDogClean.sort(() => 0.5 - Math.random())
    let options = shuffledDog.slice(0, 2);
    options.push(this.props.answer)
    options = options.sort(() => 0.5 - Math.random())
    this.setState({
      selection: options,
      hasAnswer: null,
      userAnswer: null
    })
  }

  handleSubmitForm = (event) => {
    event.preventDefault()
    if (this.state.hasAnswer === true) {
      const isCorrect = this.state.userAnswer === this.props.answer ? true : false
      this.props.dispatch({
        type: 'SET_GAME1_RESULTS',
        payload: isCorrect
      })
      this.props.handleSubmit(isCorrect)
    } else {
      this.setState({
        hasAnswer: false,
      })
    }
  }

  handleButtonChange(event) {
    this.setState({
      hasAnswer: true,
      userAnswer: event.target.value,
    })
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      console.log('enter press here! ')
    }
  }
  
  onKeyDown = (keyName, e, handle) => {
    console.log("Enter is pressed")
    this.handleSubmitForm(e)
  }
  // handleKeyPress = (event) => {
  //   console.log(event.key)
  //   if (event.key === 'Enter') {
  //     console.log('enter press here! ')
  //   }
  //   console.log("c")
  // }

  render() {
    const radioButtons = this.state.selection.map(option => <div
      key={option}
      onChange={event => this.handleButtonChange(event)}>
      <input
        type="radio"
        name="dog"
        value={option}
      />
      &nbsp;&nbsp;
        <label>{option}</label>
    </div>
    )
    let formValidation = null
    if (this.state.hasAnswer === false) {
      formValidation = <h6 className="error">Please select an answer.</h6>
    }
    return (
      <Hotkeys keyName="enter" 
        onKeyDown={this.onKeyDown}>
        <div>
          <h2>What is the breed of this dog?</h2>
          <form ref="form" onSubmit={this.handleSubmitForm}>
            {radioButtons}
            <Button className="btn-secondary" type="submit">Submit </Button>
          </form>
          {formValidation}
        </div>
      </Hotkeys>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    game1Results: state.gameOne
  }
}

export default connect(mapStateToProps)(Question)
