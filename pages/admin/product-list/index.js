import React from 'react'
import PropTypes from 'prop-types'
import ProductList from 'components/admin/ListProduct'
import Main from 'layouts/main/MainLayoutAdmin'

function index(props) {
  return (
    <Main>
      <ProductList />
    </Main>
  )
}

index.propTypes = {}

export default index
