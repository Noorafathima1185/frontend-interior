import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import headerlogo from '../assets/Interior-Insight-logo.png'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  return (
    <>
      <div>
        <Navbar className="row p-4 bg-warning">
          <Container>
            <Navbar.Brand className='text-light fs-3 ms-5'>
              <img
                alt=""
                src={headerlogo}
                height="60"
                className='me-5'
              />
            </Navbar.Brand>
            <button className='btn btn-success me-5'><FontAwesomeIcon icon={faPowerOff} className='me-2' />Login</button>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default Header