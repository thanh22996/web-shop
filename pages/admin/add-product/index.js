import React from 'react'
import PropTypes from 'prop-types'
// import UploadProduct from 'components/admin/UploadProduct'
import dynamic from 'next/dynamic'
// const UploadProduct = React.lazy(() => import('components/admin/UploadProduct'))
const UploadProduct = dynamic(() => import('components/admin/UploadProduct'), {
  ssr: false,
})
import Main from 'layouts/main/MainLayoutAdmin'

function index(props) {
  return (
    <Main>
      <UploadProduct />
    </Main>
  )
}

index.propTypes = {}

export default index
