export const INCREMENT_CORRECT_ANSWER = 'INCREMENT_CORRECT_ANSWER'
export const GET_RANDOM_DOG = 'GET_RANDOM_DOG'
export const UPDATE_IMAGE_URL ='UPDATE_IMAGE_URL'
export const UPDATE_ANSWER = 'UPDATE_ANSWER'
export const UPDATE_LOADING = 'UPDATE_LOADING'

export function incrementCorrectAnswer(){
    return {type: INCREMENT_CORRECT_ANSWER}
}


export function getRandomDog(dogsList){
    return {
        type: GET_RANDOM_DOG,
        payload: dogsList
    }
}

export function updateImageUrl(imageUrl){
    return {
        type: UPDATE_IMAGE_URL,
        payload: imageUrl
    }
}

export function updateAnswer(answer){
    return {
        type: UPDATE_ANSWER,
        payload: answer
    }
}

export function updateLoading(){
    return {
        type: UPDATE_LOADING,
        payload: false
    }
}