import React, { Component } from 'react'
import SideBar from '../SideBar/SideBar'
import './Products.css'
import Carousel from '../Carousel/Carousel'
import { Link, Route, Switch } from 'react-router-dom'
import productsData from '../../products.json'
import { withRouter } from 'react-router-dom'





class Products extends Component {
  constructor() {
    super()
    this.state = {
      products: [],
      filteredProducts: null
    }
  }

  render() {

    const PRODUCTS = productsData.map(product => (
      <Carousel
        name={product.name}
        img={product.images[0]}
        description={product.description}
        price={product.price}
        rating={product.rating}
        stock={product.stock}
        categories={product.categories}
        subcategories={product.subcategories}
      />
    ))



    return (
      <div className="products">
        <SideBar />
        <div className="main">
          <div>Banner</div>
          <Switch>
            <Route exact path='/:category'>
              {PRODUCTS}
            </Route>
            <Route path='/:category/:subcategory' />
          </Switch>

          <button>LOAD MORE</button>
        </div>
      </div>
    )
  }
}



export default withRouter(Products)