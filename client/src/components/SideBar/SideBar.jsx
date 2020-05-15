import React, { Component } from 'react'
import './SideBar.css'
import SideNav from '../SideNav/SideNav'
import SideFilter from '../SideFilter/SideFilter'

class SideBar extends Component {
  render() {
    return (
      <div className="sidebar" >
        <div>
          <SideNav />
        </div>
        <div>
          <h3>Filter</h3>
          <SideFilter
            title={"Product"}
            choices={this.props.typeOfChoices}
            onClickFilter={this.props.onClickFilter}
            name={'typeOfProductFilter'}
          />
          <SideFilter
            title={"Values"}
            choices={this.props.valuesChoices}
            onClickFilter={this.props.onClickFilter}
            name={'valuesFilter'}
          />
          <SideFilter
            title={"Brand"}
            choices={this.props.brandsChoices}
            onClickFilter={this.props.onClickFilter}
            name={'brandsFilter'}
          />
        </div>
      </div>
    )
  }
}



export default SideBar