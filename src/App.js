import React from 'react';
import './App.css';
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
        <Route exact path="/" component={DogListContainer} />
        <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
      </div>
    </Provider>

  );
}

export default App;
