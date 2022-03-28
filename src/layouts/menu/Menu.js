import React from 'react'
import PropTypes from 'prop-types'
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap'

function Menu(props) {
  return (
    <div className='bl-menu d-flex'>
      <div className='bl-search-form d-flex'></div>
      <div className='bl-list-menu d-flex'>
        <div>TRANG CHỦ</div>
        <div>SẢN PHẨM</div>
      </div>
      <div className='bl-shop-cart d-flex'></div>
    </div>
  )
}

Menu.propTypes = {}

export default Menu
