import React from 'react'
import PropTypes from 'prop-types'
import PaginationCustom from './components/Pagination'

ListProduct.propTypes = {}

function ListProduct(props) {
  return (
    <div className='content-page'>
      {/* Start content */}
      <div className='content'>
        <div className='container-fluid'>
          <div className='page-title-box'>
            <div className='row align-items-center'>
              <div className='col-sm-6'>
                <h4 className='page-title'>Products List</h4>
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <a href='javascript:void(0);'>
                      <i className='mdi mdi-home-outline' />
                    </a>
                  </li>
                  <li className='breadcrumb-item'>
                    <a href='javascript:void(0);'>Ecommerce</a>
                  </li>
                  <li className='breadcrumb-item active'>Products List</li>
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
                          <th>Image</th>
                          <th>Product Name</th>
                          <th>Added Date</th>
                          <th>Amount</th>
                          <th>No. of Units</th>
                          <th>Stock</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className='product-list-img'>
                            <img
                              src='assets/images/products/1.jpg'
                              className='img-fluid thumb-md rounded'
                              alt='tbl'
                            />
                          </td>
                          <td>
                            <h6 className='mt-0 mb-1'>Gray belt watch</h6>
                            <p className='m-0 font-14'>
                              Sed ut perspiciatis unde omnis iste.
                            </p>
                          </td>
                          <td>22/05/2017</td>
                          <td>$521</td>
                          <td>5841</td>
                          <td>
                            <div className='progress' style={{ height: '5px' }}>
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
                              <i className='mdi mdi-pencil font-18' />
                            </a>
                            <a
                              href='javascript:void(0);'
                              className='text-danger'
                              data-toggle='tooltip'
                              data-placement='top'
                              title
                              data-original-title='Delete'
                            >
                              <i className='mdi mdi-close font-18' />
                            </a>
                          </td>
                        </tr>
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

export default ListProduct
