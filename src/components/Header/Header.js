import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (

    <>

      <Navbar bg="info" variant="dark">
        <Container>
          <Navbar.Brand >
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              <b>Blog-Post</b>
            </Link>

          </Navbar.Brand>
          <Button type='button' bg="light" variant="light">

            <Link to="/add-blog" style={{ textDecoration: 'none',color:'black' }}>
              <b>Add New Post</b>
            </Link>
          </Button>
        </Container>
      </Navbar>
      <br />
    </>

  )
}

export default Header;




