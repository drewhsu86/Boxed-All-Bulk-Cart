import React, { Component } from 'react'
import SideBar from '../SideBar/SideBar'
import './Products.css'
import Carousel from '../Carousel/Carousel'
import ProductThumb from '../Carousel/ProductThumb'
import SubCat from './SubCat'

import { Link, Route, Switch } from 'react-router-dom'
import productsData from '../../products.json'
import { withRouter } from 'react-router-dom'





class Products extends Component {
  constructor() {
    super()
    this.state = {
      products: [],
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
      products: productsData,
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
    let arr = this.state[dest + 'Filter']
    if (checked) {
      arr.push(label)
      this.setState({ [dest + 'Filter']: arr })
    } else {
      arr.splice(arr.indexOf(label), 1)
      this.setState({ [dest + 'Filter']: arr })
    }
    this.threeFilter()
    //this.filterbrandsOnClick(arr, newFilteredProducts)
  }



  threeFilter = () => {

    const filterNames = ['typeOfProduct', 'values', 'brands']
    let productsArray = this.state.products
    filterNames.forEach(filterName => {
      productsArray = this.filterOnClick(this.state[filterName + 'Filter'], productsArray, filterName)
      console.log(filterName, productsArray)
    })
    this.setState({
      filteredProducts: productsArray
    })
  }

  filterOnClick = (arr, prodsArray, dest) => {
    console.log('the filtered arr is', arr)
    let newArr = prodsArray.filter((prod) => {
      return arr.includes(prod[dest]) || arr.length === 0
    })

    return newArr
  }


  setProducts = (arr) => {
    this.setState({
      products: arr,
      filteredProducts: arr
    })
  }



  render() {
    // console.log(this.state.typeOfProductFilter)
    // console.log(this.state.valuesFilter)
    // console.log(this.state.brandsFilter)
    console.log(window.location.pathname)
    console.log(this.state.products, this.state.filteredProducts)


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
            <Route exact path='/products'>
              {this.state.filteredProducts.map(product => (
                <ProductThumb
                  product={product}
                />
              ))}
            </Route>
            <Route exact path='/products/:category'>
              <Carousel
                products={this.state.filteredProducts}
              />
            </Route>
            <Route path='/products/:category/:subcategory'>
              <SubCat
                setProducts={this.setProducts}
                filteredProducts={this.state.filteredProducts}
              />
            </Route>
          </Switch>

          <button>LOAD MORE</button>
        </div>
      </div>
    )
  }
}



export default withRouter(Products)