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
    // passing down methods that let other components affect the cart 
    const cartMethods = this.state.cartMethods
    return (
      <div className="App">

        <Nav toggleCart={cartMethods.toggleCart || null} />
        <ShoppingCart initAppMethods={this.initState} />

        <Switch>
          <Route exact path="/" render={Home} />
          <Route path="/products" render={(props) => <Products cartMethods={cartMethods} />} />
          <Route exact path="/productsearch/:terms" render={(props) => <Products cartPush={cartMethods.cartPush} />} />
          <Route path="/productdetails/:id"><ProductDetails cartMethods={cartMethods} /></Route>
          {/* CRUD functions handled by admin with its own routes */}
          <Route path="/admin" render={() => <Admin />} />

          <Route path="/login" render={() => <Login />} />


        </Switch>

      </div>
    );

  }
}

export default App;