import React, { useEffect, useState } from 'react'
import CartConfirm from './components/CartConfirm'
import CartItem from './components/CartItem'
import CartTotal from './components/CartTotal'

function CartComponent(props) {
  const [listCart, setListCart] = useState([])
  const [confirmCart, setConfirmCart] = useState(false)

  useEffect(() => {
    setListCart(JSON.parse(localStorage.getItem('products')) || [])
  }, [])
  return (
    <div className='cart-page'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-7 bl-swapper-list'>
            {!confirmCart ? <CartItem listCart={listCart} /> : <CartConfirm />}
          </div>
          <div className='col-md-5'>
            <div className='bl-cart-total'>
              <CartTotal
                confirmCart={confirmCart}
                setConfirmCart={setConfirmCart}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartComponent
