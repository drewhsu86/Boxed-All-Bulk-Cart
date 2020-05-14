import React, { Component } from 'react'
import SideBar from '../SideBar/SideBar'
import './Products.css'
import Carousel from '../Carousel/Carousel'
import { Link, Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

const productsData = [
  {
    name: 'Product 001',
    imgURL: 'https://www.nestle-cereals.com/global/sites/g/files/qirczx356/f/stage_visual/images_15.jpg',
    description: 'Yummy in my tummy :)',
    price: '4.99',
    rating: 3,
    stock: 25,
    categories: 'grocery',
    subcategories: 'cereal & breakfast'
  },
  {
    name: 'Product 002',
    imgURL: 'https://www.nestle-cereals.com/global/sites/g/files/qirczx356/f/stage_visual/images_15.jpg',
    description: 'Yummy in my tummy :)',
    price: '4.99',
    rating: 3,
    stock: 25,
    categories: 'grocery',
    subcategories: 'cereal & breakfast'
  },
  {
    name: 'Product 003',
    imgURL: 'https://www.nestle-cereals.com/global/sites/g/files/qirczx356/f/stage_visual/images_15.jpg',
    description: 'Yummy in my tummy :)',
    price: '4.99',
    rating: 3,
    stock: 25,
    categories: 'grocery',
    subcategories: 'cereal & breakfast'
  },
  {
    name: 'Product 004',
    imgURL: 'https://www.nestle-cereals.com/global/sites/g/files/qirczx356/f/stage_visual/images_15.jpg',
    description: 'Yummy in my tummy :)',
    price: '4.99',
    rating: 3,
    stock: 25,
    categories: 'grocery',
    subcategories: 'cereal & breakfast'
  },
  {
    name: 'Product 005',
    imgURL: 'https://www.nestle-cereals.com/global/sites/g/files/qirczx356/f/stage_visual/images_15.jpg',
    description: 'Yummy in my tummy :)',
    price: '4.99',
    rating: 3,
    stock: 25,
    categories: 'grocery',
    subcategories: 'cereal & breakfast'
  },
  {
    name: 'Product 006',
    imgURL: 'https://www.nestle-cereals.com/global/sites/g/files/qirczx356/f/stage_visual/images_15.jpg',
    description: 'Yummy in my tummy :)',
    price: '4.99',
    rating: 3,
    stock: 25,
    categories: 'grocery',
    subcategories: 'cereal & breakfast'
  }
]



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
        img={product.imgURL}
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