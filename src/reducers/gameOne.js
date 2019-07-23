export default (state = [], action = {}) => {
  switch (action.type) {
    case 'SET_GAME1_RESULTS':
      return [...state, action.payload]
    default:
      return state
  }
}