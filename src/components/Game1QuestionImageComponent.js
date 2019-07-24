import React,{Component} from 'react'

export default class Game1QuestionImageComponent extends Component {
  render(){
    return (
      <div>
        <img src={this.props.imageUrl} alt=''/>
      </div>
    )
  }
}