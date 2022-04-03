/** @format */

import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';
import Header from '../components/layoutComponents/header';
import Footer from '../components/layoutComponents/footer';

const GlobalStyle = createGlobalStyle`




    @font-face {
    font-family: 'Now';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/Now/Now-Thin.woff');
    }
    
    @font-face {
    font-family: 'Now';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/Now/Now-Bold.woff');
    }

    @font-face {
    font-family: 'Now';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/Now/Now-Regular.woff');
    }



body {
    box-sizing: border-box;
    background: #000000;
    margin: 0;
    padding: 0;
    font-family: 'Now';
}
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Head></Head>
      <section>
        <Header />
        {children}
        <Footer />
      </section>
    </>
  );
};

export default Layout;
