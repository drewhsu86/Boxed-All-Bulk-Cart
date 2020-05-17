import React, { Component } from 'react';
import './App.css';
import StarRating from './components/StarRating'
import Products from './components/Products/Products'
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Admin from './components/Admin'

class App extends Component {
  // ============
  // render
  // ============
  render() {

    return (
      <div className="App">
        <Switch>

          <Route exact path="/" render={Home} />
          <Route path="/products" render={(props) => <Products />} />
          <Route path="/test"><ProductDetails /></Route>

          {/* CRUD functions handled by admin with its own routes */}
          <Route path="/admin" render={() => <Admin />} />

        </Switch>
      </div>
    );

  }
}

export default App;