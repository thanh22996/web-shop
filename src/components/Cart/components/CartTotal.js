import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function CartTotal(props) {
  const { confirmCart, setConfirmCart } = props
  const productsCart = useSelector((state) => state.listCart.listCart)
  const [totalPrice, setTotalPrice] = useState(0)

  const getListCart = () => {
    if (productsCart) {
      let totalProduct = 0
      productsCart.forEach(
        (element) => (totalProduct += element.price * element.quantity)
      )
      // setTotalPrice(cartList || [])
      setTotalPrice(totalProduct)
    }
  }

  const onConfirm = () => {
    setConfirmCart(true)
  }

  useEffect(() => {
    getListCart()
  }, [])

  return (
    <>
      <div className='checkout'>
        <p className='checkout__save'>
          <span>Tạm Tính:</span>
          <span>{new Intl.NumberFormat('de-DE').format(totalPrice)} đ</span>
        </p>
        <p className='mb-2 checkout__save'>
          <span>Thành Tiền:</span>{' '}
          <span
            style={{
              color: '#f32723',
              fontWeight: '700',
              fontSize: '18px',
            }}
          >
            {new Intl.NumberFormat('de-DE').format(totalPrice)} đ
          </span>
        </p>
        <span>(Đã bao gồm VAT nếu có)</span>
      </div>
      {!confirmCart && <button onClick={onConfirm}>TIẾN HÀNH ĐẶT HÀNG</button>}
      <button
        className='back'
        // onClick={() => {
        //   history.goBack()
        // }}
      >
        QUAY LẠI
      </button>
    </>
  )
}

export default CartTotal
