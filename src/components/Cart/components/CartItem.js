import React from 'react'

function CartItem(props) {
  const { listCart } = props
  console.log('list cart: ', listCart)
  return (
    <div className='bl-list-cart'>
      <div className='bl-total-item'>
        <p>Giỏ hàng</p>
        <p>({listCart.length} sản phẩm)</p>
      </div>
      {listCart &&
        listCart.map((item) => {
          console.log(item)
          return (
            <div className='row bl-list-cart__item mb-3' key={item.id}>
              <div className='col-md-8 d-flex'>
                <div className='bl-img'>
                  <img
                    style={{ maxWidth: '100px' }}
                    src='/assets/imgs/san-pham-2.png'
                    alt='yenvua'
                  />
                </div>
                <div className='info ml-3'>
                  <div className='title'>{item.name}</div>
                  <div className='price'>
                    {new Intl.NumberFormat('de-DE').format(item.price)} đ
                  </div>
                  <div className='count d-flex'>Số lượng: {item.quantity}</div>
                </div>
              </div>
              <div className='col-md-4 bl-total'>
                <div className='title-total'>Thành tiền</div>
                <div className='total-price'>
                  {new Intl.NumberFormat('de-DE').format(
                    item.price * item.quantity
                  )}{' '}
                  đ
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default CartItem
