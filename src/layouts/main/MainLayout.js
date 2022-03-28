import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

export default function MainLayout(props) {
  return (
    <div className='container-box'>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </div>
  )
}
