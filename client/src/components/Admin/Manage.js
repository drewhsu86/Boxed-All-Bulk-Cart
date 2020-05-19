import React, { Component } from 'react'
import api from '../../services/apiConfig'
import ProductThumb from '../Carousel/ProductThumb'
import { Link } from 'react-router-dom'

export default class Manage extends Component {
  constructor() {
    super()

    this.state = {
      products: [],
      inputSearch: ''
    }
  }
  // point of this component is to help us find products to edit or delete 
  // will be using the backend route '/search/:terms'
  // terms can have multiple words separated by spaces 
  // two ways to search
  // search all, or search bar 

  // =============
  // methods
  // =============

  // we won't api call on componentDidMount but instead
  // add it to buttons so the user can choose 

  // api call to get all products
  // '/products'
  apiCall = async (url) => {
    const response = await api.get(url)
    this.setState({
      products: response.data
    })
  }

  // handle search bar onChange 
  handleChangeSearch = (e) => {
    this.setState({
      inputSearch: e.target.value
    })
  }

  // handle clicking the search button 
  handleClickSearch = () => {
    if (this.state.inputSearch.length > 0) {
      this.apiCall(`/search/${this.state.inputSearch}`)
    }
  }

  // handle submitting the search form (with search terms)
  handleSubmitSearch = (e) => {
    e.preventDefault()

    if (this.state.inputSearch) {
      this.apiCall(`/search/${this.state.inputSearch}`)
    }

  }

  // =============
  // render
  // =============
  render() {

    return (
      <div>


        <form onSubmit={this.handleSubmitSearch} >

          <button
            type="button"
            onClick={() => this.apiCall('/products')} >
            Show All Products
        </button>

          <input type="text" value={this.state.inputSearch}
            onChange={this.handleChangeSearch} />

          <button>
            Show Searched Products
          </button>
        </form>

        <div className="adminManageProducts">
          {
            this.state.products.map(prod => {
              return (
                <Link to={"/admin/manage/" + prod['_id']}>
                  <ProductThumb product={prod} />
                </Link>
              )
            })
          }
        </div>
      </div>
    )
  }
}
