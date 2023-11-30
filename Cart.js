import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import classes from './Cart.module.css'
import axios from 'axios'

const Cart = (props) => {
    const [cartItem, setCartItem] = useState([]);
    const getCart = async() => {
        const response = await axios.get('https://crudcrud.com/api/c91bb2a3851844b9af0d7090a3890a75/Cart')
        setCartItem(response.data)
    }
    useEffect(() => {
        getCart();
    }, []);
    let total = 0;
    const cartItems = (
        <ul className={classes['cart-item']}>
            {cartItem.map((item) => (
                <div key={item.id}>
                    <li>Name: {item.candyName} Description: {item.description} Price: {item.price} </li>
                </div>
            ))}
        </ul>
    )
    cartItem.forEach(item => {
        total = total + Number(item.price);
    })
  return (
    <Modal onHideCart={props.onHideCart}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{total}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
}

export default Cart