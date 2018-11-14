import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Introduction from './components/Introduction';
import Login from './components/Login';
import Game from './components/Game';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navigation />
        <div className="container-fluid">
          <Switch>
            <Route exact path='/' component={Introduction}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/game' component={Game}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}
  
export default App;