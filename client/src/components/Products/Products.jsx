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
      // products: [],
      filteredProducts: [],
      typeOfProduct: [],
      values: [],
      brands: [],
      typeOfProductFilter: [],
      valuesFilter: [],
      brandsFilter: []
    }
  }


  componentDidMount() {

    this.setState({
      filteredProducts: productsData
    })
    this.populateFilter(productsData, 'typeOfProduct')
    this.populateFilter(productsData, 'values')
    this.populateFilter(productsData, 'brands')
    this.forceUpdate()
  }

  populateFilter(arr, dest) {
    let available = []
    arr.forEach(prod => {
      // if its not included in available array AND if product[dest] is truthy (got rid of empty string)
      // deletes repeats
      if (!available.includes(prod[dest]) && prod[dest]) {
        available.push(prod[dest])
      }
    })
    this.setState({
      [dest]: available
    })
  }


  pushOrSplice = (dest, checked, label) => {
    let arr = this.state[dest]
    if (checked) {
      arr.push(label)
      this.setState({ [dest]: arr })
    } else {
      arr.splice(arr.indexOf(label), 1)
      this.setState({ [dest]: arr })
    }
  }




  render() {
    console.log(this.state.typeOfProductFilter)
    console.log(this.state.valuesFilter)
    console.log(this.state.brandsFilter)

    const PRODUCTS = this.state.filteredProducts.map(product => (
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
        <SideBar
          typeOfChoices={this.state.typeOfProduct}
          valuesChoices={this.state.values}
          brandsChoices={this.state.brands}
          onClickFilter={this.pushOrSplice}
        />
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