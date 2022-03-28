import React from 'react'
import PropTypes from 'prop-types'

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
                        <tr>
                          <td className='product-list-img'>
                            <img
                              src='assets/images/products/2.jpg'
                              className='img-fluid thumb-md rounded'
                              alt='tbl'
                            />
                          </td>
                          <td>
                            <h6 className='mt-0 mb-1'>Riverston Glass Chair</h6>
                            <p className='m-0 font-14'>
                              natus error sit voluptatem doloremque.
                            </p>
                          </td>
                          <td>28/03/2017</td>
                          <td>$210</td>
                          <td>841</td>
                          <td>
                            <div className='progress' style={{ height: '5px' }}>
                              <div
                                className='progress-bar bg-success'
                                role='progressbar'
                                style={{ width: '85%' }}
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
                        <tr>
                          <td className='product-list-img'>
                            <img
                              src='assets/images/products/3.jpg'
                              className='img-fluid thumb-md rounded'
                              alt='tbl'
                            />
                          </td>
                          <td>
                            <h6 className='mt-0 mb-1'>
                              Trex Outdoor Furniture Cape
                            </h6>
                            <p className='m-0 font-14'>
                              Nemo enim ipsam voluptatem quia.
                            </p>
                          </td>
                          <td>22/05/2017</td>
                          <td>$652</td>
                          <td>120</td>
                          <td>
                            <div className='progress' style={{ height: '5px' }}>
                              <div
                                className='progress-bar bg-danger'
                                role='progressbar'
                                style={{ width: '35%' }}
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
                        <tr>
                          <td className='product-list-img'>
                            <img
                              src='assets/images/products/4.jpg'
                              className='img-fluid thumb-md rounded'
                              alt='tbl'
                            />
                          </td>
                          <td>
                            <h6 className='mt-0 mb-1'>3 color belt watch</h6>
                            <p className='m-0 font-14'>
                              Dolor sit consec te imperdiet iaculis.
                            </p>
                          </td>
                          <td>11/05/2017</td>
                          <td>$85</td>
                          <td>320</td>
                          <td>
                            <div className='progress' style={{ height: '5px' }}>
                              <div
                                className='progress-bar bg-info'
                                role='progressbar'
                                style={{ width: '65%' }}
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
                        <tr>
                          <td className='product-list-img'>
                            <img
                              src='assets/images/products/5.jpg'
                              className='img-fluid thumb-md rounded'
                              alt='tbl'
                            />
                          </td>
                          <td>
                            <h6 className='mt-0 mb-1'>Classic Company watch</h6>
                            <p className='m-0 font-14'>
                              Quis autem vel eum iure reprehenderit qu.
                            </p>
                          </td>
                          <td>18/04/2017</td>
                          <td>$8512</td>
                          <td>201</td>
                          <td>
                            <div className='progress' style={{ height: '5px' }}>
                              <div
                                className='progress-bar bg-success'
                                role='progressbar'
                                style={{ width: '79%' }}
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
                        <tr>
                          <td className='product-list-img'>
                            <img
                              src='assets/images/products/6.jpg'
                              className='img-fluid thumb-md rounded'
                              alt='tbl'
                            />
                          </td>
                          <td>
                            <h6 className='mt-0 mb-1'>Shine Company Chair</h6>
                            <p className='m-0 font-14'>
                              At vero eos et accusamus et iusto odio.
                            </p>
                          </td>
                          <td>02/03/2017</td>
                          <td>$521</td>
                          <td>321</td>
                          <td>
                            <div className='progress' style={{ height: '5px' }}>
                              <div
                                className='progress-bar bg-warning'
                                role='progressbar'
                                style={{ width: '40%' }}
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
                        <tr>
                          <td className='product-list-img'>
                            <img
                              src='assets/images/products/7.jpg'
                              className='img-fluid thumb-md rounded'
                              alt='tbl'
                            />
                          </td>
                          <td>
                            <h6 className='mt-0 mb-1'>
                              Outdoor Furniture Cape
                            </h6>
                            <p className='m-0 font-14'>
                              Quis autem vel eum iure te imperdiet.
                            </p>
                          </td>
                          <td>12/05/2017</td>
                          <td>$22</td>
                          <td>5410</td>
                          <td>
                            <div className='progress' style={{ height: '5px' }}>
                              <div
                                className='progress-bar bg-success'
                                role='progressbar'
                                style={{ width: '95%' }}
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
                        <tr>
                          <td className='product-list-img'>
                            <img
                              src='assets/images/products/8.jpg'
                              className='img-fluid thumb-md rounded'
                              alt='tbl'
                            />
                          </td>
                          <td>
                            <h6 className='mt-0 mb-1'>black color lamp</h6>
                            <p className='m-0 font-14'>
                              At vero eos et accusamus et iusto imperdiet.
                            </p>
                          </td>
                          <td>18/04/2017</td>
                          <td>$98</td>
                          <td>556</td>
                          <td>
                            <div className='progress' style={{ height: '5px' }}>
                              <div
                                className='progress-bar bg-warning'
                                role='progressbar'
                                style={{ width: '45%' }}
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
                        <tr>
                          <td className='product-list-img'>
                            <img
                              src='assets/images/products/2.jpg'
                              className='img-fluid thumb-md rounded'
                              alt='tbl'
                            />
                          </td>
                          <td>
                            <h6 className='mt-0 mb-1'>Riverston Glass Chair</h6>
                            <p className='m-0 font-14'>
                              natus error sit voluptatem doloremque.
                            </p>
                          </td>
                          <td>28/03/2017</td>
                          <td>$210</td>
                          <td>841</td>
                          <td>
                            <div className='progress' style={{ height: '5px' }}>
                              <div
                                className='progress-bar bg-success'
                                role='progressbar'
                                style={{ width: '85%' }}
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
                        <tr>
                          <td className='product-list-img'>
                            <img
                              src='assets/images/products/3.jpg'
                              className='img-fluid thumb-md rounded'
                              alt='tbl'
                            />
                          </td>
                          <td>
                            <h6 className='mt-0 mb-1'>
                              Trex Outdoor Furniture Cape
                            </h6>
                            <p className='m-0 font-14'>
                              Nemo enim ipsam voluptatem quia.
                            </p>
                          </td>
                          <td>22/05/2017</td>
                          <td>$652</td>
                          <td>120</td>
                          <td>
                            <div className='progress' style={{ height: '5px' }}>
                              <div
                                className='progress-bar bg-danger'
                                role='progressbar'
                                style={{ width: '35%' }}
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
                        <tr>
                          <td className='product-list-img'>
                            <img
                              src='assets/images/products/4.jpg'
                              className='img-fluid thumb-md rounded'
                              alt='tbl'
                            />
                          </td>
                          <td>
                            <h6 className='mt-0 mb-1'>3 color belt watch</h6>
                            <p className='m-0 font-14'>
                              Dolor sit consec te imperdiet iaculis.
                            </p>
                          </td>
                          <td>11/05/2017</td>
                          <td>$85</td>
                          <td>320</td>
                          <td>
                            <div className='progress' style={{ height: '5px' }}>
                              <div
                                className='progress-bar bg-info'
                                role='progressbar'
                                style={{ width: '65%' }}
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
                        <tr>
                          <td className='product-list-img'>
                            <img
                              src='assets/images/products/5.jpg'
                              className='img-fluid thumb-md rounded'
                              alt='tbl'
                            />
                          </td>
                          <td>
                            <h6 className='mt-0 mb-1'>Classic Company watch</h6>
                            <p className='m-0 font-14'>
                              Quis autem vel eum iure reprehenderit qu.
                            </p>
                          </td>
                          <td>18/04/2017</td>
                          <td>$8512</td>
                          <td>201</td>
                          <td>
                            <div className='progress' style={{ height: '5px' }}>
                              <div
                                className='progress-bar bg-success'
                                role='progressbar'
                                style={{ width: '79%' }}
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
                        <tr>
                          <td className='product-list-img'>
                            <img
                              src='assets/images/products/6.jpg'
                              className='img-fluid thumb-md rounded'
                              alt='tbl'
                            />
                          </td>
                          <td>
                            <h6 className='mt-0 mb-1'>Shine Company Chair</h6>
                            <p className='m-0 font-14'>
                              At vero eos et accusamus et iusto odio.
                            </p>
                          </td>
                          <td>02/03/2017</td>
                          <td>$521</td>
                          <td>321</td>
                          <td>
                            <div className='progress' style={{ height: '5px' }}>
                              <div
                                className='progress-bar bg-warning'
                                role='progressbar'
                                style={{ width: '40%' }}
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
                        <tr>
                          <td className='product-list-img'>
                            <img
                              src='assets/images/products/7.jpg'
                              className='img-fluid thumb-md rounded'
                              alt='tbl'
                            />
                          </td>
                          <td>
                            <h6 className='mt-0 mb-1'>
                              Outdoor Furniture Cape
                            </h6>
                            <p className='m-0 font-14'>
                              Quis autem vel eum iure te imperdiet.
                            </p>
                          </td>
                          <td>12/05/2017</td>
                          <td>$22</td>
                          <td>5410</td>
                          <td>
                            <div className='progress' style={{ height: '5px' }}>
                              <div
                                className='progress-bar bg-success'
                                role='progressbar'
                                style={{ width: '95%' }}
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
                        <tr>
                          <td className='product-list-img'>
                            <img
                              src='assets/images/products/8.jpg'
                              className='img-fluid thumb-md rounded'
                              alt='tbl'
                            />
                          </td>
                          <td>
                            <h6 className='mt-0 mb-1'>black color lamp</h6>
                            <p className='m-0 font-14'>
                              At vero eos et accusamus et iusto imperdiet.
                            </p>
                          </td>
                          <td>18/04/2017</td>
                          <td>$98</td>
                          <td>556</td>
                          <td>
                            <div className='progress' style={{ height: '5px' }}>
                              <div
                                className='progress-bar bg-warning'
                                role='progressbar'
                                style={{ width: '45%' }}
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
