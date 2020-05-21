import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './HomeModal.css'
import { Link } from 'react-router-dom'


class HomeModal extends Component {

  state = { show: true }

  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  render() {
    return (
      <main>
        <Modal show={this.state.show} handleClose={this.hideModal} >
          <div className="modalLeft">
            <img
              className="modal-logo1"
              src="https://i.imgur.com/UzEDhSb.png"
              alt="boxed modal logo" />
            <p className="description-left">Bulk goods shipped right from our warehouse, straight to your door</p>

            <button
              className="bulk-button"
              onClick=""
            >
              SHOP BULK
            </button>
          </div>

          <div className="modalRight">
            <img
              className="modal-logo2"
              src="https://i.imgur.com/1To8mkd.png"
              alt="boxed modal logo 2" />
            <p className="description-right">Fresh groceries directly from retail stores, hand-picked by our shoppers</p>
            <button
              className="express-button"
              onClick=""
            >
              SHOP EXPRESS
        </button>

          </div>
        </Modal>
      </main>
    )
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
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


// const container = document.createElement('div');
// document.body.appendChild(container);
// ReactDOM.render(<HomeModal />, container);

export default HomeModal