import React,{Component} from 'react'
import Game2CardItem from './Game2CardItem'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {incrementCorrect, incrementIncorrect} from '../actions/game-2'

 class Game2Container extends Component{
 render(){
     console.log('CORRECT:',this.props.correctAnswers )
     return <Game2CardItem 
     correctAnswers={this.props.correctAnswers} 
     incorrectAnswers={this.props.incorrectAnswers}
     incrementCorrect={this.props.incrementCorrect}
     incrementIncorrect={this.props.incrementIncorrect}
     />
 }
}
const mapStateToProps = state => ({
    correctAnswers: state.correctAnswers,
    incorrectAnswers: state.incorrectAnswers,
  });
  
  const mapDispatchToProps = dispatch => bindActionCreators({ incrementCorrect, incrementIncorrect }, dispatch);
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Game2Container);