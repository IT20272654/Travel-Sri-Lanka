import React from 'react'
import {Container, Row, Button} from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const nav_links = [
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/#',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  }
]

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <Row>
          <div className='nav_wrapper d-flex align-items-center justify-content-between'>
              {/* ========Logo======== */}
                <div className='logo'>
                  <img src={logo} alt=''/> 
                </div>
              {/* ========Logo End======== */}

              {/* ========Menu Start======== */}
                <div className='navigation'>
                  <ul className="menu d-flex align-items-center gap-5">

                  </ul>
                </div>
              {/* ========Menu End======== */}


          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header
 