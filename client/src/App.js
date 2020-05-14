import React, { Component } from 'react';
import './App.css';
import Products from './components/Products/Products'

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()

    this.state = {}

  }


  render() {

    return (
      <div className="App">
        <Switch>
          <Route exact path="/" />
          <Route exact path="/products" render={(props) => <Products />} />
          <Route path="/add-product" />
          <Route exact path="/products/:id/edit" />
          <Route exact path="/products/:id" />
          <Route path="/login" />
          <Route path="/logout" />
        </Switch>
      </div>
    );
  }
}

export default App;
