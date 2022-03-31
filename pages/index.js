import { wrapper } from '../store'
import { END } from 'redux-saga'
import { getListBank } from 'redux/actions'
import Home from 'components/Home'
import Main from 'layouts/main/MainLayout'

export default function home() {
  return (
    <Main>
      <Home />
    </Main>
  )
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  // console.log('aaaaaaabbbbbbbbbbccccccc')
  // store.dispatch(
  //   getListBank({}, (status, data) => {
  //     console.log("status: ", data);
  //     if (status) {
  //       setListBank(data.items);
  //     } else {
  //       Swal.fire({
  //         title: data.data.message,
  //         icon: "error",
  //       });
  //     }
  //   })
  // );
  // store.dispatch(END);
  // await store.sagaTask.toPromise();
})
