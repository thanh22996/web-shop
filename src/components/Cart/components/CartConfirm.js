import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import { saveCart, orderAction } from 'redux/actions'
import { validate } from 'helpers/validate'
import { useRouter } from 'next/router'

function CartConfirm(props) {
  const dispatch = useDispatch()
  const router = useRouter()
  const toastId = React.useRef(null)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    gender: '',
    address: '',
    email: '',
  })
  const [errForm, setErrForm] = useState({
    name: '',
    phone: '',
    gender: '',
    address: '',
    email: '',
  })

  const onChangeField = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = async () => {
    console.log('submit: ', formData)
    try {
      let err = {}
      err = validate(formData)
      console.log(err)
      setErrForm(err)
      if (!err) {
        console.log('vao day ne')
        const cartList = JSON.parse(localStorage.getItem('products'))
        const data = {
          customerInfo: formData,
          orderInfo: cartList.map((item) => {
            return {
              productId: item._id,
              quantity: item.quantity,
            }
          }),
        }
        console.log(data)
        dispatch(
          orderAction(data, (status, data) => {
            console.log(status)
            if (status) {
              if (!toast.isActive(toastId.current)) {
                toastId.current = toast.success('Đặt hàng thành công', {
                  position: 'top-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: false,
                  progress: undefined,
                })
              }

              dispatch(saveCart([]))
              localStorage.removeItem('products')
              router.push('/')
            }
          })
        )
      } else {
        toast.error('Đặt hàng không thành công')
      }
    } catch (error) {}
  }
  return (
    <div className='bl-list-cart'>
      <div className='bl-total-item'>
        <p>Xác nhận đặt hàng</p>
      </div>
      <div className='row bl-cart-confirm mb-3'>
        <div className='user-location'>
          <div className='custom-input'>
            <p>Họ tên</p>
            <input name='name' onChange={onChangeField} />
            {errForm && errForm.name && (
              <p className='text-error'>
                <i>{errForm.name}</i>
              </p>
            )}
          </div>
          <div className='custom-input'>
            <p>Số điện thoại</p>
            <input name='phone' onChange={onChangeField} />
            {errForm && errForm.phone && (
              <p className='text-error'>
                <i>{errForm.phone}</i>
              </p>
            )}
          </div>
          <div className='custom-input'>
            <p>Giới tính</p>
            <select id='cars' name='gender' onChange={onChangeField}>
              <option value=''>Lựa chọn giới tính</option>
              <option value='MALE'>Nam</option>
              <option value='FEMALE'>Nữ</option>
            </select>
            {errForm && errForm.gender && (
              <p className='text-error'>
                <i>{errForm.gender}</i>
              </p>
            )}
          </div>
          <div className='custom-input'>
            <p>Email</p>
            <input name='email' onChange={onChangeField} />
            {errForm && errForm.email && (
              <p className='text-error'>
                <i>{errForm.email}</i>
              </p>
            )}
          </div>
          <div className='custom-input'>
            <p>Địa chỉ</p>
            <input name='address' onChange={onChangeField} />
            {errForm && errForm.address && (
              <p className='text-error'>
                <i>{errForm.address}</i>
              </p>
            )}
          </div>

          <button onClick={onSubmit} className='submit'>
            ĐẶT HÀNG NGAY
          </button>
        </div>
      </div>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </div>
  )
}

export default CartConfirm
