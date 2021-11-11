import { wrapper } from "../store";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import "../public/assets/css/style.scss";
import { useRouter } from "next/router";
import { useEffect } from "react";


function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem("lang", router.locale);
  }, [router.locale]);
  return (
    <div className="root-next">
      <Head>
        <title>Thanh toán đảm bảo</title>
        <link href="/assets/fontawesome/css/all.css" rel="stylesheet" />
        <link
          rel="shortcut icon"
          href="/assets/img/travelook-img/icon-link.png"
          type="image/png"
        />
      </Head>
      <div>

        <Component {...pageProps} />
      </div>

    </div>
  );
}

export default wrapper.withRedux(App);
