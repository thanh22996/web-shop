import React from 'react'
import Slider from 'react-slick'

function SlideProduct(props) {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    autoplay: true,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
  }
  return (
    <Slider {...settings}>
      <div className='p-2 slider-custom'>
        <img src='/assets/imgs/san-pham-2.png' alt='yenvua' />
      </div>
      <div className='p-2 slider-custom'>
        <img src='/assets/imgs/san-pham-2.png' alt='yenvua' />
      </div>
      <div className='p-2 slider-custom'>
        <img src='/assets/imgs/san-pham-2.png' alt='yenvua' />
      </div>
      <div className='p-2 slider-custom'>
        <img src='/assets/imgs/san-pham-2.png' alt='yenvua' />
      </div>
      <div className='p-2 slider-custom'>
        <img src='/assets/imgs/san-pham-2.png' alt='yenvua' />
      </div>
      <div className='p-2 slider-custom'>
        <img src='/assets/imgs/san-pham-2.png' alt='yenvua' />
      </div>
      <div className='p-2 slider-custom'>
        <img src='/assets/imgs/san-pham-2.png' alt='yenvua' />
      </div>
      <div className='p-2 slider-custom'>
        <img src='/assets/imgs/san-pham-2.png' alt='yenvua' />
      </div>
      <div className='p-2 slider-custom'>
        <img src='/assets/imgs/san-pham-2.png' alt='yenvua' />
      </div>
      <div className='p-2 slider-custom'>
        <img src='/assets/imgs/san-pham-2.png' alt='yenvua' />
      </div>
      <div className='p-2 slider-custom'>
        <img src='/assets/imgs/san-pham-2.png' alt='yenvua' />
      </div>
      <div className='p-2 slider-custom'>
        <img src='/assets/imgs/san-pham-2.png' alt='yenvua' />
      </div>
      <div className='p-2 slider-custom'>
        <img src='/assets/imgs/san-pham-2.png' alt='yenvua' />
      </div>
      <div className='p-2 slider-custom'>
        <img src='/assets/imgs/san-pham-2.png' alt='yenvua' />
      </div>
      <div className='p-2 slider-custom'>
        <img src='/assets/imgs/san-pham-2.png' alt='yenvua' />
      </div>
      <div className='p-2 slider-custom'>
        <img src='/assets/imgs/san-pham-2.png' alt='yenvua' />
      </div>
    </Slider>
  )
}

export default SlideProduct
