import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { getDetailAction, saveCart } from 'redux/actions'
import { useDispatch } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'

function DetailProduct(props) {
  const router = useRouter()
  const dispatch = useDispatch()
  const { query } = router
  const [detailProduct, setDetailProduct] = useState({})
  const [quantityPro, setQuantityPro] = useState(1)
  const [productsCart, setProductsCart] = useState([])
  const [stateAddCart, setStateAddCart] = useState(0)
  const toastId = React.useRef(null)

  const getDetailProduct = () => {
    dispatch(
      getDetailAction(query, (status, data) => {
        if (status) {
          setDetailProduct(data.product)
        }
      })
    )
  }

  const addToCart = (product) => {
    const item = {
      ...product,
      quantity: quantityPro,
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

  const changeQuantity = (e) => {
    if (e === 1) {
      if (quantityPro > 1) {
        setQuantityPro(quantityPro - 1)
      }
    } else {
      setQuantityPro(quantityPro + 1)
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

  useEffect(() => {
    getDetailProduct()
  }, [router])

  return (
    <div className='detail-page mt-4'>
      {detailProduct && (
        <div className='container'>
          <div className='row'>
            <div className='col-md-5'>
              <div className='row'>
                <div className='col-sm-12'>
                  <div className='bl-main-img'>
                    <img
                      width={'100%'}
                      src={
                        detailProduct.image
                          ? detailProduct.image
                          : '/assets/imgs/san-pham-2.png'
                      }
                      alt='yenvua'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-7'>
              <div className='bl-infor-product'>
                <div className='top-info'>
                  <p className='title'>
                    {detailProduct.name && detailProduct.name}
                  </p>
                  <div className='category-code d-flex'>
                    <p>
                      <span className='title__name'>Danh mục sản phẩm: </span>
                      <span>Yến vua</span>
                    </p>
                    <p>
                      <span className='title__name'>Mã sản phẩm: </span>
                      <span style={{ color: '#f32723', fontWeight: '600' }}>
                        {query.code}
                      </span>
                    </p>
                  </div>
                </div>
                <p className='bl-price'>
                  <span className='title__name mr-2'>Giá:</span>
                  <span>
                    {detailProduct.price &&
                      new Intl.NumberFormat('de-DE').format(
                        detailProduct.price
                      )}{' '}
                    đ
                  </span>
                </p>
                <p className='bl-status'>
                  <span className='title__name'>Tình trạng: </span>
                  <span>
                    {detailProduct.isActive ? 'Còn hàng' : 'Hết hàng'}
                  </span>
                </p>
                <div className='bl-booking d-flex'>
                  <div className='d-flex bl-quantity mr-4'>
                    <button onClick={() => changeQuantity(1)}>-</button>
                    <span className='px-3'>{quantityPro}</span>
                    <button onClick={() => changeQuantity(2)}>+</button>
                  </div>
                  <button
                    className='btn-book'
                    onClick={() => addToCart(detailProduct)}
                  >
                    Chọn mua
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-5 bl-more-info'>
            <div
              dangerouslySetInnerHTML={{
                __html: `${detailProduct.description}`,
              }}
            />
          </div>
        </div>
      )}
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
    </div>
  )
}

DetailProduct.propTypes = {}

export default DetailProduct
