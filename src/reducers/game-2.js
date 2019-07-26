import { INCREMENT_CORRECT } from '../actions/game-2'
import { INCREMENT_INCORRECT } from '../actions/game-2'
import { SUCCESS } from '../actions/game-2'
import { SET_INITIAL_STATE } from '../actions/game-2'


const initialState = { correctAnswers: 0, incorrectAnswers: 0, totalAnswers: 0, success: 0 }
export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_INITIAL_STATE:
            return initialState
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
        case SUCCESS:
            return {
                ...state,
                success: (state.correctAnswers / state.totalAnswers) * 100
            }
        default: return state
    }
}