import React from 'react'
import PropTypes from 'prop-types'
import DetailProduct from 'components/DetailProduct'
import Main from 'layouts/main/MainLayout'

function index(props) {
  return (
    <Main>
      <DetailProduct />
    </Main>
  )
}

index.propTypes = {}

export default index
