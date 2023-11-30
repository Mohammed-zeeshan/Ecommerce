import React, { useEffect, useState } from "react";
import CandyForm from "./Components/CandyForm";
import Lists from "./Components/Lists";
import Cart from "./Components/Cart";
import CartProvider from "./Components/CartProvider";
import axios from "axios";

function App() {
  const [item, setItem] = useState([])
  const [cartIsShown, setCartIsShown] = useState(false);
  const addItemHandler = async(names) => {
    await axios.post('https://crudcrud.com/api/c91bb2a3851844b9af0d7090a3890a75/Product',names)
    getItems()
  }
  const getItems = async() => {
    const response = await axios.get('https://crudcrud.com/api/c91bb2a3851844b9af0d7090a3890a75/Product')
    setItem(response.data)
  }
  useEffect(() => {
    getItems()
  })
  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }
  let quantity = 0;
  item.forEach(item => {
      quantity = quantity + Number(item.quantity);
  })
  let context = (
    <p></p>
  )
  if (item.length > 0){
    context = (
      <Lists items={item} />
    )
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <CandyForm details={addItemHandler}  sum={quantity} onShowCart={showCartHandler} />
      {context}
    </CartProvider>
  );
}

export default App;
