import React,{Component}  from 'react'
import request from 'superagent'
import '../styles/Game2CardItem.css'
import { Promise } from 'q';


export default class Game2CardItem extends Component{
    state = {
        image: [],
        breed: null,
        correctIndex: 0,
        feedback: false,
        usedBreeds:[]
    }
    
    componentDidMount(){
        this.Promise();
    }

    Promise(resolver, rejector){
        const firstPromise= new Promise(
            request
            .get('https://dog.ceo/api/breeds/list/all')
    )
    const breed = Math.floor(Math.random()*(this.state.usedBreeds.length -1))
    const secondPromise = new Promise(
        request
            .get(`https://dog.ceo/api/breed/${this.state.usedBreeds[breed]}/images/random/3`)
    
    )
    const thirdPromise = new Promise(
        request
        .get(`https://dog.ceo/api/breeds/image/random/2`)
    )
        request
        .then(
            firstPromise = response => {
            this.props.setDogs(Object.keys(response.body.message))},
            secondPromise = response => {
                const correctIndex = (Math.floor(Math.random()*(this.state.usedBreeds.length-1)));
                this.setState({
                    image: response.body.message,
                    breed: response.body.message[correctIndex].split('/')[4],
                    correctIndex: correctIndex
                })},
            thirdPromise = response => {
                this.setState({
            image: response.body.message,
        })})
    const promises = [firstPromise,secondPromise,thirdPromise]
    Promise.all(promises)
        .then(res=> res.body.message)
    }
   

    handleClick=(event)=>{
        const index = event.target.getAttribute('data-index')
        if (parseInt(index) === this.state.correctIndex){
            this.setState({ feedback: true }) 
            setTimeout(() => {
                this.setState({ feedback: false });
                this.getData();
                this.props.updateCorrectThunk();
            }, 1000);
        }
        else{
            this.setState({ feedback: true })
            setTimeout(() => {
                this.setState({ feedback: false });
                this.getData();
                this.props.updateIncorrectThunk()
            }, 2000);
        }
    }

    render(){
        return <div>
            <h2>Choose the image of {this.state.breed}</h2>
            {this.state.image.map((image,index) => {
                let className = ''
                if(index === this.state.correctIndex && this.state.feedback === true){
                    className = 'correct'
                }
                else if(index !== this.state.correctIndex && this.state.feedback === true){
                    className ='incorrect'
                
                }

                return <img
                    key={index}
                    src = {image}
                    className={className}
                    data-index={index}
                    onClick={this.handleClick}
                    alt= ''
                />;
            })}
        </div>
    }
}