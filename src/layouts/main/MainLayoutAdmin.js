import Sidebar from 'layouts/sidebar'
import React from 'react'
import Header from '../header/HeaderAdmin'

export default function MainLayout(props) {
  return (
    <div className='container-box'>
      <Header></Header>
      <Sidebar />
      <div className='content-admin'>{props.children}</div>
    </div>
  )
}
