import React, { useState } from 'react'

const CandyForm = (props) => {
    const [candyName, setCandyName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const nameInputChangeHandler = (event) => {
        setCandyName(event.target.value);
    }
    const descriptionInputChangeHandler = (event) => {
        setDescription(event.target.value);
    }
    const priceInputChangeHandler = (event) => {
        setPrice(event.target.value);
    }
    const submitForm = (event) => {
        event.preventDefault();
        const data = {
            candyName: candyName,
            description: description,
            price: price,
            id: Math.random().toString(),
        }
        props.details(data)
    }
    
  return (
    <div>
        <form>
            <label>Candy Name: </label>
            <input type='text' value={candyName} onChange={nameInputChangeHandler} required/>
            <label>Description: </label>
            <input type='text' value={description} onChange={descriptionInputChangeHandler} required />
            <label>Price: </label>
            <input type='number' value={price} onChange={priceInputChangeHandler} required />
            <button type='submit' onClick={submitForm} >Add</button>
            <button type='button' onClick={props.onShowCart} items={props.items} >cart <span>{props.sum}</span></button>
        </form>
    </div>
  )
}

export default CandyForm