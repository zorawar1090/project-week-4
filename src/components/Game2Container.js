import React,{Component} from 'react'
import Game2CardItem from './Game2CardItem'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {incrementCorrect, incrementIncorrect,} from '../actions/game-2'

 class Game2Container extends Component{
 render(){
     console.log('CORRECT:',this.props.correctAnswers )
     console.log('TOTAL:',this.props.totalAnswers )
     return <div><Game2CardItem 
     correctAnswers={this.props.correctAnswers} 
     incorrectAnswers={this.props.incorrectAnswers}
     incrementCorrect={this.props.incrementCorrect}
     incrementIncorrect={this.props.incrementIncorrect}
     totalAnswers={this.props.totalAnswers}
     />
     <p>Correct: {this.props.correctAnswers} / {this.props.totalAnswers}</p>
     </div>
 }
}
const mapStateToProps = state => ({
    correctAnswers: state.game2.correctAnswers,
    incorrectAnswers: state.game2.incorrectAnswers,
    totalAnswers: state.game2.totalAnswers
  });
  
  const mapDispatchToProps = dispatch => bindActionCreators({ incrementCorrect, incrementIncorrect }, dispatch);
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Game2Container);