import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'

function Header() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <Fragment>
      <header>
        <div className='header container'>
          <Link href='/' className='header__logo'>
            YẾN VUA
          </Link>
          <div className='header__search'>
            <form onSubmit={handleSubmit} className='header__search-main'>
              <input
                // onChange={handleInputChange}
                // value={inputSearch}
                type='text'
                placeholder='Tìm kiếm yến vua...'
              />
              <button type='submit'>
                <i className='fas fa-search'></i>
                <span>Tìm kiếm</span>
              </button>
            </form>
            <div className='header__search-product'>
              {/* <div onClick={handleAll}>Tất cả</div> */}
              <div>Tất cả</div>
            </div>
          </div>
          <div className='header__cart'>
            <span className='cart__noti-number'>0</span>
            <i className='fas fa-shopping-cart'></i>
            <p>Giỏ hàng</p>
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default Header
