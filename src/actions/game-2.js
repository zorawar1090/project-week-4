import { request } from "https";

export const INCREMENT_CORRECT = 'INCREMENT_CORRECT'
export const INCREMENT_INCORRECT = 'INCREMENT_INCORRECT'
export const TOTAL ='TOTAL'
export const SUCCESS ='SUCCESS'

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

export function updateSuccess(){
    return{
        type: SUCCESS
    }
}

export function updateIncorrectThunk(){
    return function(dispatch, getState){
        dispatch(incrementIncorrect())
        dispatch(updateSuccess())
    }
}

export function updateCorrectThunk(){
    return function(dispatch, getState){
        dispatch(incrementCorrect())
        dispatch(updateSuccess())
    }
}

