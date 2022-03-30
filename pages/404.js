import React from 'react'
import Link from 'next/link'
import Main from 'layouts/main/MainLayout'

function NotFound() {
  return (
    <Main>
      <div
        style={{
          height: '500px',
          backgroundColor: '#EBEBEB',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '150px',
            fontWeight: '400',
            marginRight: '40px',
          }}
        >
          404
        </h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span
            style={{ fontSize: '30px', color: '#808081', maxWidth: '400px' }}
          >
            Xin lỗi, trang bạn đang tìm kiếm không tồn tại!
          </span>
          <Link
            style={{ marginTop: '15px', fontSize: '25px', color: '#f32723' }}
            href='/'
          >{`< Quay lại trang chủ`}</Link>
        </div>
      </div>
    </Main>
  )
}

export default NotFound
