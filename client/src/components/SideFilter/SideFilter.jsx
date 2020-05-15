import React, { Component } from 'react'





class SideFilter extends Component {

  boxIsChecked = (e) => {
    //console.log(e.target.name)
    const label = e.target.name
    const checked = e.target.checked
    this.props.onClickFilter(this.props.name, checked, label)
  }



  render() {
    //console.log(this.props.choices)
    return (
      <div>

        {/* <lable>Product</lable>
        <select >

          {this.props.choices ? this.props.choices.map(choice => (
            <option value={choice}>{choice}</option>
          ))
            : null
          }

        </select> */}
        <h3>{this.props.title}</h3>

        {this.props.choices ? this.props.choices.map(choice => (
          <>
            <input onChange={this.boxIsChecked} type="checkbox" name={choice}></input>
            <label for={choice}>{choice}</label>
          </>
        ))
          : null
        }
        {/* 
        <input type="checkbox" name="scales" />
        <label for="scales">Filters</label> */}
      </div>
    )
  }
}


export default SideFilter