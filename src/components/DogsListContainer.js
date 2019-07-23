import React from 'react'
import DogsList from './DogsList'
import request from 'superagent'
import {connect} from 'react-redux'

class DogslistContainer extends React.Component {

    componentDidMount(){
        request
            .get('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                this.props.dispatch({
                    type: 'SET_DOGS',
                    payload: Object.keys(response.body.message)
                })
            })
            .catch(console.error)
    }

    render(){
        return <DogsList dogBreeds={this.props.dogBreeds} />
    }
}
// const mapDispatchToprops = { setDogs }

const mapStateToProps = (state) => {
    return {
        dogBreeds: state.reducer
    }
}

export default connect (mapStateToProps)(DogslistContainer)
