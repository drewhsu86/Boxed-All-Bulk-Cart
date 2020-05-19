import React, { Component } from 'react';
import './App.css';
import StarRating from './components/StarRating'
import Products from './components/Products/Products'
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Admin from './components/Admin'
import Nav from './components/shared/Nav/Nav'
import DisplayNav from './components/Products/DisplayNav'


class App extends Component {
  // ============
  // render
  // ============
  render() {

    return (
      <div className="App">
        <Nav />

        <Switch>
          <Route exact path="/" render={Home} />
          <Route exact path="/products" render={(props) => <Products />} />
          <Route exact path="/products/:category" render={(props) => <Products />} />
          <Route exact path="/products/:category/:subcategory" render={(props) => <Products />} />
          <Route path="/productdetails/:id"><ProductDetails /></Route>
          {/* CRUD functions handled by admin with its own routes */}
          <Route path="/admin" render={() => <Admin />} />

        </Switch>
      </div>
    );

  }
}

export default App;