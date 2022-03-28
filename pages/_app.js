import { wrapper } from '../store'
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import '../public/assets/scss/styles.scss'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    localStorage.setItem('lang', router.locale)
  }, [router.locale])
  return (
    <div className='root-next'>
      <Head>
        <title>Yến vua</title>
      </Head>
      <div>
        <Component {...pageProps} />
      </div>

      {/* <script src='https://use.fontawesome.com/103ab0ff19.js'></script> */}
    </div>
  )
}

export default wrapper.withRedux(App)
