import React from 'react'
import PropTypes from 'prop-types'
// import UploadProduct from 'components/admin/UploadProduct'
import dynamic from 'next/dynamic'
// const UploadProduct = React.lazy(() => import('components/admin/UploadProduct'))
const UploadProduct = dynamic(() => import('components/admin/UploadProduct'), {
  ssr: false,
})

function index(props) {
  return (
    <div>
      <UploadProduct />
    </div>
  )
}

index.propTypes = {}

export default index
