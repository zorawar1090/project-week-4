import React,{Component}  from 'react'
import request from 'superagent'
import './Game2CardItem.css'


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
                //console.log('my current index is:', correctIndex)
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
        //console.log('my index is:',index)
        //console.log('current:', this.state.correctIndex)
        if (parseInt(index) === this.state.correctIndex){
            this.setState({ feedback: true })

            setTimeout(() => {
                this.setState({ feedback: false });
                this.getData();
                // this.props.incrementCorrect();
                // this.props.updateSuccess();
                this.props.updateCorrectThunk();
            }, 1000);
        }
        else{
            this.setState({ feedback: true })
            setTimeout(() => {
                this.setState({ feedback: false });
                this.getData();
                // this.props.incrementIncorrect();
                // this.props.updateSuccess();
                this.props.updateIncorrectThunk()
            }, 2000);
        }
    }

    render(){
        //console.log('Breed:', this.state.breed)
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