import '../public/css/fontAwesome5Pro.css';
import '../public/css/elegantFont.css';
import '../public/css/style.css';
import '../public/css/animate.min.css';
import '../public/css/default.css';
import React, { useEffect } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if(typeof window !== 'undefined') {
      window.WOW = require('wowjs');
      }  
    new WOW.WOW().init();
  });



  return (
    <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="language" content="pt-BR" />
      <title>Portfólio</title>
    </Head>

     <Component {...pageProps} />
    </>
   
    )
}

export default MyApp
