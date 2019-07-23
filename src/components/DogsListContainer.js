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
                this.props.setDogs((Object.keys(response.body.message)))
            })
            .catch(console.error)
    }

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
