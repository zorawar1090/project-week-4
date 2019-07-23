import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class DogsList extends Component {
    renderdogBreed(breed) {
        return (
            <li key={breed}>
                <Link to={`/dog-breeds/${breed}`}>{breed}</Link>
            </li>
        )

    }

    render() {
        const { dogBreeds } = this.props
        return (
            <div className="dogs-list">
                <h1>Dogs List</h1>
                {!dogBreeds
                    ? 'Loading...'
                    : <ul>{dogBreeds.map(this.renderdogBreed)}</ul>}
            </div>
        )
    }
}