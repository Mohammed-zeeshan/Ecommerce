import React, { useState } from 'react'
import './MovieForm.module.css'

const MovieForm = () => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('');
    const [date, setDate] = useState('')
    const titleHandler = (event) => {
        setTitle(event.target.value)
    }
    const textHandler = (event) => {
        setText(event.target.value)
    }
    const dateHandler = (event) => {
        setDate(event.target.value)
    }
    const submitFormHandler = (event) => {
        event.preventDefault();
        console.log(title, text, date);
    }
  return (
    <section>
        <div>
            <label>Title</label><br/>
            <input type='text' className='title' value={title} onChange={titleHandler} />
        </div>
        <div>
            <label>Opening Text</label><br/>
            <input type='text' value={text} onChange={textHandler} />
        </div>
        <div>
            <label>Release Date</label><br/>
            <input type='text' value={date} onChange={dateHandler} />
        </div>
        <button onClick={submitFormHandler}>Add Movie</button>
    </section>
  )
}

export default MovieForm;
