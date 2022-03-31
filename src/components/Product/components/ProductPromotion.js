import React from 'react'
function ProductPromotion() {
  return (
    <div className='produce-promo'>
      <div className='produce-promo__title'>
        <img src='/assets/img/icon-hot-promotion.svg' alt='' />
        <span>Sản Phẩm Khuyến Mãi</span>
      </div>
      <div className='produce-promo__list'>
        <div className='produce-promo__item'>
          <img src='/assets/img/hot-promotion-item-01.png' alt='' />
        </div>
        <div className='produce-promo__item'>
          <img src='assets/img/hot-promotion-item-03.png' alt='' />
        </div>
        <div className='produce-promo__item'>
          <img src='assets/img/hot-promotion-item-02.png' alt='' />
        </div>
      </div>
    </div>
  )
}

export default ProductPromotion
