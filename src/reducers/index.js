import { combineReducers } from 'redux'
import reducer from './dogs'
import gameOne from './gameOne'

export default combineReducers({
  reducer,
  gameOne
})