import { useEffect, useRef, useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'
import Link from 'next/link'
import { useRouter } from 'next/router'

const sidebarNavItems = [
  {
    display: 'Sản phẩm',
    icon: <i class='fas fa-crow'></i>,
    to: '/admin/product-list',
    section: '',
    active: 1,
  },
  {
    display: 'Đơn hàng',
    icon: <i class='fas fa-list'></i>,
    to: '/admin/order',
    section: 'order',
    active: 2,
  },
  {
    display: 'Thêm sản phẩm',
    icon: <i class='fas fa-plus-circle'></i>,
    to: '/admin/add-product',
    section: 'add',
    active: 3,
  },
]

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [stepHeight, setStepHeight] = useState(0)
  const sidebarRef = useRef()
  const indicatorRef = useRef()
  const router = useRouter()

  const curPath = router.pathname

  console.log('router: ', router)

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector(
        '.sidebar__menu__item'
      )
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`
      setStepHeight(sidebarItem.clientHeight)
    }, 50)
  }, [])

  // change active index
  useEffect(() => {
    sidebarNavItems.map((item) => {
      if (curPath === item.to) {
        setActiveIndex(item.active)
      }
    })
  }, [curPath])

  return (
    <div className='sidebar'>
      <div ref={sidebarRef} className='sidebar__menu'>
        <div
          ref={indicatorRef}
          className='sidebar__menu__indicator'
          style={{
            transform: `translateX(-50%) translateY(${
              activeIndex * stepHeight
            }px)`,
          }}
        ></div>
        {sidebarNavItems.map((item, index) => (
          <Link href={item.to} key={index}>
            <div
              className={`sidebar__menu__item ${
                activeIndex === index + 1 ? 'active' : ''
              }`}
            >
              <div className='sidebar__menu__item__icon'>{item.icon}</div>
              <div className='sidebar__menu__item__text'>{item.display}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
