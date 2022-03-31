import React from 'react'
import Slider from 'react-slick'
import Link from 'next/link'

function SlideProduct(props) {
  const { listProduct } = props
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
      {listProduct &&
        listProduct.map((item) => {
          return (
            <div className='p-2 slider-custom' key={item.code}>
              <Link href={`/chi-tiet?code=${item.code}`}>
                <img src={item.image} alt='yenvua' />
              </Link>
            </div>
          )
        })}
    </Slider>
  )
}

export default SlideProduct
