import React, { Component } from 'react'
import SideBar from '../SideBar/SideBar'
import './Products.css'
import SearchTerms from './SearchTerms'
import AllBulk from './AllBulk'
import Cat from './Cat'
import SubCat from './SubCat'
import Banner from './Banner'
import DisplayNav from './DisplayNav'

import Sort from '../Sort/Sort'
import { AZ, ZA, lowestFirst, highestFirst, rating } from "../Sort/Sort"
import { Route, Switch } from 'react-router-dom'
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
      brandsFilter: [],
      categories: [],
      subCategories: [],
      selectedValue: 'Featured'
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
  }

  threeFilter = () => {

    const filterNames = ['typeOfProduct', 'values', 'brands']
    let productsArray = this.state.products
    filterNames.forEach(filterName => {
      productsArray = this.filterOnClick(this.state[filterName + 'Filter'], productsArray, filterName)
    })
    this.setState({
      filteredProducts: productsArray
    })
  }

  filterOnClick = (arr, prodsArray, dest) => {
    let newArr = prodsArray.filter((prod) => {
      return arr.includes(prod[dest]) || arr.length === 0
    })

    return newArr
  }


  setProducts = async (arr) => {
    await this.setState({
      products: arr,
      filteredProducts: arr
    })
    this.populateFilter(arr, 'typeOfProduct')
    this.populateFilter(arr, 'values')
    this.populateFilter(arr, 'brands')
    this.forceUpdate()
  }

  handleSortChange = event => {
    this.setState({ selectedValue: event.target.value });
    let input = event.target.value; // a-z
    const { products, filteredProducts, selectedValue } = this.state;
    switch (input) {
      case "title-ascending":
        this.setState({
          products: AZ(products),
          filteredProducts: AZ(filteredProducts),
          selectedValue: input
        });
        break;
      case "title-descending":
        this.setState({
          products: ZA(products),
          filteredProducts: ZA(filteredProducts),
          selectedValue: input
        });
        break;
      case "highestFirst":
        this.setState({
          products: highestFirst(products),
          filteredProducts: highestFirst(filteredProducts),
          selectedValue: input
        });
        break;
      case "lowestFirst":
        this.setState({
          products: lowestFirst(products),
          filteredProducts: lowestFirst(filteredProducts),
          selectedValue: input
        });
        break;
      case "rating":
        this.setState({
          products: rating(products),
          filteredProducts: rating(filteredProducts),
          selectedValue: input
        });
        break;
      default:
        break
    }
  }

  render() {
    return (
      <div>
        <DisplayNav
          category={this.props.match.params.category}
          subcategory={this.props.match.params.subcategory}
        />
        <div className="products">
          <SideBar
            typeOfChoices={this.state.typeOfProduct}
            valuesChoices={this.state.values}
            brandsChoices={this.state.brands}
            onClickFilter={this.pushOrSplice}
          />
          <div className="main">
            <Banner />
            <Sort
              products={this.state.products}
              selectedValue={this.state.selectedValue}
              handleSortChange={this.handleSortChange}
            />
            <Switch>
              <Route exact path='/products'>
                <AllBulk
                  setProducts={this.setProducts}
                  filteredProducts={this.state.filteredProducts}
                  cartMethods={this.props.cartMethods}
                />
              </Route>
              <Route exact path='/products/:category'>
                <Cat
                  setCats={this.setCats}
                  setProducts={this.setProducts}
                  filteredProducts={this.state.filteredProducts}
                  cartMethods={this.props.cartMethods}
                />
              </Route>
              <Route path='/products/:category/:subcategory'>
                <SubCat
                  setProducts={this.setProducts}
                  filteredProducts={this.state.filteredProducts}
                  cartMethods={this.props.cartMethods}
                />
              </Route>
              <Route exact path='/productsearch/:terms'>
                <SearchTerms
                  setProducts={this.setProducts}
                  filteredProducts={this.state.filteredProducts}
                  cartMethods={this.props.cartMethods}
                />
              </Route>
            </Switch>

            <button className="load-more">LOAD MORE</button>

          </div>
        </div>
      </div>

    )
  }
}

export default withRouter(Products)