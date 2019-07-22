import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import DogBreedImagesContainer from './components/DogBreedImagesContainer'
import {Route} from 'react-router-dom'
import HomeContainer from './components/HomeContainer';
import Game1Container from './components/Game1Container'
import Game2Container from './components/Game2Container'
import Game3Container from './components/Game3Container'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Route exact path="/" component={HomeContainer} />
        <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
        <Route path="/game/1" component={Game1Container} />
        <Route path="/game/2" component={Game2Container} />
        <Route path="/game/3" component={Game3Container} />
      </div>
    </Provider>

  );
}

export default App;
