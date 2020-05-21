import React, { Component } from 'react'
import ProductThumb from '../Carousel/ProductThumb'
import api from '../../services/apiConfig'
import { withRouter } from 'react-router-dom'

class SearchTerms extends Component {
  constructor(props) {
    super(props)

    this.state = {
      terms: ''
    }
  }

  componentDidMount() {
    this.apiCall()
  }

  async apiCall() {
    const terms = this.props.match.params.terms
    console.log(terms)
    const res = await api.get(`/search/${terms}`)
    this.props.setProducts(res.data)

    this.setState({
      terms
    })
  }



  render() {
    const terms = this.props.match.params.terms
    if (terms !== this.state.terms) {
      this.apiCall()
    }

    return (
      <div>
        <h3>"{terms}"</h3>
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

export default withRouter(SearchTerms)