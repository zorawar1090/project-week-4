import React, { Component } from 'react'
import request from 'superagent'
// import PropTypes from 'prop-types'

class Question extends Component {
  state = {
    success: false,
    selection: [],
    allAvailableDog: []
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
    // todo: get 2 item from all available dog not equal to prop.answer
    // todo: put the 2 item to selection state
    // todo: add the answer to selection state 
    // shuffle the selection state
    console.log(this.state.allAvailableDog)
  }

  handleSubmit(event) {
    event.preventDefault();
  } 
  
  render() {
    // todo: show input radio loop from selection state
    return (
      <div> 
        <p>Which Dog Breed is this belong to?</p>
        <form ref="form" onSubmit={this.handleSubmit}>
          <input type="radio" name="dog" value="shishu"/>
          <label>shishu</label>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  } 
}

export default Question
