import React, { Component } from 'react'
import catStructure from '../../../categories.json'

export default class NavCatMenu extends Component {
  // make a dropdown menu that drops to the right
  // drop down shows categories
  // drop right shows subcategories for each category 
  // default is just a categories button 
  constructor() {
    super()
    this.state = {
      cats: [],
      subcats: [],
      catOpen: false,
      subcatOpen: false
    }
  }

  handleClick = () => {
    // when the main "categories" button is clicked
    // show the categories menu below it 
    const catOpen = !this.state.catOpen
    this.setState({
      catOpen
    })
  }

  handleClickCat = (subcatArr) => {
    // when the category is clicked
    // the subcat menu is toggled
    // and the subcatArr is used to fill in the subcat array 
    const subcatOpen = !this.state.subcatOpen
    this.setState({
      subcats: subcatArr,
      subcatOpen
    })
  }

  render() {
    return (
      <div className="navCatMenu">
        <div className="navCatTextbox"
          onClick={() => { }}
        >
          Categories
          </div>
      </div>
    )
  }
}
