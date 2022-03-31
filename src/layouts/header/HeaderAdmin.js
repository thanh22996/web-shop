import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'

function HeaderAdmin() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Fragment>
      <header>
        <div
          className='header container'
          style={{ justifyContent: 'space-between' }}
        >
          <Link href='/' className='header__logo'>
            YẾN VUA
          </Link>
          <div
            className='header__search'
            style={{
              color: '#ffde9d',
              fontSize: '30px',
              fontWeight: '700',
            }}
          >
            Admin page
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default HeaderAdmin
