import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class Question extends Component {
  state = {
    success: false
  }
  
  handleSubmit(event) {
    event.preventDefault();
  } 
  
  render() {
    return (
      <div> 
        <p>Which Dog Breed is this belong to?</p>
        <select>
          <option value="">Grapefruit</option>
          <option value="">Lime</option>
          <option value="">Coconut</option>
        </select>
        <form ref="form" onSubmit={this.handleSubmit}>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  } 
}

export default Question
