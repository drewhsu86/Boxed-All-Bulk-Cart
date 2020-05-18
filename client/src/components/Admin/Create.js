import React, { Component } from 'react'


export default class Create extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputCreate: {
        name: '',
        images: [],
        description: '',
        price: '',
        rating: 3,
        stock: 0,
        categories: '',
        subcategories: '',
        typeOfProduct: '',
        values: '',
        brands: ''
      },
      inputNumbers: ['rating', 'stock']  // names of inputs that are numbers in the schema
    }
  }

  // ==============
  // methods
  // ==============

  handleChange = (e, field) => {
    // uses the field name to update the state 
    // if it's a number we need to convert it 

    let val = e.target.value

    if (this.state.inputNumbers.includes(field)) {
      val = Number(val)
    }

    let newInputCreate = this.state.inputCreate
    newInputCreate[field] = val
    this.setState({
      inputCreate: newInputCreate
    })
  }

  // ==============
  // render
  // ==============
  render() {
    // grab the keys from inputCreate
    // to map our form inputs 
    const keys = Object.keys(this.state.inputCreate)
    console.log(keys)
    return (
      <div>
        <form>
          {
            keys.map((inputField) => {
              return (<>
                <label>{inputField}</label> <br />
                <input
                  type="text"
                  value={this.state.inputCreate[inputField]}
                />
                <br />
              </>)
            })
          }
        </form>
      </div>
    )
  }
}
