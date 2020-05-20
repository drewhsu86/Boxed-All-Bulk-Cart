import React, { Component } from 'react'
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

    // rank the product subcategories by most to least in the array
    // store amounts in a hash table 
    let subCount = {}
    this.props.filteredProducts.forEach(prod => {
      if (subCount[prod.subcategories]) {
        // if its already in the hash table add product
        subCount[prod.subcategories].push(prod)
      } else {
        // if it's not in the hash table, this is the first one 
        subCount[prod.subcategories] = [prod]
      }
    })

    // sort the subcategory names from highest to lowest in number 
    // in the original array (was counted in previous forEach)
    let subcatSelection = Object.keys(subCount)
    subcatSelection.sort((a, b) => {
      // if the return is negative, a goes before b 
      // i want highest to lowest so b.val - a.val 
      return subCount[b].length - subCount[a].length
    })

    // pick the top 3 if there are at least 3 
    // note: this array holds the key name whereas subCount holds the arrays of each subcategory 
    subcatSelection = subcatSelection.slice(0, 3)

    // we are going to make 3 carousels with these subarrays 

    // RETURN 
    return (
      <div>
        {
          subcatSelection.map(subCat => {
            return (<div>
              <h3>{subCat[0].toUpperCase() + subCat.slice(1)}</h3>
              <Carousel
                products={subCount[subCat]}
              />
            </div>)
          })
        }
      </div>
    )
  }
}



export default withRouter(Cat)