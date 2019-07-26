export const INCREMENT_CORRECT_ANSWERS = 'INCREMENT_CORRECT_ANSWERS'
export const GET_RANDOM_DOG = 'GET_RANDOM_DOG'
export const UPDATE_IMAGE_URL = 'UPDATE_IMAGE_URL'
export const UPDATE_ANSWER = 'UPDATE_ANSWER'
export const UPDATE_LOADING = 'UPDATE_LOADING'
export const UPDATE_IS_CORRECT = 'UPDATE_IS_CORRECT'
export const INCREMENT_TOTAL_ANSWERS = 'INCREMENT_TOTAL_ANSWERS'
export const UPDATE_SUCCESS_RATE = 'UPDATE_SUCCESS_RATE'

export function updateSuccessRate() {
    return {
        type: UPDATE_SUCCESS_RATE
    }
}

export function incrementCorrectAnswers() {
    return { type: INCREMENT_CORRECT_ANSWERS }
}

export function incrementTotalAnswers() {
    return { type: INCREMENT_TOTAL_ANSWERS }
}


export function getRandomDog(dogsList) {
    return {
        type: GET_RANDOM_DOG,
        payload: dogsList
    }
}

export function updateImageUrl(imageUrl) {
    return {
        type: UPDATE_IMAGE_URL,
        payload: imageUrl
    }
}

export function updateAnswer(answer) {
    return {
        type: UPDATE_ANSWER,
        payload: answer
    }
}

export function updateLoading() {
    return {
        type: UPDATE_LOADING,
        payload: false
    }
}

export function updateIsCorrect(value) {
    return {
        type: UPDATE_IS_CORRECT,
        payload: value
    }
}