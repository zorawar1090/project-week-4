export const INCREMENT_CORRECT = 'INCREMENT_CORRECT'
export const INCREMENT_INCORRECT = 'INCREMENT_INCORRECT'

export function incrementCorrect() {
  return {
    type: INCREMENT_CORRECT
  }
}

export function incrementIncorrect() {
    return {
      type: INCREMENT_INCORRECT
    }
  }