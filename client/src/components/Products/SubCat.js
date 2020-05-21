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
    const res = await api.get(`/categories/${category}/${subCategory}`)
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
        <h3>{subCategory[0].toUpperCase() + subCategory.slice(1)}</h3>
        <div className="subCat">
          {this.props.filteredProducts.map(product => (
            <ProductThumb
              product={product}
              cartMethods={this.props.cartMethods}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default withRouter(SubCat)