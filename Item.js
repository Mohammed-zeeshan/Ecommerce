import React from 'react'
import axios from 'axios';

const Item = (props) => {
    const onefun = async(event) => {
        event.preventDefault();
        await axios.post('https://crudcrud.com/api/c91bb2a3851844b9af0d7090a3890a75/Cart',({...data,quantity: '1'}))
    }
    const twofun = async(event) => {
        event.preventDefault();
        await axios.post('https://crudcrud.com/api/c91bb2a3851844b9af0d7090a3890a75/Cart',({...data,quantity: '2'}))
    }
    const threefun = async(event) => {
        event.preventDefault();
        await axios.post('https://crudcrud.com/api/c91bb2a3851844b9af0d7090a3890a75/Cart',({...data,quantity: '3'}))
    }
    const data = {
        candyName: props.candyName,
        description: props.description,
        price: props.price, 
        id: Math.random().toString()
    }
  return (
    <div>
        <div>{props.children} <button onClick={onefun}>One</button><button onClick={twofun}>Two</button><button onClick={threefun}>Three</button></div>
    </div>
  )
}

export default Item