import React from 'react'
import Link from 'next/link'

function ProductItem(props) {
  const { product, addToCart } = props
  return (
    <>
      {product && (
        <div className='col-custom'>
          <i
            onClick={() => addToCart(product)}
            className='fas fa-shopping-cart'
          ></i>
          <Link href={`/chi-tiet?code=${product.code}`}>
            <div>
              <img src={product.image} height='80%' alt='yenvua' />
              <img
                className='icon-freeship'
                src='/assets/img/freeship-icon.svg'
                alt='free ship'
              />
              <p className='bl-price'>
                <span>Giá: </span>
                <span>
                  {product.price &&
                    new Intl.NumberFormat('de-DE').format(product.price)}{' '}
                  đ
                </span>
              </p>
              <p className='title'>{product.name}</p>
            </div>
          </Link>
        </div>
      )}
    </>
  )
}

export default ProductItem
