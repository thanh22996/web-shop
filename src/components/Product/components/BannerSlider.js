import React from 'react'
import Slider from 'react-slick'

function BannerSlide() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div>
      <Slider className='slider' {...settings}>
        <div className='slider__item'>
          <img src='/assets/img/top-banner.png' alt='banner' />
        </div>
      </Slider>
    </div>
  )
}

export default BannerSlide
