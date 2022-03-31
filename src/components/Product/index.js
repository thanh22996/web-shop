import PaginationCustom from 'components/admin/components/Pagination'
import React from 'react'
import BannerSlide from './components/BannerSlider'
import ProductPromotion from './components/ProductPromotion'

function ProductComponent(props) {
  return (
    <div className='product-page'>
      <div className='container'>
        <div className='product-page__content'>
          <div className='product-page__left'>
            <SideBarProduct />
            <ProductPromotion />
          </div>
          <div className='product-page__right'>
            <BannerSlide />
            <ProductFilter params={queryParams} onChange={handleFilterChange} />
            {loading ? (
              <ProductLoading />
            ) : iSNotFoundProduct ? (
              <ProductNotFound />
            ) : (
              <>
                <ProductList data={productList} />
                <PaginationCustom />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductComponent
