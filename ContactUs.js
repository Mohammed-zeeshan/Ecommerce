import React, { useState } from 'react'

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    
  const nameHandler = (event) => {
    setName(event.target.value)
  }
  const emailHandler = (event) => {
    setEmail(event.target.value)
  }
  const phoneHandler = (event) => {
    setPhone(event.target.value)
  }
  
    function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const data = {
      name: name,
      email: email,
      phone: phone,
    };

    addMovieHandler(data)
  }
  async function addMovieHandler(movie) {
    const resonpse = await fetch('https://react-http-9c92c-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'content-Type': 'application/json'
      }
    })
    const data = await resonpse.json();
    console.log(data)
  }
  return (
    <form onSubmit={submitHandler} className='container'>
      <div className=' d-flex justify-content-center'>
        <div className='p-5'>
            <label className='p-2'>Name</label>
            <input type='text' value={name} onChange={nameHandler} />
        </div>
        <div className='p-5'>
            <label className='p-2'>Email</label>
            <input type='text' value={email} onChange={emailHandler} />
        </div>
        <div className='p-5'>
            <label className='p-2'>Phone</label>
            <input type='text' value={phone} onChange={phoneHandler} />
        </div>
      </div>
      <div  className=' d-flex justify-content-center'><button className='btn btn-primary'>submit</button></div>
    </form>
  )
}

export default ContactUs
