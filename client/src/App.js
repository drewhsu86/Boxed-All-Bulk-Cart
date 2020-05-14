import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';

class App extends Component {
  constructor() {
    super()

    this.state = {}
    
  }


  render() {

    return (
      <div className="App">
        <Switch>
          <Route path="/" render={() => <Home />} />
          <Route path="/products" />
          <Route path="/add-product" />
          <Route path="/products/:id/edit"  />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/login" />
          <Route path="/logout" />
        </Switch>
      </div>
    );
  }
}

export default App;