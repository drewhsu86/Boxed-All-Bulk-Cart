import React, { Component } from 'react'
import './NavCatMenu.css'
import catStructure from '../../../categories.json'
import { Link } from 'react-router-dom'

export default class NavCatMenu extends Component {
  // make a dropdown menu that drops to the right
  // drop down shows categories
  // drop right shows subcategories for each category 
  // default is just a categories button 
  constructor() {
    super()
    this.state = {
      cat: '',
      subcats: [],
      catOpen: false,
      subcatOpen: false
    }
  }

  handleClick = () => {
    // when the main "categories" button is clicked
    // show the categories menu below it 
    // also turns the subcats off 
    const catOpen = !this.state.catOpen
    this.setState({
      catOpen,
      subcatOpen: false
    })
  }

  handleClickCat = (cat, subcatArr) => {
    // when the category is clicked
    // the subcat menu is toggled if you click the same cat 
    // and the subcatArr is used to fill in the subcat array 
    const subcatOpen = !this.state.subcatOpen
    const prevCat = this.state.cat
    this.setState({
      cat,
      subcats: subcatArr,
      subcatOpen: prevCat !== cat
    })
  }

  handleClickSubcat = () => {
    // when we click to go to another page we close the menu 
    this.setState({
      catOpen: false,
      subcatOpen: false
    })
  }

  render() {
    return (
      <div className="navCatMenu">
        <div className="navCatTextbox"
          onClick={() => { this.handleClick() }}
        >
          Categories
        </div>
        <div className="navCatHolder">
          {/* if catOpen then show the vertical menu */}
          {
            this.state.catOpen ? (
              <div className="navCatDropdown">
                <div className="navCatVertical">
                  {
                    catStructure.map((category, ind) => {
                      return category.name === "All Bulk" ? (
                        <Link to="/products">
                          <div className="navCatTextbox option"
                            key={ind}
                            onClick={this.handleClickSubcat}
                          >
                            All Bulk
                            </div>
                        </Link>
                      ) : (<div className="navCatTextbox option"
                        onClick={() => {
                          this.handleClickCat(category.url, category.subcat)
                        }}
                        key={ind}
                      >
                        {category.name} <span>{`>`}</span>
                      </div>)
                    })
                  }
                </div>
                {/* if subcatOpen then show the horizontal menu */}
                {
                  this.state.subcatOpen && this.state.subcats.length > 0 ? (
                    <div className="navCatHorizontal">
                      {
                        this.state.subcats.map((subcategory, ind) => {
                          return (
                            <Link to={`/products/${this.state.cat}/${subcategory.url}`} onClick={this.handleClickSubcat}>
                              <div className="navCatTextbox option"
                                key={ind}
                              >
                                {subcategory.name}
                              </div>
                            </Link>)
                        })
                      }
                    </div>
                  ) : null
                }
              </div>) : null
          }
        </div>
      </div>
    )
  }
}
