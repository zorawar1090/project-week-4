import {GET_RANDOM_DOG, UPDATE_IMAGE_URL, UPDATE_ANSWER, UPDATE_LOADING} from '../actions/game-1'


const initialState = {
  imageUrl: null,
  answer: null,
  loading: true,
  correctAnswer: 0,
  totalAnswer: 0,
  isCorrect: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_GAME1_RESULTS':
      return [...state, action.payload]
    case 'INCREMENT_CORRECT_ANSWER':
      return {
        ...state,
        correctAnswer: state.correctAnswer++
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
    default:
      return state
  }
}