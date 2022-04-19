/** @format */

import {createGlobalStyle} from 'styled-components';
import Head from 'next/head';
import Header from '../components/layoutComponents/header';
import Footer from '../components/layoutComponents/footer';

const GlobalStyle = createGlobalStyle`




  @font-face {
    font-family: 'Now';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/Now/Now-Thin.woff');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Now';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/Now/Now-Bold.woff');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Now';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/Now/Now-Regular.woff');
    font-display: fallback;
  }


  body {
    box-sizing: border-box;
    background: #000000;
    margin: 0;
    padding: 0;
    font-family: 'Now';
  }

  html {
    scroll-behavior: smooth;

  }

`;

const Layout = ({children}) => {
    return (
        <>
            <GlobalStyle/>
            <Head>
                <meta name="p:domain_verify" content="f688d0146eb74eedee9418c063e4f9d7"/>
                <title>Breath Design Studio</title>
                <link rel='icon' type="image/png" href='../public/logo/8.png'/>
            </Head>
            <section>
                <Header/>
                {children}
                <Footer/>
            </section>
        </>
    );
};

export default Layout;
