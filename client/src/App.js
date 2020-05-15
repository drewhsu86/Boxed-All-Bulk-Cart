import React, { Component } from 'react';
import './App.css';
import StarRating from './components/StarRating'
import Products from './components/Products/Products'
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

          <Route exact path="/" render={Home} />
          <Route path="/products" render={(props) => <Products />} />
          <Route path="/add-product" />
          <Route path="/test"><ProductDetails /></Route>
          {/* <Route path="/products/:id/edit"  />
          <Route exact path="/products/:id" /> */}
          <Route path="/login" />
          <Route path="/logout" />

        </Switch>
      </div>
    );

  }
}

export default App;