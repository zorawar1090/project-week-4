import React,{Component}  from 'react'
import request from 'superagent'
import '../styles/Game2CardItem.css'


export default class Game2CardItem extends Component{
    state = {image: [], breed: null, correctIndex: 0, feedback: false}
    
    componentDidMount(){
        this.getData();
    }

    getData() {
        request
            .get(`https://dog.ceo/api/breeds/image/random/3`)
            .then(response => {
                const correctIndex = (Math.floor(Math.random()*3));
                this.setState({
                    image: response.body.message,
                    breed: response.body.message[correctIndex].split('/')[4],
                    correctIndex: correctIndex
                });
                
            })
            .catch(console.error);
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