import React, { Component } from 'react'
import api from '../../services/apiConfig'
import ProductThumb from '../Carousel/ProductThumb'
import { Link } from 'react-router-dom'

export default class Manage extends Component {
  constructor() {
    super()

    this.state = {
      products: []
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
  apiAllProducts = async () => {
    const response = await api.get('/products')
    this.setState({
      products: response.data
    })
  }

  // =============
  // render
  // =============
  render() {
    console.log(this.state)
    return (
      <div>
        <button onClick={this.apiAllProducts} >
          Show All Products
        </button>

        <div>
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
