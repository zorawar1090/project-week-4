// import {SET_DOGS} from '../actions/dogs'

export default (state = [], action = {}) => {
  switch (action.type) {
    case 'SET_DOGS':
      return action.payload
    default:
      return state
  }
}