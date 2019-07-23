import React from 'react'
import DogsList from './DogsList'
import request from 'superagent'
import {connect} from 'react-redux'
import {setDogs} from '../actions/dogs'

class DogslistContainer extends React.Component {

    componentDidMount(){
        request
            .get('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                console.log(response.body.message)
                this.props.setDogs((Object.keys(response.body.message)))
            })
            .catch(console.error)
    }

    // updateBreeds(breeds){
    //     this.setState({
    //         dogBreeds: breeds
    //     })
    // }

    render(){
        return <DogsList dogBreeds={this.props.dogBreeds} />
    }
}
const mapDispatchToprops = { setDogs }

const mapStateToProps = (state) => {
    return {
        dogBreeds: state
    }
}

export default connect (mapStateToProps, mapDispatchToprops)(DogslistContainer)
