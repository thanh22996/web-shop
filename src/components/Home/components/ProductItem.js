import React from 'react'

function ProductItem(props) {
  return (
    <div className='col-custom'>
      <img src='/assets/imgs/san-pham-2.png' alt='yenvua' />
      <img
        className='icon-freeship'
        src='/assets/img/freeship-icon.svg'
        alt='free ship'
      />
      <i className='fas fa-shopping-cart'></i>
      <p className='title'>Yến chưng đông trùng hạ thảo</p>
    </div>
  )
}

export default ProductItem
