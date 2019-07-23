import React from 'react'

export default function SuccessRate(props){
  const correctAnswers = props.correctAnswers
  const totalAnswers = props.totalAnswers

  return <p>Success rate: {(correctAnswers/totalAnswers)*100}</p>
}