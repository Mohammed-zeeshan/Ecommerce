import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <header>
        <Nav className="justify-content-center">
            <Button variant="light">HOME</Button>{' '}
            <Button variant="light">STORE</Button>{' '}
            <Button variant="light">ABOUT</Button>{' '}
            <Button variant='outline-primary'>cart</Button>{' '}
        </Nav>
    </header>
  )
}

export default Header