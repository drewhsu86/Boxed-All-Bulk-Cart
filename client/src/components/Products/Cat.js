import React, { Component } from 'react'
import ProductThumb from '../Carousel/ProductThumb'
import Carousel from '../Carousel/Carousel'
import api from '../../services/apiConfig'
import { withRouter } from 'react-router-dom'

class Cat extends Component {
  constructor(props) {
    super(props)


    this.state = {
      category: ''
    }
  }

  async componentDidMount() {
    this.apiCall()
  }


  async apiCall() {
    const category = this.props.match.params.category
    const res = await api.get(`/categories/${category}`)
    this.props.setProducts(res.data)

    this.setState({
      category: category
    })
  }


  render() {

    const category = this.props.match.params.category
    if (category !== this.state.category) {
      this.apiCall()
    }

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