import React, { Fragment, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { saveCart } from 'redux/actions'

function Header() {
  const productsCart = useSelector((state) => state.listCart.listCart)
  const router = useRouter()
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const redirectCart = () => {
    router.push('/gio-hang')
  }

  useEffect(() => {
    if (localStorage.getItem('products')) {
      dispatch(saveCart(JSON.parse(localStorage.getItem('products'))))
    }
  }, [])

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
          <div className='header__cart' onClick={redirectCart}>
            <span className='cart__noti-number'>{productsCart.length}</span>
            <i className='fas fa-shopping-cart'></i>
            <p>Giỏ hàng</p>
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default Header
