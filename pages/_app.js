import React from 'react'
import Page from '../components/Page';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Page>
      <p>Hola, estoy en todos lados</p>
      <Component {...pageProps} />
    </Page>);
}

export default MyApp
