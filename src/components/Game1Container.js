import React from 'react'
import {Link} from 'react-router-dom'

export default class Game1Container extends React.Component{
  render(){
    return(
      <div>
        <Link to={`/dog-breeds`}>List all the dog breeds</Link>
      </div>
    )
  }
}