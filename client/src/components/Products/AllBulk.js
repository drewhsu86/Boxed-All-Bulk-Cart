import React, { Component } from 'react'
import ProductThumb from '../Carousel/ProductThumb'
import Carousel from '../Carousel/Carousel'
import api from '../../services/apiConfig'
import { withRouter } from 'react-router-dom'
import DisplayNav from './DisplayNav'

class AllBulk extends Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    this.apiCall()
  }

  async apiCall() {
    const res = await api.get(`/products`)
    this.props.setProducts(res.data)
  }

  render() {
    // rank the product categories by most to least in the array
    // store amounts in a hash table 
    let catCount = {}
    this.props.filteredProducts.forEach(prod => {
      if (catCount[prod.categories]) {
        // if its already in the hash table add product
        catCount[prod.categories].push(prod)
      } else {
        // if it's not in the hash table, this is the first one 
        catCount[prod.categories] = [prod]
      }
    })

    // sort the category names from highest to lowest in number 
    // in the original array (was counted in previous forEach)
    let catSelection = Object.keys(catCount)
    catSelection.sort((a, b) => {
      // if the return is negative, a goes before b 
      // i want highest to lowest so b.val - a.val 
      return catCount[b].length - catCount[a].length
    })

    // pick the top 3 if there are at least 3 
    // note: this array holds the key name whereas catCount holds the arrays of each category 
    catSelection = catSelection.slice(0, 3)

    // we are going to make 3 carousels with these subarrays 

    // RETURN 
    return (
      <div>
        <h2>All-Bulk</h2>
        {
          catSelection.map(cat => {
            return (<div>
              <h3>{cat[0].toUpperCase() + cat.slice(1)}</h3>
              <Carousel
                products={catCount[cat]}
                cartMethods={this.props.cartMethods}
              />
            </div>)
          })
        }
      </div>
    )
  }
}



export default withRouter(AllBulk)