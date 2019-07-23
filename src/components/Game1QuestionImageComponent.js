import React,{Component} from 'react'
import request from 'superagent'

export default class Game1QuestionImageComponent extends Component {
    state = {}
    componentDidMount() {
        request
          .get(`https://dog.ceo/api/breeds/image/random`)
          .then(response => {
            this.setState({
              imageUrl: response.body.message,
              breed: response.body.message.split('/')[4]
            })
            console.log(response.body.message)
        })
          .catch(console.error)
        }
    
    
    render(){
        console.log(this.state.imageUrl)
        return (
            <div>
              <img src={this.state.imageUrl} alt=''/>
              <h1>{this.state.breed}</h1>
            </div>
        )}
}