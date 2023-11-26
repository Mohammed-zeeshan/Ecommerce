import React, { useContext } from 'react'
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';
import CartContext from './Store/cart-context';

const Cart = (props) => {
    const cartctx = useContext(CartContext)
    let total = 0;
    const purchaseHander = (event) => {
        event.preventDefault();
        alert('Thanks for the purchase')
    }
    cartctx.items.forEach((item) => {
        total = total + item.price;
    })
  return (
    <Modal className='modal' show={props.button} onHide={props.func}>
        <Modal.Header>
        <h1>CART</h1>
        <CloseButton onClick={props.func}/>
        </Modal.Header>
        <Modal.Body>
        <div className='d-flex justify-content-around'>
            <label>ITEM</label>
            <label>PRICE</label>
            <label>QUANTITY</label>
        </div>
        {cartctx.items.map(item => (
        <div><img src={item.image} className='img-thumbnail w-25' alt='Product' rounded /><div className='d-flex justify-content-around'><label>{item.title}</label><label>{item.price}</label><label>{item.quantity}</label></div><button className="btn btn-primary">Remove</button> </div>
    ))}
    <div className='d-flex justify-content-around'>
        <h3>Total: ${total}</h3>
        <button className='btn btn-primary' onClick={purchaseHander}>PURCHASE</button>
    </div>
    </Modal.Body>
</Modal>
  )
}

export default Cart
