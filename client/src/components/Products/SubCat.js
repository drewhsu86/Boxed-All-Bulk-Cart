import React, { Component } from 'react'
import ProductThumb from '../Carousel/ProductThumb'
import api from '../../services/apiConfig'
import { withRouter } from 'react-router-dom'

class SubCat extends Component {
  constructor(props) {
    super(props)

    this.state = {
      category: '',
      subcategory: ''
    }
  }

  componentDidMount() {
    this.apiCall()
  }

  async apiCall() {
    const category = this.props.match.params.category
    const subCategory = this.props.match.params.subcategory
    console.log(category, subCategory)
    const res = await api.get(`/categories/${category}/${subCategory}`)
    console.log(res)
    this.props.setProducts(res.data)

    this.setState({
      category: category,
      subcategory: subCategory
    })
  }



  render() {
    const category = this.props.match.params.category
    const subCategory = this.props.match.params.subcategory
    if (category !== this.state.category || subCategory !== this.state.subcategory) {
      this.apiCall()
    }

    return (
      <div>
        {this.props.filteredProducts.map(product => (
          <ProductThumb
            product={product}
          />
        ))}
      </div>
    )
  }
}



export default withRouter(SubCat)