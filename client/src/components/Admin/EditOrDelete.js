import React, { Component } from 'react'
import api from '../../services/apiConfig'

export default class EditOrDelete extends Component {
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
    const imagesNoSpaces = newProduct.images.split(' ').join('')
    newProduct.images = imagesNoSpaces.split(',')

    // API call 
    const response = await api.post(`/products/${this.props.match.params.id}`, newProduct)
    console.log(response)
  }

  // true or false - can form be submitted?
  // check inputEdit to see if any required field is empty 
  // will only check this for strings 
  // numbers can't be negative 
  canSubmit = () => {
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
      const keys = Object.keys(this.state.inputEdit)
      // console.log(this.state)
      return (
        <div>
          <h3>Edit a product</h3>
          <ul>
            <li> Images: please type image urls and separate multiple with commas </li>
          </ul>

          <form onSubmit={this.handleSubmit}>
            {this.state.errMsg ? <p className="error">{this.state.errMsg}</p> : null}
            {
              keys.map((inputField) => {
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

