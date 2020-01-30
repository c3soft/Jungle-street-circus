import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import HerosList from './components/artists/HerosList';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/artists" component={HerosList} />
      </Switch>
    </>
  );
}

export default App;
