import React from 'react'
import PropTypes from 'prop-types'

function DetailProduct(props) {
  return (
    <div className='detail-page mt-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5'>
            <div className='row mb-4'>
              <div className='col-sm-12'>
                <div className='bl-main-img'>
                  <img
                    width={'100%'}
                    src='/assets/imgs/yeuvua-main.png'
                    alt='yenvua'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-7'>
            <div className='top-info'>
              <p className='title'>Yến chưng đậu biếc</p>
              <p>
                <b>Danh mục sản phẩm: </b>Yến vua
              </p>
              <p>
                <b>Mã sản phẩm: </b>Còn hàng
              </p>
            </div>
            <p className='bl-price'>70,000 đ</p>
            <p className='bl-status'>Còn hàng</p>
            <div className='bl-booking d-flex'>
              <div className='d-flex mr-4'>
                <button>-</button>
                <span className='px-3'>1</span>
                <button>+</button>
              </div>
              <button className='btn-book'>Đặt hàng</button>
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <div>THÔNG TIN THÊM</div>
          <p>
            <i>Đối tượng sử dụng: </i>
          </p>
          <p>
            trẻ em trên 1 tuổi, người già, người khỏe mạnh, bà bầu trên 4 tháng,
            người lao động nặng hay lao động văn phòng. Đặc biệt người mới ốm
            dậy, thể trạng cơ thể ốm yếu.
          </p>
          <p>
            <i>Hướng dẫn sử dụng:</i>
          </p>
          <p>
            Buổi sáng sau khi thức dậy hoặc buổi tối trước khi đi ngủ là 2 thời
            điểm lý tưởng dùng yến. Vì đây là thời điểm cơ thể hấp thu được chất
            dinh dưỡng tốt nhất.
          </p>
          <p>- Buổi sáng trước khi ăn sáng 20 phút.</p>
          <p>- Buổi tối trước khi đi ngủ (lúc bụng đói).</p>
          <p>
            <i>Liều lượng sử dụng:</i>
          </p>
          <p>- Trẻ em trên 1 tuổi: 2 ngày 1 hũ</p>
          <p>- Trẻ em từ 3 tuổi trở lên: 1 ngày 1 hũ</p>
          <p>- Người già/người khoẻ mạnh: Mỗi mỗi ngày 1 hũ.</p>
          <p>- Bà bầu trên 4 tháng: Mỗi ngày 1 hũ.</p>
          <p>
            - Người cao huyết áp: 2 ngày dùng 1 hũ. Không dùng cho trẻ dưới 1
            tuổi và bà bầu dưới 4 tháng.
          </p>
        </div>
      </div>
    </div>
  )
}

DetailProduct.propTypes = {}

export default DetailProduct
