import React, { Component } from 'react'
import api from '../../services/apiConfig'
import catStructure from '../../categories.json'

export default class Create extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputCreate: this.resetCreate(),
      inputNumbers: ['rating', 'stock'],  // names of inputs that are numbers in the schema
      errMsg: '',
      canSubmit: false,
      categories: catStructure,
      subcategories: []
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

    // field is the name of each attribute in inputCreate
    let newInputCreate = this.state.inputCreate
    newInputCreate[field] = val
    this.setState({
      inputCreate: newInputCreate
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
    const newProduct = this.state.inputCreate

    // need to change images into array 
    // we assume image urls split by either "," or ", "
    // 1. remove spaces
    // 2. split by comma and that is an array format 
    const imagesNoSpaces = newProduct.images.split(' ').join('')
    newProduct.images = imagesNoSpaces.split(',')

    try {
      const response = await api.post('/products', newProduct)
      console.log(response)

      // if successful we reset inputCreate and 
      // send a success message 
      this.setState({
        inputCreate: this.resetCreate(),
        errMsg: "Product added"
      })

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    } catch (er) {
      console.log(er)
      this.setState({
        errMsg: er.message
      })
    }
  }

  // reset the object for create and return an object 
  resetCreate = () => {
    return {
      name: '',
      images: [],
      description: '',
      price: '',
      rating: 0,
      stock: 0,
      categories: '',
      subcategories: '',
      typeOfProduct: '',
      values: '',
      brands: ''
    }
  }

  // true or false - can form be submitted?
  // check inputCreate to see if any required field is empty 
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
      if (!this.state.inputCreate[field]) return false
    })

    return true
  }

  // fill the subcategories based on imported json (catStructure)
  fillSubcat = (catUrl) => {
    let subcat
    catStructure.forEach(cat => {
      if (catUrl === cat.url) {
        subcat = cat.subcat
      }
    })
    this.setState({
      subcategories: subcat
    })
  }

  // on change for category dropdown 
  handleChangeCat = (e) => {
    const catUrl = e.target.value
    // find the element in the array with matching url 
    this.fillSubcat(catUrl)
    this.handleChange(e, 'categories')
  }

  // ==============
  // render
  // ==============
  render() {
    // grab the keys from inputCreate
    // to map our form inputs 
    const keys = Object.keys(this.state.inputCreate)
    // console.log(this.state)
    return (
      <div className="adminInputs">
        <h3>Add a product</h3>
        <ul>
          <li> Images: please type image urls and separate multiple with commas </li>
        </ul>

        <form onSubmit={this.handleSubmit}>
          {this.state.errMsg ? <p className="error">{this.state.errMsg}</p> : null}

          <h4>Fill In Fields, Then Submit To Create</h4>
          <button disabled={!this.state.canSubmit}>
            Submit
          </button>
          <br />
          {
            keys.map((inputField) => {
              return (<>
                <label>{inputField}</label> <br />
                {!['categories', 'subcategories'].includes(inputField) ? <input
                  type="text"
                  value={this.state.inputCreate[inputField]}
                  onChange={e => this.handleChange(e, inputField)}
                /> : (
                    <select onChange={inputField === 'categories' ? this.handleChangeCat : (e) => { this.handleChange(e, inputField) }}>
                      {
                        inputField === 'categories' ? (
                          this.state.categories.map(cat => {
                            return <option value={cat.url}>{cat.name !== 'All Bulk' ? cat.name : 'Choose a category'}</option>
                          })
                        ) : (
                            this.state.subcategories.map((subcat, ind) => {
                              return <option value={subcat.url}>{ind === 0 ? 'Choose a subcategory' : subcat.name}</option>
                            })
                          )
                      }
                    </select>
                  )}
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
