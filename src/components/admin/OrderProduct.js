import React, { useEffect, useState } from 'react'
import PaginationCustom from './components/Pagination'
import { useDispatch } from 'react-redux'
import { getListOrderAdminAction } from 'redux/actions'

function OrderProduct(props) {
  const dispatch = useDispatch()
  const [orderProduct, setOrderProduct] = useState([])

  useEffect(() => {
    dispatch(
      getListOrderAdminAction({}, (status, data) => {
        // console.log('data product admin: ', data)
        setOrderProduct(data.orders)
      })
    )
  }, [])

  return (
    <div className='content-page'>
      {/* Start content */}
      <div className='content'>
        <div className='container-fluid'>
          <div className='page-title-box'>
            <div className='row align-items-center'>
              <div className='col-sm-6'>
                <h4 className='page-title'>Danh sách sản phẩm</h4>
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <a href='javascript:void(0);'>
                      <i className='mdi mdi-home-outline' />
                    </a>
                  </li>
                  <li className='breadcrumb-item'>
                    <a href='javascript:void(0);'>Admin</a>
                  </li>
                  <li className='breadcrumb-item active'>Danh sách sản phẩm</li>
                </ol>
              </div>
              <div className='col-sm-6'>
                <div className='float-right d-none d-md-block'>
                  <div className='dropdown'>
                    <button
                      className='btn btn-primary dropdown-toggle arrow-none waves-effect waves-light'
                      type='button'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      <i className='mdi mdi-settings mr-2' /> Settings
                    </button>
                    <div className='dropdown-menu dropdown-menu-right'>
                      <a className='dropdown-item' href='#'>
                        Action
                      </a>
                      <a className='dropdown-item' href='#'>
                        Another action
                      </a>
                      <a className='dropdown-item' href='#'>
                        Something else here
                      </a>
                      <div className='dropdown-divider' />
                      <a className='dropdown-item' href='#'>
                        Separated link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>{' '}
            {/* end row */}
          </div>
          {/* end page-title */}
          <div className='row'>
            <div className='col-12'>
              <div className='card'>
                <div className='card-body'>
                  <div className='table-responsive'>
                    <table
                      id='datatable'
                      className='table table-striped dt-responsive nowrap table-vertical'
                      style={{
                        borderCollapse: 'collapse',
                        borderSpacing: 0,
                        width: '100%',
                      }}
                    >
                      <thead>
                        <tr>
                          <th>Hình ảnh</th>
                          <th>Tên sản phẩm</th>
                          <th>Ngày sửa đổi</th>
                          <th>Giá</th>
                          <th>Tồn kho</th>
                          <th>Sửa/xóa</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderProduct &&
                          orderProduct.map((item) => {
                            return (
                              <tr>
                                <td className='product-list-img'>
                                  <img
                                    width={'50px'}
                                    src={item.image}
                                    className='img-fluid thumb-md rounded'
                                    alt='tbl'
                                  />
                                </td>
                                <td>
                                  <p className='m-0 font-14'>{item.name}</p>
                                </td>
                                <td>{item.createdAt}</td>
                                <td>{item.price}</td>
                                <td>
                                  <div
                                    className='progress'
                                    style={{ height: '5px' }}
                                  >
                                    <div
                                      className='progress-bar bg-danger'
                                      role='progressbar'
                                      style={{ width: '25%' }}
                                      aria-valuenow={25}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                </td>
                                <td>
                                  <a
                                    href='javascript:void(0);'
                                    className='mr-3 text-primary'
                                    data-toggle='tooltip'
                                    data-placement='top'
                                    title
                                    data-original-title='Edit'
                                  >
                                    <i className='fas fa-edit'></i>
                                  </a>
                                  <a
                                    href='javascript:void(0);'
                                    className='text-danger'
                                    data-toggle='tooltip'
                                    data-placement='top'
                                    title
                                    data-original-title='Delete'
                                  >
                                    <i className='fas fa-trash-alt'></i>
                                  </a>
                                </td>
                              </tr>
                            )
                          })}
                      </tbody>
                    </table>
                    <PaginationCustom />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end row */}
        </div>
        {/* container-fluid */}
      </div>
    </div>
  )
}

export default OrderProduct
