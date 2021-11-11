import { wrapper } from "../store";
import { END } from "redux-saga";
import { getListBank } from "../src/redux/actions";
import Test from "../src/components/Test";

export default function home() {
  return (
    <div>
      <Test />
    </div>
  );
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  console.log("aaaaaaabbbbbbbbbbccccccc");
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
});
