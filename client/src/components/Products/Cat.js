import React, { Component } from 'react'
import ProductThumb from '../Carousel/ProductThumb'
import Carousel from '../Carousel/Carousel'
import api from '../../services/apiConfig'
import { withRouter } from 'react-router-dom'

class Cat extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    const category = this.props.match.params.category
    console.log(category)
    const res = await api.get(`/categories/${category}`)
    console.log(res)
    this.props.setProducts(res.data)
  }

  render() {
    console.log(this.props.filteredProducts)
    return (
      <div>
        <Carousel
          products={this.props.filteredProducts}
        />
      </div>
    )
  }
}



export default withRouter(Cat)