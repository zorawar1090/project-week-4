import { GET_RANDOM_DOG, SET_INITIAL_STATE, UPDATE_SUCCESS_RATE, UPDATE_IMAGE_URL, UPDATE_ANSWER, UPDATE_LOADING, UPDATE_IS_CORRECT, INCREMENT_CORRECT_ANSWERS, INCREMENT_TOTAL_ANSWERS } from '../actions/game-1'


const initialState = {
  imageUrl: null,
  answer: null,
  loading: true,
  correctAnswers: 0,
  totalAnswers: 0,
  isCorrect: true,
  successRate: 0
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    // case 'SET_GAME1_RESULTS':
    //   return [...state, action.payload]
    case INCREMENT_TOTAL_ANSWERS:
      return {
        ...state,
        totalAnswers: state.totalAnswers + 1
      }
    case INCREMENT_CORRECT_ANSWERS:
      return {
        ...state,
        correctAnswers: state.correctAnswers + 1
      }
    case GET_RANDOM_DOG:
      return {
        ...state,
        imageUrl: action.payload.message
      }
    case UPDATE_IMAGE_URL:
      return {
        ...state,
        imageUrl: action.payload
      }

    case UPDATE_ANSWER:
      return {
        ...state,
        answer: action.payload
      }

    case UPDATE_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case UPDATE_IS_CORRECT:
      return {
        ...state,
        isCorrect: action.payload
      }
    case UPDATE_SUCCESS_RATE:
      return {
        ...state,
        successRate: (state.correctAnswers/state.totalAnswers) * 100
      }
    case SET_INITIAL_STATE:
      return initialState
    default:
      return state
  }
}