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
          <h2>Filters</h2>
          <SideFilter
            title={"Product"}
            choices={this.props.typeOfChoices}
            onClickFilter={this.props.onClickFilter}
            name={'typeOfProduct'}
          />
          <SideFilter
            title={"Values"}
            choices={this.props.valuesChoices}
            onClickFilter={this.props.onClickFilter}
            name={'values'}
          />
          <SideFilter
            title={"Brand"}
            choices={this.props.brandsChoices}
            onClickFilter={this.props.onClickFilter}
            name={'brands'}
          />
        </div>
      </div>
    )
  }
}



export default SideBar