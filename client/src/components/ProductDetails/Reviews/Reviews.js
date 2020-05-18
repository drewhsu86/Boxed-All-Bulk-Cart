import React, { Component } from 'react'
import './Reviews.css'

export default class Reviews extends Component {
  render() {
    return (
      <div className="review-box">
        <div className="review-title">
          <h1 className="product-reviews">Product Reviews</h1>
        </div>
        <div className="one-review">
          <img className="profile-pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsg6KXHm6o4SYhPycSwdsJnlGOWCVyIhWBWcg5y8_pki6coDzG&usqp=CAU" />
          <h1 className="review-title">Amazing!</h1>
          <p className="review-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus urna duis convallis convallis tellus id interdum velit. Faucibus interdum posuere lorem ipsum dolor sit amet. Aenean sed adipiscing diam donec adipiscing. Mi tempus imperdiet nulla malesuada. Arcu dictum varius duis at. Amet commodo nulla facilisi nullam vehicula. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Purus gravida quis blandit turpis cursus in hac. Lobortis feugiat vivamus at augue eget arcu dictum varius.</p>
        </div>

        <div className="one-review">
          <img className="profile-pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKeZ5JnfqSvcUtFCDsGmaNqH0j7Loz14p4zSLogIfYstu2Hd-f&usqp=CAU" />
          <h1 className="review-title">Tasty!</h1>
          <p className="review-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus sit amet volutpat consequat mauris nunc congue nisi. Odio ut sem nulla pharetra diam. Facilisi cras fermentum odio eu. Cras pulvinar mattis nunc sed blandit. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Ut consequat semper viverra nam. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Quis blandit turpis cursus in. Laoreet id donec ultrices tincidunt arcu non sodales. Urna duis convallis convallis tellus id interdum velit laoreet id. Nunc id cursus metus aliquam. Dui nunc mattis enim ut. Sed euismod nisi porta lorem mollis. Risus quis varius quam quisque id diam vel quam elementum.</p>
        </div>

        <div className="one-review">
          <img className="profile-pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhhklLpQnJpmdcRWm07dxiiIp22D9ZaFlhzNF5S7EMPxEinocq&usqp=CAU" />
          <h1 className="review-title">The Worst!</h1>
          <p className="review-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Massa sed elementum tempus egestas sed sed. Eget duis at tellus at urna condimentum mattis.</p>
        </div>
      </div>
    )
  }
}
