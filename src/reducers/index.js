import { combineReducers } from 'redux'
import game2 from './game-2'
import reducer from './dogs'
import gameOne from './gameOne'

export default combineReducers({
  game2,
  reducer,
  gameOne
})