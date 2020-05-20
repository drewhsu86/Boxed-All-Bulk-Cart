import React, { Component } from 'react';
import './App.css';
import Products from './components/Products/Products'
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Admin from './components/Admin'
import Nav from './components/shared/Nav/Nav'
import DisplayNav from './components/Products/DisplayNav'
import ShoppingCart from './components/ShoppingCart'
import Login from './components/LoginPage/Login'


class App extends Component {
  constructor() {
    super()
    this.state = {
      // we need to grab the methods from the cart
      cartMethods: {}
    }
  }

  // ============
  // methods
  // ============

  // a method to pass to shopping cart that lets it return an object full of methods that other components can use 
  // this is very generically written so it doesn't have to be used for this one use case 
  initState = (stateName, stateValue) => {
    this.setState({
      [stateName]: stateValue
    })
  }

  // ============
  // render
  // ============
  render() {

    return (
      <div className="App">
        <Nav toggleCart={this.state.cartMethods.toggleCart || null} />
        <ShoppingCart initAppMethods={this.initState} />

        <Switch>
          <Route exact path="/" render={Home} />
          <Route exact path="/products" render={(props) => <Products />} />
          <Route exact path="/products/:category" render={(props) => <Products />} />
          <Route exact path="/products/:category/:subcategory" render={(props) => <Products />} />
          <Route exact path="/productsearch/:terms" render={(props) => <Products />} />
          <Route path="/productdetails/:id"><ProductDetails /></Route>
          {/* CRUD functions handled by admin with its own routes */}
          <Route path="/admin" render={() => <Admin />} />
          <Route path="/login" render={() => <Login />} />

        </Switch>
      </div>
    );

  }
}

export default App;