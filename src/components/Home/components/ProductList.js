import React, { useState, useEffect } from 'react'
import ProductItem from './ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { saveCart } from 'redux/actions'
import { toast, ToastContainer } from 'react-toastify'

function ProductList(props) {
  const dispatch = useDispatch()
  const { listProduct } = props
  const [productsCart, setProductsCart] = useState([])
  const [stateAddCart, setStateAddCart] = useState(0)
  const toastId = React.useRef(null)

  const addToCart = (product) => {
    const item = {
      ...product,
      quantity: 1,
    }
    setProductsCart([...productsCart, item])
    setStateAddCart(stateAddCart + 1)

    if (!toast.isActive(toastId.current)) {
      toastId.current = toast.success('Thêm vào giỏ hàng thành công.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      })
    }
  }

  useEffect(() => {
    dispatch(saveCart(productsCart))

    localStorage.setItem('products', JSON.stringify(productsCart))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateAddCart])

  useEffect(() => {
    if (localStorage.getItem('products')) {
      setProductsCart(JSON.parse(localStorage.getItem('products')))
    }
  }, [])

  return (
    <>
      {listProduct.map((item, key) => {
        return (
          <ProductItem addToCart={addToCart} key={item._id} product={item} />
        )
      })}
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </>
  )
}

export default ProductList
