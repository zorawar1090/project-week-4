import React from 'react'
import DogsList from './DogsList'
import request from 'superagent'

export default class DoglistContainer extends React.Component {
    state = { dogBreeds: null }

    componentDidMount(){
        request
            .get('https://dog.ceo/api/breeds/list/all')
            .then(response => this.updateBreeds((Object.keys(response.body.message))))
            .catch(console.error)
    }

    updateBreeds(breeds){
        this.setState({
            dogBreeds: breeds
        })
    }

    render(){
        return <DogsList dogBreeds={this.state.dogBreeds} />
    }
}
