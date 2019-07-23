import React from 'react';
import './App.css';
<<<<<<< HEAD
import Game1QuestionImageComponent from './components/Game1QuestionImageComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Game1QuestionImageComponent/>
    </div>
=======
import { Provider } from 'react-redux'
import store from './store'
import DogListContainer from './components/DogsListContainer'
import DogBreedImagesContainer from './components/DogBreedImagesContainer'
import {Route} from 'react-router-dom'
import Game1Container from './components/Game1Container'
import Game2Container from './components/Game2Container'
import Game3Container from './components/Game3Container'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Route exact path="/" component={Game1Container} />
        <Route exact path="/dog-breeds" component={DogListContainer} />
        <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
      </div>
    </Provider>

>>>>>>> c47c930fcf8758a28fc9d8ca4956effde4ffb7fe
  );
}

export default App;
