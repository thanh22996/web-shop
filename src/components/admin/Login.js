import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginAction } from 'redux/actions'
import { useRouter } from 'next/router'

function Login(props) {
  const dispatch = useDispatch()
  const router = useRouter()
  const [formLogin, setFormLogin] = useState({
    username: '',
    password: '',
  })
  const onChangeLogin = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(
      loginAction(formLogin, (status, data) => {
        if (status) {
          console.log(data)
          localStorage.setItem('token', data?.accessToken || '')
          router.push('/admin/product-list')
        }
      })
    )
  }

  return (
    <div className='container h-100 page-login'>
      <div className='d-flex justify-content-center h-100'>
        <div className='user_card'>
          <div className='d-flex justify-content-center'>
            <div className='brand_logo_container'>
              <p>YẾN VUA</p>
            </div>
          </div>
          <div className='d-flex justify-content-center form_container'>
            <div>
              <div className='input-group mb-3'>
                <div className='input-group-append'>
                  <span className='input-group-text'>
                    <i className='fas fa-user' />
                  </span>
                </div>
                <input
                  type='text'
                  name='username'
                  className='form-control input_user'
                  placeholder='username'
                  onChange={onChangeLogin}
                />
              </div>
              <div className='input-group mb-2'>
                <div className='input-group-append'>
                  <span className='input-group-text'>
                    <i className='fas fa-key' />
                  </span>
                </div>
                <input
                  type='password'
                  name='password'
                  className='form-control input_pass'
                  placeholder='password'
                  onChange={onChangeLogin}
                />
              </div>
              <div className='d-flex justify-content-center mt-3 login_container'>
                <button className='btn login_btn' onClick={onSubmit}>
                  Đăng nhập
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
