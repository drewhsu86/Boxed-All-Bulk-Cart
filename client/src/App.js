import React from 'react';
import './App.css';
import StarRating from './components/StarRating'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      rating: 3
    }
  }

  handleRating = (e) => {
    let rating = e.target.value
    if (rating > 5) { rating = 5 }
    if (rating < 0) { rating = 0 }
    this.setState({
      rating
    })
  }

  render() {
    return (
      <div className="App" >
        <input type="number" value={this.state.rating} onChange={this.handleRating} />
        <StarRating rating={this.state.rating} />
      </div>
    )
  }
}

export default App;
