// import { UserProvider } from "../context";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Nav from "../components/Nav";
// import Head from "next/head";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "antd/dist/antd.css";

// function MyApp({ Component, pageProps }) {
  //   return (
    //     <UserProvider>
    //       <Head />
    //       <Nav />
    //       <ToastContainer
    //         position="top-center"
    //         autoClose={5000}
    //         hideProgressBar={false}
    //         newestOnTop={false}
    //         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
//       <Component {...pageProps} />
//     </UserProvider>
//   );
// }

// export default MyApp;

// code from course resources
import { UserProvider } from "../context";
import "../public/css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/Nav";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Head>
        {/* <link rel="stylesheet" href="/css/styles.css" /> */}
      </Head>
      <Nav />
      <ToastContainer position="top-center" />
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;