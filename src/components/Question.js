import React, { Component } from 'react'
import request from 'superagent'
// import PropTypes from 'prop-types'

class Question extends Component {
  state = {
    success: false,
    selection: [],
    allAvailableDog: [],
    value: [],
    userAnswer: null
  }
  
  componentDidMount() {
    this.getAllDogsList()
  }

  getAllDogsList = () => {
    request
      .get(`https://dog.ceo/api/breeds/list/all`)
      .then(response => {
        const dogs = response.body.message
        const allDogs = []
        for (let key in dogs) {
          if (dogs[key].length > 0) {
            for (const breed of dogs[key]){
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
    this.setState({ selection : options })
    console.log(this.state.selection)

  }
    // todo: add the answer to selection state 
    // shuffle the selection state

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({success: this.state.userAnswer === this.props.answer ? true: false })
      console.log(this.state.success)
      // const checkAnswer = this.state.userAnswer === this.props.answer ? true : false
      // console.log(checkAnswer)
  } 

  handleButtonChange(event) {
    this.setState({userAnswer: event.target.value})
  }

  render() {
    const radioButtons = this.state.selection.map(option => <div 
      key={option}
      onChange={event => this.handleButtonChange(event)}>
    <input 
      type="radio"
      name="dog"
      value={option}
      />
    <label>{option}</label>
    </div> 
    )
    return (
      <div> 
        <p>Which Dog Breed is this belong to?</p>
        <form ref="form" onSubmit={this.handleSubmit}>
        {radioButtons}
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  } 
}

export default Question
