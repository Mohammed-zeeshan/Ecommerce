import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import CloseButton from 'react-bootstrap/CloseButton';

const Header = () => {
    const cartElements = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 2,
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 3,
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        }
        
    ]
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);
  return (
    <>
        <Nav expand="lg" className="justify-content-center bg-body-tertiary">
            <Button variant="light">HOME</Button>{' '}
            <Button variant="light">STORE</Button>{' '}
            <Button variant="light">ABOUT</Button>{' '}
            <Button variant='outline-primary' onClick={handleShow}>cart</Button>
        </Nav>
        <Modal show={show} onHide={handleHide}>
            <Modal.Header>
            <Nav expand="lg" className="justify-content-center"><h1>CART</h1></Nav>
            <CloseButton onClick={handleHide}/>
            </Modal.Header>
            <Modal.Body>
            <label>ITEM</label>
            <label>PRICE</label>
            <label>QUANTITY</label>
            {cartElements.map(item => (
                <div><Image src={item.imageUrl} rounded /> {item.title}  {item.price}  {item.quantity} <Button variant="primary">Remove</Button> </div>
            ))}
            </Modal.Body>
            <Modal.Footer>
                <Nav expand="lg" className='justify-content-center'><Button variant='primary'>PURCHASE</Button></Nav>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default Header
