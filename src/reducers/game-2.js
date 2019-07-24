import {INCREMENT_CORRECT} from '../actions/game-2'
import {INCREMENT_INCORRECT} from '../actions/game-2'
import {TOTAL} from '../actions/game-2'

export default (state = {correctAnswers:0,incorrectAnswers:0, totalAnswers:0}, action = {}) => {
    switch(action.type){
    case INCREMENT_CORRECT:
        return {
            ...state,
            correctAnswers: state.correctAnswers + 1,
            totalAnswers: state.totalAnswers + 1,
        }
    case INCREMENT_INCORRECT:
        return {
            ...state,
            incorrectAnswers: state.incorrectAnswers + 1,
            totalAnswers: state.totalAnswers + 1,
        }
    case TOTAL:
        return{
            ...state,
            totalAnswers: state.totalAnswers
        }
    default: return state
    }
}