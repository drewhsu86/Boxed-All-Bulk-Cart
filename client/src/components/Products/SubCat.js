import React, { Component } from 'react'
import ProductThumb from '../Carousel/ProductThumb'
import api from '../../services/apiConfig'
import { withRouter } from 'react-router-dom'

class SubCat extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    const category = this.props.match.params.category
    const subCategory = this.props.match.params.subcategory
    console.log(category, subCategory)
    const res = await api.get(`/categories/${category}/${subCategory}`)
    console.log(res)
    this.props.setProducts(res.data)
  }

  render() {
    console.log(this.props.filteredProducts)
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