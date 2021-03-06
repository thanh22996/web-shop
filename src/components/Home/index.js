import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getListProduct, getListCategory } from 'redux/actions'
import { useDispatch } from 'react-redux'
import ProductList from './components/ProductList'
import SlideProduct from './components/SlideProduct'
import PaginationCustom from 'components/admin/components/Pagination'

function Test() {
  const dispatch = useDispatch()
  const router = useRouter()
  const [listPd, setListPd] = useState([])
  const [listCategories, setListCategories] = useState([])
  const [listProductByCategory, setListProductByCategory] = useState({})
  const handleBooking = (e) => {
    e.preventDefault()
    router.push('chi-tiet')
  }

  const getProduct = () => {
    dispatch(
      getListProduct({}, (status, data) => {
        if (status) {
          setListPd(data.products)
        }
      })
    )
  }

  const getCattegoryList = () => {
    dispatch(
      getListCategory({}, (status, data) => {
        if (status) {
          setListCategories(data.categories)
        }
      })
    )
  }

  useEffect(() => {
    getProduct()
    getCattegoryList()
  }, [])

  // const

  return (
    <div className='bl-home'>
      <div className='bl-banner'>
        <div className='container'>
          <div className='row custom-row'>
            <div className='col-md-8'>
              <img
                className='image-banner'
                width={'100%'}
                height={'100%'}
                src='/assets/imgs/top-banner.png'
                alt='banner'
              />
            </div>
            <div className='col-md-4'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='icon__item'>
                    <img
                      src='/assets/img/customer-service-icon.svg'
                      alt='customer service logo'
                    />
                    <p>Tư vấn mua hàng</p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='icon__item icon__100'>
                    <img
                      src='/assets/img/percent-green-icon.svg'
                      alt='customer service logo'
                    />
                    <p>Sản phẩm chính hãng</p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='icon__item'>
                    <img
                      src='/assets/img/delivery-green-icon.svg'
                      alt='customer service logo'
                    />
                    <p>Giao hàng toàn quốc</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bl-content'>
        <div className='container'>
          <div className='bl-prominent'>
            <div className='row row-custom'>
              <span>Tất cả các sản phẩm</span>
              <span>Xem thêm {'>'}</span>
            </div>
            <div className='row'>
              <ProductList listProduct={listPd} />
            </div>
          </div>
          {/* <PaginationCustom /> */}
        </div>
        <div className='bl-today'>
          <div className='container'>
            <div className='row title'>Sản phẩm nỗi bật</div>
            <div className='row'>
              <div className='col-md-8'>
                <SlideProduct listProduct={listPd} />
              </div>
              <div className='col-md-4 text-center'>
                <img
                  width={'80%'}
                  src='/assets/img/feature-product-banner.png'
                  alt='promote'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='bl-selling-product'>
            <div className='row row-custom'>
              <span>Sản phẩm bán chạy</span>
              <span>Xem thêm {'>'}</span>
            </div>
            <div className='row'>
              <ProductList listProduct={listPd} />
            </div>
          </div>
          {/* <PaginationCustom /> */}
        </div>
      </div>
    </div>
  )
}

export default Test
