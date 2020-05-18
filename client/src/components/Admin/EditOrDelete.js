import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../services/apiConfig'

const validInputs = [
  'name', 'images', 'description', 'price', 'rating', 'stock',
  'categories', 'subcategories', 'typeOfProduct', 'values', 'brands'
]

class EditOrDelete extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputEdit: null,
      inputNumbers: ['rating', 'stock'],  // names of inputs that are numbers in the schema
      errMsg: '',
      canSubmit: false
    }
  }

  // ==============
  // methods
  // ==============

  async componentDidMount() {
    try {
      const id = this.props.match.params.id
      const response = await api.get(`/products/${id}`)
      console.log(response)

      // make sure that images is a string instead of array 
      response.data.images = response.data.images.join(', ')
      this.setState({
        inputEdit: response.data
      })

    } catch (er) {
      console.log(er)
      this.setState({
        errMsg: er.message
      })
    }
  }

  // change of any of the input fields 
  handleChange = (e, field) => {
    // uses the field name to update the state 
    // if it's a number we need to convert it 

    let val = e.target.value

    if (this.state.inputNumbers.includes(field)) {
      val = Number(val)
      if (isNaN(val)) {
        val = 0
      }
    }

    // field is the name of each attribute in inputEdit
    let newinputEdit = this.state.inputEdit
    newinputEdit[field] = val
    this.setState({
      inputEdit: newinputEdit
    })

    // update canSubmit 
    const canSubmit = this.canSubmit()
    this.setState({
      canSubmit
    })
  }

  // submission of form 
  handleSubmit = async (e) => {
    e.preventDefault()
    // cannot submit if canSubmit is false 
    if (!this.state.canSubmit) return
    // post request to route 
    // '/products' with a req.body
    const newProduct = this.state.inputEdit

    // need to change images into array 
    // we assume image urls split by either "," or ", "
    // 1. remove spaces
    // 2. split by comma and that is an array format 
    console.log('newProduct', newProduct)
    const imagesNoSpaces = newProduct.images.split(' ').join('')
    newProduct.images = imagesNoSpaces.split(',')

    // API call 
    const response = await api.put(`/products/${this.props.match.params.id}`, newProduct)
    console.log(response)

    this.setState({
      inputEdit: response.data,
      errMsg: "Product edited"
    })

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  // true or false - can form be submitted?
  // check inputEdit to see if any required field is empty 
  // will only check this for strings 
  // numbers can't be negative 
  canSubmit = () => {
    // must be logged in 
    if (!localStorage.getItem('token')) return false

    // required fields from schema
    // ignore images because it's an array 
    // ignore the two numbers (bad inputs set it to zero)
    // ignore last 3 fields which are not required 
    const requiredFields = [
      'name', 'description', 'price', 'categories', 'subcategories'
    ]

    requiredFields.forEach(field => {
      if (!this.state.inputEdit[field]) return false
    })

    return true
  }

  // ask the user if they want to delete 
  // do it (or attempt the api call) if they say yes 
  tryDelete = async (e) => {
    e.preventDefault()

    // confirm with user
    const delConfirm = window.confirm('Are you sure you want to delete this item?')

    if (delConfirm) {
      try {
        const response = await api.delete(`/products/${this.state.inputEdit['_id']}`)

        console.log(response)
        this.setState({
          errMsg: 'Product deleted',
          inputEdit: null
        })
      } catch (er) {
        console.log(er)
        this.setState({
          errMsg: er.message
        })
      }
    }
  }

  // ==============
  // render
  // ==============
  render() {
    // grab the keys from inputEdit
    // to map our form inputs 
    if (!this.state.inputEdit) {
      return <div>
        <h1>No product found</h1>
      </div>
    }
    else {

      // console.log(this.state)
      return (
        <div className="adminInputs">
          <h3>Edit/Delete a product</h3>

          <h4>Delete Here (Warning: Permanent!)</h4>
          <button onClick={this.tryDelete}>Delete</button>

          <ul>
            <li> Images: please type image urls and separate multiple with commas </li>
          </ul>

          <form onSubmit={this.handleSubmit}>
            {this.state.errMsg ? <p className="error">{this.state.errMsg}</p> : null}

            <h4>Edit Here</h4>
            <button disabled={!this.state.canSubmit}>
              Submit
            </button>
            <br />
            {
              validInputs.map((inputField) => {
                return (<>
                  <label>{inputField}</label> <br />
                  <input
                    type="text"
                    value={this.state.inputEdit[inputField]}
                    onChange={e => this.handleChange(e, inputField)}
                  />
                  <br />
                </>)
              })
            }
            <button disabled={!this.state.canSubmit}>
              Submit
            </button>
          </form>
        </div >
      )
    }
  }
}

export default withRouter(EditOrDelete)