import React, { Component } from 'react'
import './CheckoutModal.css'
import { Link } from 'react-router-dom'
import StarRating from '../../StarRating'


const item = require('../../RelatedItemsDummyData.json')


class CheckoutModal extends Component {

  state = { show: false }

  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  componentDidMount() {
    this.props.setModal(this.showModal)
    console.log('abc')
  }



  render() {
    return (
      <div className="checkout-modal-container">
        <main>
          <Modal show={this.state.show} handleClose={this.hideModal} >
            <div className="checkout-modal-title">
              <p className="checkout-top">If this item is not in stock, would you like us to send a replacement?</p>
            </div>

            <div className="checkout-modal-body">
              {item.map(item => {
                return (
                  <>
                    <div className="related-container">
                      <div key={item.name} className="related-box">
                        <div className="checkout-item-one">
                          <img className="checkout-related-image" alt="related item image" src={item.images[0]} />
                          <div className="checkout-item-info">
                            <h1 className="checkout-item-title">{item.name}</h1>
                            <h2 className="item-size">{item.size}</h2>
                            <h1 className="related-price">${item.price}</h1>
                            <StarRating className="rating" rating={item.rating} />
                          </div>
                          <button className="checkout-modal-button" >Select</button>

                        </div>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>

            <div className="checkout-modal-bottom">
              <button
                className="refund-button"
                onClick={() => { this.props.handleAddToCart(); this.hideModal();}}
              >
                No, thank you. Refund me instead.
        </button>
            </div>
          </Modal>
        </main>
      </div>
    )
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='checkout-modal-main'>
        {children}
        <button className="button-close"
          onClick={handleClose}
        >
          x
        </button>

      </section>
    </div>
  );
};




export default CheckoutModal