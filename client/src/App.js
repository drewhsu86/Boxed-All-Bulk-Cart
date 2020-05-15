import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';


// testing purposes only!!!!!!
import Info from './components/ProductDetails/Info/Info'

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
          <Route path="/products" />
          <Route path="/add-product" />
          <Route path="/test"><ProductDetails/></Route>
          <Route path="/products/:id/edit"  />
          <Route path="/login" />
          <Route path="/logout" />
          {/* <Route path="/test" component={Info}/> */}
        </Switch>
      </div>
    );
  }
}

export default App;