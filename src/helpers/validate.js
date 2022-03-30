export function validate(data) {
  let err = null
  let phone_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g
  let email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (data.phone !== '') {
    if (phone_regex.test(data.phone) === false) {
      err = {
        ...err,
        phone: 'Số điện thoại không hợp lệ',
      }
    }
  } else {
    err = {
      ...err,
      phone: 'Vui lòng điền thông tin',
    }
  }
  if (data.name === '') {
    err = {
      ...err,
      name: 'Vui lòng điền thông tin',
    }
  }
  if (data.gender === '') {
    err = {
      ...err,
      gender: 'Vui lòng chọn giới tính',
    }
  }
  if (data.address === '') {
    err = {
      ...err,
      address: 'Vui lòng điền thông tin',
    }
  }
  if (data.email !== '') {
    if (email_regex.test(data.email) === false) {
      err = {
        ...err,
        email: 'Email không hợp lệ',
      }
    }
  } else {
    err = {
      ...err,
      email: 'Vui lòng điền thông tin',
    }
  }
  return err
}
