import '../public/css/styles.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/Nav";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
